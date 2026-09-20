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

export function IconAmazon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 16c3 2 9 2 13-1" />
      <path d="M18 16.5c.8.8 1.8 1.3 2.6.2" />
      <path d="M8 9.5c.4-2 2-3.5 4-3.5 2.4 0 4 1.6 4 3.6 0 3.2-4.2 3-4.2 5.2V15" />
      <path d="M12.2 16.2v.2" />
    </Svg>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 19l1.6-3.1A8 8 0 1 1 12 20a8.2 8.2 0 0 1-3.4-.7" />
      <path d="M9.2 9.6c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .5.4.3.8.7 1.8.8 2 0 .2 0 .4-.2.5l-.4.5c-.2.2-.2.3 0 .6.3.4.8 1 1.3 1.4.4.4.6.3.8.2l.6-.3c.2-.1.4 0 .5.1.4.8.7 1.3.8 1.6.1.3 0 .5-.3.6-.4.2-1 .5-1.6.4-1.5-.2-3.2-1.3-4.4-2.6-1.2-1.3-2-3-2-4.4 0-.6.3-1.2.5-1.5Z" />
    </Svg>
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

export function IconFacebook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9a1 1 0 0 1 1-1Z" />
    </Svg>
  )
}

export function IconYoutube(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="7" width="18" height="11" rx="3" />
      <path d="M11 10.5v5l4.5-2.5-4.5-2.5Z" />
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
