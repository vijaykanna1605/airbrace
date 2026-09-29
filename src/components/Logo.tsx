type LogoProps = {
  compact?: boolean
  dark?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="logo">
      <img
        src="/logo-mark.png"
        width="28"
        height="28"
        alt=""
        aria-hidden="true"
        className="logo-mark"
      />
      {compact ? <span className="sr-only">AIRBRACE</span> : 'AIRBRACE'}
    </span>
  )
}
