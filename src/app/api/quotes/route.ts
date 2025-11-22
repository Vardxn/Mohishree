import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import nodemailer from 'nodemailer';
import businessConfig from '@/lib/config';

const quoteSchema = z.object({
  serviceCategory: z.enum(['Residential', 'Commercial', 'Industrial', 'Environmental']),
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  serviceAddress: z.string().min(10),
  details: z.any(),
});

/**
 * POST /api/quotes
 * Handle quote request submission
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = quoteSchema.parse(body);

    let quoteId = null;

    // Try to insert into database, but don't fail if DB is unavailable
    try {
      const result = await query(
        `INSERT INTO quote_requests 
         (name, phone, email, service_address, service_category, details, status, submitted_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
         RETURNING id`,
        [
          validatedData.name,
          validatedData.phone,
          validatedData.email,
          validatedData.serviceAddress,
          validatedData.serviceCategory,
          JSON.stringify(validatedData.details),
          'Pending',
        ]
      );
      quoteId = result.rows[0].id;
    } catch (dbError) {
      console.error('Database error (continuing with email):', dbError);
      // Continue even if database fails
    }

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #FFD700; color: #333; padding: 20px; text-align: center; }
              .content { background-color: #F8F9FA; padding: 30px; border-radius: 8px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0057B8; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Quote Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${validatedData.phone}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${validatedData.email}</div>
                </div>
                <div class="field">
                  <div class="label">Service Category:</div>
                  <div class="value">${validatedData.serviceCategory}</div>
                </div>
                <div class="field">
                  <div class="label">Service Address:</div>
                  <div class="value">${validatedData.serviceAddress}</div>
                </div>
                <div class="field">
                  <div class="label">Details:</div>
                  <div class="value"><pre>${JSON.stringify(validatedData.details, null, 2)}</pre></div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'mohishreejcmk2025@gmail.com',
        to: [businessConfig.email.primary, 'vardan2701@gmail.com'],
        subject: `New Quote Request - ${validatedData.serviceCategory}`,
        html: htmlContent,
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // If email fails, throw error since we need notification
      throw new Error('Failed to send quote notification email');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
        data: { id: quoteId || 'pending' },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote request error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/quotes
 * Get all quote requests (admin only)
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    let queryText = 'SELECT * FROM quote_requests';
    const queryParams: any[] = [];

    if (status) {
      queryText += ' WHERE status = $1';
      queryParams.push(status);
    }

    queryText += ` ORDER BY submitted_at DESC LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;
    queryParams.push(limit, offset);

    const result = await query(queryText, queryParams);

    // Get total count
    let countQuery = 'SELECT COUNT(*) FROM quote_requests';
    const countParams: any[] = [];
    
    if (status) {
      countQuery += ' WHERE status = $1';
      countParams.push(status);
    }

    const countResult = await query(countQuery, countParams);
    const total = parseInt(countResult.rows[0].count);

    return NextResponse.json({
      success: true,
      data: result.rows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get quotes error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
