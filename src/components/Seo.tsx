import { useEffect } from 'react'
import { site } from '../data/site'

type SeoProps = {
  title: string
  description: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    document.title = title
    const canonicalHref = `${site.domain}${path}`

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalHref)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setCanonical(canonicalHref)

    if (path === '/') {
      setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.legalName,
        url: site.domain,
        email: site.email,
        telephone: site.phoneTel,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madurai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
      })
    }
  }, [title, description, path])

  return null
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data: object) {
  let el = document.head.querySelector('script[data-seo-jsonld="org"]')
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.setAttribute('data-seo-jsonld', 'org')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}
