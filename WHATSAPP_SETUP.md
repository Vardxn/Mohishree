# WhatsApp Chat Button Setup

This project includes a floating WhatsApp chat button (green dot) rendered by `src/components/WhatsAppButton.tsx`.

## 1. Environment Variables
Set these in Vercel Project Settings → Environment Variables (Production & Preview):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919423679385
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi! I would like to inquire about your facility management services.
```

Replace `91XXXXXXXXXX` with your full international format number (country code + number) without `+` or spaces.

Example (India):
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919423679385
```

## 2. Local Development
Add to a local `.env.local` file (not committed):
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919423679385
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi! I would like to inquire about your facility management services.
```
Then restart `npm run dev`.

## 3. Customizing
- Icon size: adjust classes in `WhatsAppButton.tsx`.
- Position: change `bottom-4 right-4` Tailwind classes.
- Disable pulse: remove the `<span>` with `animate-ping`.
- Tracking: wrap link with an analytics event handler if needed.

## 4. Testing
1. Set env vars.
2. Run: `npm run dev`.
3. Click the green button → should open a new WhatsApp chat tab/window.

## 5. Notes
- Uses `wa.me` short link format recommended by WhatsApp.
- Falls back to placeholder number if env var missing (replace ASAP).
- Message text is URL-encoded automatically.

---
Need help adjusting style or adding conditional display? Ask and we'll refine.
