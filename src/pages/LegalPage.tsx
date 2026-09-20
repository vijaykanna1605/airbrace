import { Seo } from '../components/Seo'

type LegalKey = 'privacy' | 'terms' | 'warranty' | 'shipping'

const pages: Record<
  LegalKey,
  { title: string; path: string; description: string; blocks: { heading: string; body: string }[] }
> = {
  privacy: {
    title: 'Privacy Policy',
    path: '/privacy',
    description: 'How AIRBRACE INDIA collects and uses information on this website.',
    blocks: [
      {
        heading: 'What we collect',
        body: 'If you send a support or dealer form, we receive the name, email, phone, and message you type. We do not sell personal data.',
      },
      {
        heading: 'How we use it',
        body: 'We use contact details only to reply to your request, honour warranty, or discuss a business partnership.',
      },
      {
        heading: 'Cookies',
        body: 'This site uses only cookies required to run the website. Analytics, if added later, will be listed here.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    path: '/terms',
    description: 'Terms of use for the AIRBRACE website and product information.',
    blocks: [
      {
        heading: 'Using this site',
        body: 'Product photos, prices, and specifications on this website are for information. Purchases through Amazon or retail partners follow that seller’s checkout terms.',
      },
      {
        heading: 'Intellectual property',
        body: 'AIRBRACE marks, product names, and site design are owned by AIRBRACE INDIA. Do not copy them without written permission.',
      },
    ],
  },
  warranty: {
    title: 'Warranty Policy',
    path: '/warranty',
    description: '12-month limited warranty terms for AIRBRACE products.',
    blocks: [
      {
        heading: 'Coverage',
        body: 'AIRBRACE products include a 12-month limited warranty against manufacturing defects in fans, stitching, and electrical parts from the date of purchase.',
      },
      {
        heading: 'Not covered',
        body: 'Normal wear, misuse, water damage from soaking the housing, or unauthorized repairs are not covered.',
      },
      {
        heading: 'How to claim',
        body: 'Keep your invoice and write to support@airbrace.in or use the Support page. We may repair, replace, or guide a return through the original seller.',
      },
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    path: '/shipping',
    description: 'How AIRBRACE products are delivered via Amazon and retail partners.',
    blocks: [
      {
        heading: 'Amazon orders',
        body: 'Delivery speed, tracking, and returns follow Amazon’s policies for the listing you buy.',
      },
      {
        heading: 'Retail pickup',
        body: 'Stores listed in the locator can confirm stock by phone. Availability varies by city.',
      },
    ],
  },
}

export function LegalPage({ kind }: { kind: LegalKey }) {
  const page = pages[kind]

  return (
    <>
      <Seo title={`${page.title} — AIRBRACE`} description={page.description} path={page.path} />
      <section className="page-hero">
        <div className="container">
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container legal-copy">
          {page.blocks.map((block) => (
            <div key={block.heading}>
              <h2>{block.heading}</h2>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
