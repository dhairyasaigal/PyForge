export interface PageSEO {
  title: string
  description: string
  canonical?: string
}

export const defaultSEO: PageSEO = {
  title: 'PyForge — Custom Python Software & AI for Automobile & Mechanical Engineering',
  description:
    'PyForge builds custom Python applications, CAN-bus telemetry systems, CMM inspection tools, CAD/CAM automations, and shop-floor AI tailored for the automotive and mechanical industry.',
  canonical: 'https://pyforge.in/',
}

export function updatePageSEO(seo: PageSEO) {
  // Update Title
  document.title = seo.title

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', seo.description)

  // Update OpenGraph Title & Description
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', seo.title)

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', seo.description)

  // Update Canonical URL
  let canonicalEl = document.querySelector('link[rel="canonical"]')
  if (!canonicalEl) {
    canonicalEl = document.createElement('link')
    canonicalEl.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalEl)
  }
  canonicalEl.setAttribute('href', seo.canonical || 'https://pyforge.in/')
}
