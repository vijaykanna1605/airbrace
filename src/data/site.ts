export const site = {
  name: 'AIRBRACE',
  legalName: 'AIRBRACE INDIA',
  tagline: 'Engineered Comfort for Every Drive',
  domain: 'https://airbrace.in',
  phoneDisplay: '+91 63857 71997',
  phoneTel: '+916385771997',
  whatsappNumber: '916385771997',
  email: 'hello@airbrace.in',
  salesEmail: 'sales@airbrace.in',
  address: 'AIRBRACE INDIA, Madurai, Tamil Nadu, India',
  hq: 'Madurai, Tamil Nadu, India',
  amazonUrl: 'https://www.amazon.in/s?k=AIRBRACE',
  amazonPro: 'https://www.amazon.in/AIRBRACE-Inbuilt-Ventilated-Accessory-Suitable/dp/B0F2FLMWZ6',
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/why-airbrace', label: 'Why AIRBRACE' },
  { to: '/about', label: 'About Us' },
  { to: '/support', label: 'Support' },
  { to: '/store-locator', label: 'Store Locator' },
] as const

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Hi AIRBRACE, I would like to know more about your products.',
  )
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}
