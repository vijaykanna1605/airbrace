export const site = {
  name: 'AIRBRACE',
  legalName: 'AIRBRACE INDIA',
  tagline: 'Engineered Comfort for Every Drive',
  domain: 'https://airbrace.in',
  whatsappNumber: '918072109449',
  whatsappDisplay: '+91 80721 09449',
  email: 'hello@airbrace.in',
  salesEmail: 'sales@airbrace.in',
  address: '1C, Anuppanadi Rd, West Anuppanadi, Anuppanadi, Madurai, Tamil Nadu 625009',
  hq: 'Madurai, Tamil Nadu, India',
  amazonUrl: 'https://www.amazon.in/s?k=AIRBRACE',
  amazonStore: 'https://www.amazon.in/stores/AIRBRACE/page/D1D78BC8-2E7A-4E9E-B798-B41F57E80A24',
  flipkartUrl: 'https://www.flipkart.com/search?q=AIRBRACE',
  amazonPro: 'https://www.amazon.in/AIRBRACE-Inbuilt-Ventilated-Accessory-Suitable/dp/B0F2FLMWZ6',
  social: {
    instagram: 'https://www.instagram.com/airbrace/',
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
