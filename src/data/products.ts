import { images } from '../assets/images'
import { site } from './site'

export type ProductVisualKind = 'pro' | 'neo' | 'plus' | 'bed'
export type FeatureIconName =
  | 'fans'
  | 'air'
  | 'fit'
  | 'seat'
  | 'mesh'
  | 'speed'
  | 'fold'
  | 'shield'
  | 'comfort'
  | 'multi'
  | 'bolt'
  | 'sun'
  | 'pin'

export type Product = {
  slug: string
  name: string
  shortName: string
  sku: string
  tagline: string
  description: string
  longDescription: string
  price: number
  mrp: number
  badge?: string
  visual: ProductVisualKind
  image: string
  unitImage: string
  amazonUrl: string
  features: { label: string; icon: FeatureIconName }[]
  highlights: string[]
  specs: { label: string; value: string }[]
  compare: Record<string, boolean>
}

export const compareRows = [
  { key: 'ventilation', label: 'Ventilation' },
  { key: 'turboFan', label: 'Turbo Fan' },
  { key: 'multiplePorts', label: 'Multiple Ports' },
  { key: 'speedModes', label: 'Speed Modes' },
  { key: 'universalFit', label: 'Universal Fit' },
  { key: 'carUse', label: 'Car Use' },
  { key: 'officeUse', label: 'Office Use' },
] as const

