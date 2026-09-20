# AIRBRACE website

Production-ready React marketing site for AIRBRACE ventilated seat cushions and car comfort products. The homepage follows the brand layout: cinematic hero with airflow animation, product grid, why/technology/compare, and where-to-buy.

## Stack

- React 19 + TypeScript
- Vite 7
- React Router 7
- Framer Motion
- Custom CSS (no UI kit)

## Local development

```bash
cd airbrace-web
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/` and can be hosted on Vercel, Netlify, Nginx, or any CDN. SPA fallbacks are included (`vercel.json`, `public/_redirects`).

## Configuration

Copy `.env.example` if you need overrides. Amazon buttons open public AIRBRACE listings. Enquiry forms open WhatsApp with a prefilled message.

## Routes

`/`, `/products`, `/products/:slug`, `/why-airbrace`, `/about`, `/support`, `/store-locator`, `/compare`, `/technology`, `/business`, `/privacy`, `/terms`, `/warranty`, `/shipping`
