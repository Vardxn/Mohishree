# Deployment Guide - Mohishree Facility Services

## 🚀 Hosting Options & Capacity

### Option 1: Vercel (Recommended) ⭐
**Free Tier Limits:**
- **Unlimited visitors** - No hard limit on traffic
- **100 GB bandwidth/month** (≈ **50,000-100,000 visitors/month**)
- **1000 serverless function executions/day**
- **Automatic SSL** (HTTPS)
- **Global CDN** for fast loading worldwide

**Paid Pro Plan ($20/month):**
- **Unlimited bandwidth**
- **Unlimited function executions**
- **Priority support**
- **Can handle millions of visitors**

### Option 2: GitHub Pages (Static Only)
**Free Limits:**
- **100 GB bandwidth/month**
- **100,000 requests/month** (≈ **30,000-50,000 visitors**)
- **No server-side features** (APIs won't work)
- Not recommended for this project (needs API routes)

### Option 3: Netlify (Alternative)
**Free Tier:**
- **100 GB bandwidth/month**
- **125,000 serverless function requests/month**
- Similar capacity to Vercel

---

## 📦 Quick Deploy to Vercel (5 Minutes)

### Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Complete website with database and responsive design"

# Create GitHub repository (if not exists)
# Go to github.com → New Repository → Name: MohishreeFacilityServices

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/MohishreeFacilityServices.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "Import Project"**
4. **Select your GitHub repository** (MohishreeFacilityServices)
5. **Configure:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
6. **Add Environment Variables:**
   ```
   DATABASE_URL=your_production_database_url
   JWT_SECRET=your_secure_secret_key
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=mohishreejcmk2025@gmail.com
   SMTP_PASSWORD=your_app_password
   ```
7. **Click "Deploy"**

**Your site will be live in 2-3 minutes at:**
`https://mohishree-facility-services.vercel.app`

---

## 🗄️ Database Hosting (Production)

### Option 1: Supabase (Free) - Recommended
**Free Tier:**
- **500 MB database**
- **Unlimited API requests**
- **50,000 monthly active users**
- **PostgreSQL with built-in features**

**Setup:**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Copy connection string
4. Run `database/schema.sql` in Supabase SQL editor
5. Run `database/seed.sql` to populate data
6. Update `DATABASE_URL` in Vercel

### Option 2: Neon (Serverless PostgreSQL)
**Free Tier:**
- **3 GB storage**
- **Unlimited compute**
- **Auto-scaling**

### Option 3: Railway (All-in-one)
**Free Trial:**
- **$5 credit/month**
- PostgreSQL + App hosting together

---

## 📊 Expected Capacity Analysis

### Small Business (Current Scale)
**Free Tier (Vercel + Supabase):**
- **50,000+ visitors/month** ✅
- **10,000+ form submissions** ✅
- **Cost: $0/month** 💰

### Growing Business
**Vercel Pro + Supabase Pro ($45/month):**
- **500,000+ visitors/month** ✅
- **100,000+ bookings/month** ✅
- **99.99% uptime SLA**

### Enterprise Scale
**Vercel Enterprise ($Varies):**
- **Millions of visitors** ✅
- **Unlimited everything**
- **Dedicated support**

---

## 🌐 Custom Domain Setup

### Step 1: Buy Domain
- **GoDaddy**: mohishreefacilityservices.com (~₹800/year)
- **Namecheap**: ~₹600/year
- **Google Domains**: ~₹900/year

### Step 2: Connect to Vercel
1. Go to Vercel Project Settings → Domains
2. Add your domain: `mohishreefacilityservices.com`
3. Copy DNS records
4. Add to your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. Wait 24-48 hours for DNS propagation
6. SSL automatically enabled ✅

---

## 🔒 Security Checklist Before Going Live

- [ ] Update `JWT_SECRET` with strong random string (32+ characters)
- [ ] Change admin password in database
- [ ] Use production PostgreSQL (not local)
- [ ] Enable HTTPS only
- [ ] Add rate limiting to API routes
- [ ] Set up error monitoring (Sentry)
- [ ] Configure CORS properly
- [ ] Remove console.logs from production code
- [ ] Set up backups for database
- [ ] Test all forms thoroughly

---

## 📈 Monitoring & Analytics

### Google Analytics (Free)
```bash
npm install @next/third-parties
```

Add to `layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Vercel Analytics (Free)
Automatically enabled on Vercel deployment.

---

## 🚨 Common Issues & Solutions

### "Module not found"
```bash
npm install
npm run build
```

### "Database connection failed"
- Check DATABASE_URL in environment variables
- Ensure database is accessible from internet
- Verify username/password

### "Serverless function timeout"
- Optimize database queries
- Add connection pooling
- Upgrade to Pro plan for longer timeouts

---

## 💰 Cost Breakdown

### Minimal Setup (Good for 50,000 visitors/month)
| Service | Cost |
|---------|------|
| Vercel Hosting | **FREE** |
| Supabase Database | **FREE** |
| Domain (.com) | **₹800/year** |
| **Total** | **₹67/month** |

### Professional Setup (Good for 500,000 visitors/month)
| Service | Cost |
|---------|------|
| Vercel Pro | **$20/month** |
| Supabase Pro | **$25/month** |
| Domain | **₹800/year** |
| **Total** | **₹3,800/month** |

---

## 🎯 Next Steps After Deployment

1. **Test Everything:**
   - Submit booking form
   - Request quote
   - Send contact message
   - Check email notifications

2. **SEO Setup:**
   - Submit sitemap to Google Search Console
   - Create Google Business Profile
   - Set up Google Analytics

3. **Marketing:**
   - Share on social media
   - Add to Google Maps
   - Create Facebook page
   - Print on business cards

4. **Maintenance:**
   - Monitor analytics weekly
   - Update services/prices as needed
   - Add blog posts monthly
   - Respond to inquiries within 24 hours

---

## 📞 Support

**Vercel Docs:** https://vercel.com/docs
**Supabase Docs:** https://supabase.com/docs
**Next.js Docs:** https://nextjs.org/docs

---

**Ready to deploy? Follow Step 1 above!** 🚀

---

## 🔁 CLI Deployment Workflow (Preview → Production)

You can deploy directly from the terminal without opening the Vercel dashboard.

### 1. Set Vercel Token (one-time)
Generate a token at https://vercel.com/account/tokens then set it in your session:

```powershell
$Env:VERCEL_TOKEN = "YOUR_TOKEN_HERE"
```

Add to your PowerShell profile for permanence (optional):
```powershell
Add-Content -Path $PROFILE -Value '$Env:VERCEL_TOKEN="YOUR_TOKEN_HERE"'
```

### 2. Preview Deployment (staging)
Build + deploy without affecting production:
```powershell
cd MohishreeFacilityServices
./deploy-vercel.ps1
```
This produces a unique preview URL (share for testing).

### 3. Production Deployment Only
```powershell
./deploy-vercel.ps1 -Prod
```

### 4. Production Deploy + Git Commit + Push
If you want the deploy to also commit and push changes (triggering any Git‑connected production redeploy rules), use:
```powershell
./deploy-vercel.ps1 -Prod -Push
```

### 5. WhatsApp Chat Button Environment Variables
Add these (Production & Preview) for the floating green chat button:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919423679385
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi! I would like to inquire about your facility management services.
```
Replace with full international number (no plus signs or spaces). Example: `919812345678`.

### 5. NPM Script Alternative
If token is set, you can also use package.json scripts:
```powershell
npm run deploy:preview
npm run deploy:prod
```

### Notes
- Requires `VERCEL_TOKEN` env var.
- Uses `--prebuilt` so the local `npm run build` output is reused.
- Add environment variables in Vercel dashboard for production.
- Keep secrets out of commits; manage them in Vercel Project Settings.
 - WhatsApp button uses public env vars (`NEXT_PUBLIC_*`) so do not store sensitive data there.

---
