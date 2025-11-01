import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { sendContactEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

/**
 * POST /api/contact
 * Handle contact form submission
 * @param request - Next.js request object
 * @returns JSON response with success/error status
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Insert into database
    const result = await query(
      `INSERT INTO contact_inquiries 
       (name, email, phone, company, subject, message, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
       RETURNING id`,
      [
        validatedData.name,
        validatedData.email,
        validatedData.phone || null,
        validatedData.company || null,
        validatedData.subject,
        validatedData.message,
        'PENDING',
      ]
    );

    // Send email notification
    try {
      await sendContactEmail(validatedData);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact inquiry submitted successfully',
        data: { id: result.rows[0].id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

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
