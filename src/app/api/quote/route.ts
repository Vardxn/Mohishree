import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'propertyType', 'frequency'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate quote ID
    const quoteId = `QT${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    // Send email notification (no database save)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: [process.env.SMTP_USER, 'vardan2701@gmail.com'],
      subject: `New Quote Request: ${data.service}`,
      text: `Quote ID: ${quoteId}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nProperty Type: ${data.propertyType}\nArea: ${data.area || 'N/A'}\nFrequency: ${data.frequency}\nMessage: ${data.message || 'N/A'}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error('Email send error:', mailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request received and email sent successfully',
      quoteId: quoteId,
    });
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
