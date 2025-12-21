# Mohishree Facility Services — Combined Project

A unified Next.js 14 + Tailwind CSS application consolidating features from both Mohishree repositories: `Mohishree-facility-services` and `MohishreeFacilityServices`.

## Features
- Marketing site with service pages (commercial, residential, industries)
- Quote requests, bookings, contact forms (API routes)
- Admin login/dashboard and customer dashboard
- Blog and case studies pages
- Pricing calculator and testimonials
- WhatsApp integration guidance (see `WHATSAPP_SETUP.md`)
- PostgreSQL database with schema and seed scripts
- Email and notifications via `nodemailer`
- Vercel-ready deployment (`vercel.json`, `deploy-vercel.ps1`)

## Tech Stack
- Next.js 14 (App Router), TypeScript
- Tailwind CSS, PostCSS
- PostgreSQL (`pg`), JWT (`jose/jsonwebtoken`), bcrypt

## Directory Structure
- `src/` — app routes, components, lib, types
- `database/` — `schema.sql`, `seed.sql`, setup guides
- `public/` — assets
- Docs: `SETUP_INSTRUCTIONS.md`, `DEPLOYMENT_GUIDE.md`, `TECHNICAL_SPECIFICATIONS.md` and more

## Setup
1. Create environment file:
   - Copy `.env.example` to `.env.local` and fill values.
2. Install dependencies:
   ```powershell
   cd .\Mohishree-Combined
   npm install
   ```
3. Initialize database (optional local dev):
   - See `database/SETUP_GUIDE.md` and run `setup-database.ps1` if needed.
4. Run dev server:
   ```powershell
   npm run dev
   ```

## Build & Deploy
- Build locally:
  ```powershell
  npm run build
  npm start
  ```
- Deploy to Vercel (requires CLI and project linked):
  ```powershell
  npm run deploy:preview
  npm run deploy:prod
  ```

## Notes
- All features from both repos are included; where duplicates existed, the most complete implementation was retained.
- For WhatsApp and contact integrations, see `WHATSAPP_SETUP.md` and `src/lib/contact.ts`.
