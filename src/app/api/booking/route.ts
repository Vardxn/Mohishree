import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'date', 'timeSlot', 'address', 'propertyType'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate date is in future
    const bookingDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (bookingDate < today) {
      return NextResponse.json(
        { error: 'Booking date must be in the future' },
        { status: 400 }
      );
    }

    // Generate booking ID
    const bookingId = `BK${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    // Send email notification (no database save)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const adminEmail = {
      from: process.env.EMAIL_FROM,
      to: [process.env.SMTP_USER, 'vardan2701@gmail.com'],
      subject: `New Booking: ${data.service} - ${data.date}`,
      text: `Booking ID: ${bookingId}\n\nService: ${data.service}\nDate: ${data.date}\nTime Slot: ${data.timeSlot}\n\nCustomer: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProperty Type: ${data.propertyType}\nAddress: ${data.address}\nSpecial Instructions: ${data.specialInstructions || 'N/A'}`,
    };

    const customerEmail = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: `Booking Confirmed - ${bookingId}`,
      text: `Dear ${data.name},\n\nYour booking has been confirmed!\n\nBooking ID: ${bookingId}\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.timeSlot}\nAddress: ${data.address}\n\nOur team will contact you soon. For queries, reply to this email or call us.\n\nBest regards,\nMohishree Facility Services`,
    };

    try {
      await transporter.sendMail(adminEmail);
      await transporter.sendMail(customerEmail);
    } catch (mailError) {
      console.error('Email send error:', mailError);
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Booking confirmed and email sent successfully',
    });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
