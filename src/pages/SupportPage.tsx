import { useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faqs'
import { products } from '../data/products'
import { site, whatsappUrl } from '../data/site'

export function SupportPage() {
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setError('Please fill in your name, email, and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setError('Enter a valid email address.')
      return
    }

    setError('')
    const product = String(data.get('product') ?? '')
    const phone = String(data.get('phone') ?? '')
    window.open(
      whatsappUrl(
        `AIRBRACE service request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}\nMessage: ${message}`,
      ),
      '_blank',
      'noopener,noreferrer',
    )
    setStatus('sent')
    event.currentTarget.reset()
  }

  return (
    <>
      <Seo
        title="Support — AIRBRACE"
        description="Contact AIRBRACE for installation help, warranty, manuals, and service requests."
        path="/support"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Support</p>
          <h1>We are here after you buy</h1>
          <p>
            Installation, warranty, manuals, and service — write to {site.email} or send a WhatsApp
            message.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container split">
          <form className="panel form-grid" onSubmit={onSubmit} noValidate>
            <h2>Service request</h2>
            {status === 'sent' ? (
              <p className="form-success">
                WhatsApp is opening with your request. We typically reply within one working day.
              </p>
            ) : null}
            {status === 'error' ? <p className="form-error">{error}</p> : null}
            <label className="field">
              <span>Name</span>
              <input name="name" autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="field">
              <span>Product</span>
              <select name="product" defaultValue="">
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" />
            </label>
            <button className="btn btn--dark" type="submit">
              Submit request
            </button>
          </form>
          <div>
            <div className="panel" style={{ marginBottom: 20 }}>
              <h2>Talk to us</h2>
              <p className="muted" style={{ marginTop: 8 }}>
                {site.address}
                <br />
                {site.email}
              </p>
              <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" style={{ marginTop: 16 }}>
                WhatsApp support
              </a>
            </div>
            <div className="faq">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
