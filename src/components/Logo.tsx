type LogoProps = {
  compact?: boolean
  dark?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="logo">
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
        <path
          d="M2.5 11c0-5.2 5.1-7.8 10.4-3.6C18.1 11.5 23.2 8.9 23.2 4.2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M2.5 11c0 5.2 5.1 7.8 10.4 3.6C18.1 10.5 23.2 13.1 23.2 17.8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
      {compact ? <span className="sr-only">AIRBRACE</span> : 'AIRBRACE'}
    </span>
  )
}
