import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createContactMessage } from '@/lib/queries';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Save to database
    const contactMessage = await createContactMessage({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      subject: validatedData.subject,
      message: validatedData.message,
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: [process.env.SMTP_USER, 'vardan2701@gmail.com'],
      subject: `Contact Form: ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone || ''}\nMessage: ${validatedData.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error('Email send error:', mailError);
      // Optionally, you can return a warning but not fail the request
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact inquiry submitted and email sent successfully',
        data: { id: contactMessage.id },
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