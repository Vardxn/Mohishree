import nodemailer from 'nodemailer';
import businessConfig from './config';

/**
 * Email transporter configuration
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Send contact form email notification
 * @param data Contact form data
 * @returns Promise with email send result
 */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0057B8; color: white; padding: 20px; text-align: center; }
          .content { background-color: #F8F9FA; padding: 30px; border-radius: 8px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0057B8; }
          .value { margin-top: 5px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #DEE2E6; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            ` : ''}
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from ${businessConfig.companyName} contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: businessConfig.email.primary,
    subject: `Contact Form: ${data.subject}`,
    html: htmlContent,
  });
}

/**
 * Send quote request email notification
 * @param data Quote request form data
 * @returns Promise with email send result
 */
export async function sendQuoteEmail(data: any) {
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
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Service Type:</div>
              <div class="value">${data.serviceType}</div>
            </div>
            <div class="field">
              <div class="label">Location:</div>
              <div class="value">${data.location}</div>
            </div>
            <div class="field">
              <div class="label">Service Details:</div>
              <div class="value">${data.serviceDetails}</div>
            </div>
            ${data.areaSize ? `
            <div class="field">
              <div class="label">Area Size:</div>
              <div class="value">${data.areaSize}</div>
            </div>
            ` : ''}
            ${data.frequency ? `
            <div class="field">
              <div class="label">Frequency:</div>
              <div class="value">${data.frequency}</div>
            </div>
            ` : ''}
            ${data.budget ? `
            <div class="field">
              <div class="label">Budget:</div>
              <div class="value">${data.budget}</div>
            </div>
            ` : ''}
            ${data.additionalNotes ? `
            <div class="field">
              <div class="label">Additional Notes:</div>
              <div class="value">${data.additionalNotes}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `;

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: businessConfig.email.primary,
    subject: `Quote Request: ${data.serviceType}`,
    html: htmlContent,
  });
}
