import { useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { site, whatsappUrl } from '../data/site'

export function BusinessPage() {
  return (
    <>
      <Seo
        title="Business Partners — AIRBRACE"
        description="Become an AIRBRACE dealer or distributor, or send a B2B fleet enquiry."
        path="/business"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Business</p>
          <h1>Grow with AIRBRACE</h1>
          <p>
            We work with automotive retailers, accessory stores, fleet operators, and distributors who
            want a differentiated comfort product.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container split three">
          <PartnerForm id="dealer" title="Become a Dealer" intent="dealer enquiry" copy="Ideal for car accessory retailers who want demo stock and local fulfilment." />
          <PartnerForm id="distributor" title="Distributor" intent="distributor enquiry" copy="Territory distribution for states or metro clusters." />
          <PartnerForm id="b2b" title="B2B Inquiry" intent="B2B enquiry" copy="Fleet, corporate gifting, or office seating programmes." />
        </div>
        <p className="container muted" style={{ marginTop: 24 }}>
          Or write to {site.salesEmail}
        </p>
      </section>
    </>
  )
}

function PartnerForm({
  id,
  title,
  intent,
  copy,
}: {
  id: string
  title: string
  intent: string
  copy: string
}) {
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (name.length < 2 || phone.length < 10 || message.length < 8) {
      setStatus('error')
      setError('Please add your name, phone, and a short message.')
      return
    }
    window.open(
      whatsappUrl(`AIRBRACE ${intent}\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`),
      '_blank',
      'noopener,noreferrer',
    )
    setStatus('sent')
  }

  return (
    <form className="panel form-grid" id={id} onSubmit={onSubmit} noValidate>
      <h2>{title}</h2>
      <p className="muted">{copy}</p>
      {status === 'sent' ? <p className="form-success">WhatsApp is opening with your enquiry.</p> : null}
      {status === 'error' ? <p className="form-error">{error}</p> : null}
      <label className="field">
        <span>Name</span>
        <input name="name" autoComplete="name" />
      </label>
      <label className="field">
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" />
      </label>
      <button className="btn btn--dark" type="submit">
        Send on WhatsApp
      </button>
    </form>
  )
}
