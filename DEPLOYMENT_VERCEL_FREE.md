# Deploy to Vercel (Free - No Database Required)

This guide deploys the Mohishree website to Vercel with **zero cost**. No database needed — all contact/quote/booking forms send emails only.

## Prerequisites
- GitHub account with the `Mohishree` repo pushed
- Gmail account for email notifications (or another SMTP service)
- Vercel account (free tier)

## Step 1: Create GitHub Repository

If not already done:
```powershell
cd .\Mohishree
git init
git add .
git commit -m "Initial project - email-only contact forms"
git remote add origin https://github.com/vardxn/Mohishree.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"Import Project"**
4. Select **`Mohishree`** repo
5. Click **Deploy** (no additional config needed for now)

Vercel will build and deploy your site. You'll get a live URL like:
```
https://mohishree.vercel.app
```

## Step 3: Configure Environment Variables

After deployment, go to **Vercel Dashboard → Project Settings → Environment Variables** and add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mohishreejcmk2025@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=mohishreejcmk2025@gmail.com
NEXT_PUBLIC_SITE_URL=https://mohishree.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=919423679385
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi! I would like to inquire about your facility management services.
```

### Getting Gmail App Password
If using Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Go to [myaccount.google.com/app-passwords](https://myaccount.google.com/app-passwords)
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password
5. Use this as `SMTP_PASSWORD` above

## Step 4: Test

1. Visit your live site: `https://mohishree.vercel.app`
2. Fill out a contact/quote/booking form
3. Check your Gmail for the notification

Done! ✅

## How It Works

- **Frontend**: Hosted on Vercel (free, fast, auto-deploys)
- **Contact Forms**: Send emails via nodemailer (free, uses your Gmail)
- **No Database**: All submissions are sent as emails only
- **WhatsApp Button**: Links to your contact number

## Cost
**$0/month** — Vercel free tier covers everything.

## Optional: Custom Domain

1. In **Vercel Settings → Domains**
2. Add your domain (e.g., `mohishree.com`)
3. Update DNS records per Vercel's instructions

## Troubleshooting

**"Email not sending"**: Check SMTP credentials in env vars. Gmail requires app password (not regular password).

**"Form returns 500 error"**: Check Vercel logs (Deployments → Function Logs).

**"Static hosting only, need serverless"**: Contact forms use Next.js API routes (included in Vercel free tier).
