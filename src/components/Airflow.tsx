type AirflowProps = {
  variant?: 'hero' | 'card'
}

export function Airflow({ variant = 'hero' }: AirflowProps) {
  if (variant === 'card') {
    return (
      <svg className="hero-air" viewBox="0 0 320 220" preserveAspectRatio="none" aria-hidden="true">
        <path className="air-path" d="M20 170 C80 150, 120 90, 210 70" />
        <path className="air-path delay" d="M30 190 C110 160, 150 110, 250 95" />
        <path className="air-path" d="M40 150 C90 130, 140 80, 230 55" />
      </svg>
    )
  }

  return (
    <svg className="hero-air" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
      <path className="air-path" d="M520 520 C720 470, 860 330, 1180 280" />
      <path className="air-path delay" d="M500 560 C740 500, 900 360, 1240 310" />
      <path className="air-path" d="M540 600 C760 540, 940 400, 1280 360" />
      <path className="air-path delay" d="M560 480 C780 430, 980 300, 1320 250" />
    </svg>
  )
}
