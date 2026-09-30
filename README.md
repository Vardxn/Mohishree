# Mohishree Facility Services 🏢

**Commercial Facility Services Marketing & Client Management Platform**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## 📌 Project Overview

**Mohishree Facility Services** is a client commercial web application built for a corporate facility management, deep cleaning, and facade access provider.

### Core Features
- **Commercial Marketing Platform:** Interactive service showcases covering commercial deep cleaning, high-rise facade access, boom lift rentals, and industrial maintenance.
- **Quote & Booking Ingestion:** Next.js App Router API routes handling real-time quote inquiries and automated email dispatch.
- **Client & Admin Dashboards:** Dedicated administrative portal for reviewing booking status and client inquiries.
- **Direct WhatsApp Messaging:** Instant quote request generation pre-filled with service scope details.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Database:** PostgreSQL (`pg`) with custom migration scripts
- **Authentication:** JWT (`jose` / `jsonwebtoken`), bcrypt
- **Deployment:** Vercel

---

## 📂 Project Structure

```
mohishree/
├── src/
│   ├── app/                       # Next.js App Router routes (services, quotes, admin, blog)
│   ├── components/                # Modular UI components, calculators & forms
│   └── lib/                       # Utility functions, database connectors & email service
├── database/                      # PostgreSQL schemas and seed scripts
├── public/                        # Static assets and media
└── README.md
```

---

## ⚙️ Setup & Local Development

### 1. Installation
```bash
git clone https://github.com/Vardxn/Mohishree.git
cd Mohishree
npm install
```

### 2. Environment Variables
Create `.env.local` based on `.env.example`:
```ini
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mohishree
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_email_api_key
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
