import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 18, className = 'icon', children, ...props }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconArrow(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

function BrandIcon({ size = 18, className, children, ...props }: IconProps) {
  return (
    <svg
      className={className ? `icon-brand ${className}` : 'icon-brand'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconAmazon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path
        d="M4 15.2c2.6 2.4 6 3.6 9.6 3.6 2.8 0 5.4-.8 7.6-2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M19.4 13.6 22 16.2l-2.9.15" fill="currentColor" />
    </BrandIcon>
  )
}

export function IconFlipkart(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path
        fill="#FFE11B"
        d="M2.4 8.4h19.2L20 21.1a1.3 1.3 0 0 1-1.3 1.2H5.3A1.3 1.3 0 0 1 4 21.1L2.4 8.4Z"
      />
      <path fill="#2874F0" d="M8 8.4V6.3a4 4 0 0 1 8 0v2.1h-2.2V6.3a1.8 1.8 0 0 0-3.6 0v2.1H8Z" />
      <path fill="#2874F0" d="M6.7 11.6h7.1v2H9.3v1.4h3.9v1.9H9.3V19H6.7v-7.4Z" />
    </BrandIcon>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.14h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.89c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.91-4.35-.14-.19-1.17-1.55-1.17-2.96s.74-2.1 1-2.39c.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.29-.12.56.17.27.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.1 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.7-.17 1.38Z"
      />
    </BrandIcon>
  )
}

export function IconBag(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </Svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="1.8" />
    </Svg>
  )
}

export function IconFans(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.4 6.4l2.1 2.1M15.5 15.5l2.1 2.1M17.6 6.4l-2.1 2.1M8.5 15.5l-2.1 2.1" />
    </Svg>
  )
}

export function IconAir(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8h11a2.5 2.5 0 1 0 0-5" />
      <path d="M4 12h13a2.5 2.5 0 1 1 0 5" />
      <path d="M4 16h8" />
    </Svg>
  )
}

export function IconFit(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <path d="M8 7V5.8A2.8 2.8 0 0 1 16 5.8V7" />
    </Svg>
  )
}

export function IconSeat(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 5h8v8H8z" />
      <path d="M7 13h10v5H7z" />
      <path d="M6 20h12" />
    </Svg>
  )
}

export function IconMesh(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 5v14M15 5v14M5 9h14M5 15h14" />
    </Svg>
  )
}

export function IconSpeed(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 16a8 8 0 1 1 14 0" />
      <path d="M12 16l4-5" />
    </Svg>
  )
}

export function IconFold(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 7h12v10H6z" />
      <path d="M12 7v10" />
      <path d="M6 12h12" />
    </Svg>
  )
}

export function IconShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 4 6 6.5v5c0 4 2.6 6.8 6 8.5 3.4-1.7 6-4.5 6-8.5v-5L12 4Z" />
    </Svg>
  )
}

export function IconComfort(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 14c2-4 4-6 8-6s6 2 8 6" />
      <path d="M7 17h10" />
    </Svg>
  )
}

export function IconMulti(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="5" width="7" height="7" rx="1.5" />
      <rect x="13" y="5" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
    </Svg>
  )
}

export function IconBolt(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 3 6 14h6l-1 7 7-11h-6l1-7Z" />
    </Svg>
  )
}

export function IconSun(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4" />
    </Svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.6 7.4h.01" />
    </Svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13l4 4 10-10" />
    </Svg>
  )
}

export const featureIcons = {
  fans: IconFans,
  fan: IconFans,
  air: IconAir,
  fit: IconFit,
  seat: IconSeat,
  use: IconSeat,
  mesh: IconMesh,
  layers: IconMesh,
  speed: IconSpeed,
  fold: IconFold,
  shield: IconShield,
  comfort: IconComfort,
  multi: IconMulti,
  bolt: IconBolt,
  sun: IconSun,
  pin: IconPin,
} as const

export type FeatureIconName = keyof typeof featureIcons