export const products: Product[] = [
  {
    slug: 'apron-pro',
    name: 'AIRBRACE APRON PRO',
    shortName: 'Apron Pro',
    sku: '10x Turbo-Fan Ventilated Seat',
    tagline: '10x Turbo-Fan Ventilated Seat',
    description: 'Flagship 10-fan cushion for long Indian drives and all-day office work.',
    longDescription:
      'Apron Pro uses ten inbuilt turbo fans to push fresh air through dedicated channels across the seating surface. It is designed for tropical heat, humid monsoon days, and multi-hour commutes — without waiting for cabin AC to catch up.',
    price: 3990,
    mrp: 4999,
    badge: 'Best Seller',
    visual: 'pro',
    image: images.productPro,
    unitImage: images.unitPro,
    amazonUrl: site.amazonPro,
    features: [
      { label: '10 Built-in Fans', icon: 'fans' },
      { label: 'Turbo Airflow', icon: 'air' },
      { label: 'Universal Fit', icon: 'fit' },
      { label: 'Car & Office', icon: 'seat' },
    ],
    highlights: [
      '10 inbuilt turbo fans',
      '12V adapter with charger passthrough',
      'Fits car and office seats',
      'Installs in under 3 minutes',
    ],
    specs: [
      { label: 'Fans', value: '10 inbuilt turbo fans' },
      { label: 'Power', value: '12V car adapter' },
      { label: 'Fitment', value: 'Universal car & office seats' },
      { label: 'Install time', value: 'Under 3 minutes' },
      { label: 'Durability', value: 'Rated for 10,000 working hours' },
      { label: 'Origin', value: 'Designed & made in India' },
    ],
    compare: {
      ventilation: true,
      turboFan: true,
      multiplePorts: true,
      speedModes: true,
      universalFit: true,
      carUse: true,
      officeUse: true,
    },
  },
  {
    slug: 'apron-neo',
    name: 'AIRBRACE APRON NEO',
    shortName: 'Apron Neo',
    sku: 'Fan-Fitted Ventilated Seat Cushion',
    tagline: 'Fan-Fitted Ventilated Seat Cushion',
    description: 'Daily-driver ventilation with turbo airflow and extra device ports.',
    longDescription:
      'Apron Neo is built for people who want strong ventilation without the Pro-level fan count. Breathable mesh, turbo airflow, and multiple ports keep phones and dashcams powered while you stay cool.',
    price: 2990,
    mrp: 3799,
    visual: 'neo',
    image: images.productNeo,
    unitImage: images.unitNeo,
    amazonUrl: `${site.amazonUrl}+Apron+Neo`,
    features: [
      { label: 'Turbo Fan', icon: 'fans' },
      { label: 'Breathable', icon: 'mesh' },
      { label: 'Universal Fit', icon: 'fit' },
      { label: 'Car & Office', icon: 'seat' },
    ],
    highlights: [
      'Turbo fan with breathable mesh',
      'Multiple charger passthrough ports',
      'Universal car and office fit',
      'Quiet enough for cabin and desk',
    ],
    specs: [
      { label: 'Airflow', value: 'Turbo fan with breathable mesh' },
      { label: 'Ports', value: 'Multiple charger passthrough ports' },
      { label: 'Power', value: '12V car adapter' },
      { label: 'Fitment', value: 'Universal car & office seats' },
      { label: 'Install time', value: 'Under 3 minutes' },
      { label: 'Origin', value: 'Designed & made in India' },
    ],
    compare: {
      ventilation: true,
      turboFan: true,
      multiplePorts: true,
      speedModes: false,
      universalFit: true,
      carUse: true,
      officeUse: true,
    },
  },
  {
    slug: 'apron-plus',
    name: 'AIRBRACE APRON PLUS',
    shortName: 'Apron Plus',
    sku: 'Two-Speed Ventilated Seat Cushion',
    tagline: 'Two-Speed Ventilated Seat Cushion',
    description: 'Two-speed comfort for city traffic, highway runs, and office chairs.',
    longDescription:
      'Apron Plus introduced AIRBRACE ventilation to thousands of drivers. Switch between Power and Silent modes, drop it onto almost any seat, and feel airflow instead of trapped heat.',
    price: 2490,
    mrp: 3299,
    visual: 'plus',
    image: images.productPlus,
    unitImage: images.unitPlus,
    amazonUrl: `${site.amazonUrl}+Apron+Plus`,
    features: [
      { label: 'Two Speed Modes', icon: 'speed' },
      { label: 'Breathable', icon: 'mesh' },
      { label: 'Universal Fit', icon: 'fit' },
      { label: 'Car & Office', icon: 'seat' },
    ],
    highlights: [
      'Power and Silent speed modes',
      'Breathable seating surface',
      'Universal fitment',
      'Simple robust electronics',
    ],
    specs: [
      { label: 'Modes', value: 'Power / Silent two-speed control' },
      { label: 'Power', value: '12V car adapter' },
      { label: 'Fitment', value: 'Universal car & office seats' },
      { label: 'Install time', value: 'Under 3 minutes' },
      { label: 'Circuit', value: 'Simple robust electronics' },
      { label: 'Origin', value: 'Designed & made in India' },
    ],
    compare: {
      ventilation: true,
      turboFan: true,
      multiplePorts: false,
      speedModes: true,
      universalFit: true,
      carUse: true,
      officeUse: true,
    },
  },
  {
    slug: 'car-bed',
    name: 'AIRBRACE CAR BED',
    shortName: 'Car Bed',
    sku: 'Foldable Car Comfort Solution',
    tagline: 'Foldable Car Comfort Solution',
    description: 'Wooden-base foldable bed for rest stops, road trips, and overnight parking.',
    longDescription:
      'The AIRBRACE fabric foldable car bed turns the rear cabin into a stable rest surface. Non-inflatable wooden-base construction stays firm, packs down when you do not need it, and is built for real travel.',
    price: 3500,
    mrp: 4299,
    visual: 'bed',
    image: images.productBed,
    unitImage: images.productBed,
    amazonUrl: `${site.amazonUrl}+Car+Bed`,
    features: [
      { label: 'Foldable Design', icon: 'fold' },
      { label: 'Durable', icon: 'shield' },
      { label: 'Comfort', icon: 'comfort' },
      { label: 'Multi-use', icon: 'multi' },
    ],
    highlights: [
      'Non-inflatable wooden base',
      'Folds for boot storage',
      'Built for SUV and MPV cabins',
      'Travel-ready fabric',
    ],
    specs: [
      { label: 'Type', value: 'Non-inflatable fabric car bed' },
      { label: 'Base', value: 'Wooden support structure' },
      { label: 'Use', value: 'Rear seat rest, camping, long drives' },
      { label: 'Storage', value: 'Folds for boot or cabin storage' },
      { label: 'Build', value: 'Travel-ready durable fabric' },
      { label: 'Origin', value: 'Designed & made in India' },
    ],
    compare: {
      ventilation: false,
      turboFan: false,
      multiplePorts: false,
      speedModes: false,
      universalFit: true,
      carUse: true,
      officeUse: false,
    },
  },
]

export const compareProducts = products.filter((product) => product.visual !== 'bed')

export const whyFeatures = [
  {
    title: 'Powerful Airflow',
    text: 'Continuously reduces heat and humidity for a cooler, more comfortable ride.',
    icon: 'bolt' as const,
  },
  {
    title: 'Universal Fit',
    text: 'Designed for a wide range of car and office seats.',
    icon: 'fit' as const,
  },
  {
    title: 'Easy Installation',
    text: 'Quick and hassle-free setup without complex modifications.',
    icon: 'speed' as const,
  },
  {
    title: 'Built for Indian Conditions',
    text: 'Engineered to handle hot weather and long drives across India.',
    icon: 'sun' as const,
  },
  {
    title: 'Engineered in India',
    text: 'Proudly designed and manufactured in Madurai.',
    icon: 'pin' as const,
  },
]

export const techSteps = [
  { n: '1', title: 'Outside Air', text: 'Fresh air enters from the sides.' },
  { n: '2', title: 'Turbo Fan', text: 'High-speed fans push air through the channels.' },
  { n: '3', title: 'Air Channels', text: 'Even distribution across the seat.' },
  { n: '4', title: 'Seat Surface', text: 'Cool, comfortable and refreshed.' },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
