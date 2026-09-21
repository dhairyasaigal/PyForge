export interface MailOptions {
  to?: string
  cc?: string
  subject: string
  body: string
}

export const OFFICIAL_COMPANY_EMAIL = 'contactpyforge@gmail.com'
export const FOUNDER_PERSONAL_EMAIL = 'saigaldhairya1@gmail.com'
export const WHATSAPP_NUMBER = '+91 6378753622'

export function generateMailtoUrl({
  to = OFFICIAL_COMPANY_EMAIL,
  cc = FOUNDER_PERSONAL_EMAIL,
  subject,
  body,
}: MailOptions): string {
  const queryParts: string[] = []
  if (cc) queryParts.push(`cc=${encodeURIComponent(cc)}`)
  if (subject) queryParts.push(`subject=${encodeURIComponent(subject)}`)
  if (body) queryParts.push(`body=${encodeURIComponent(body)}`)
  
  const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : ''
  return `mailto:${to}${queryString}`
}

export function generateGmailWebUrl({
  to = OFFICIAL_COMPANY_EMAIL,
  cc = FOUNDER_PERSONAL_EMAIL,
  subject,
  body,
}: MailOptions): string {
  const queryParts: string[] = [
    'view=cm',
    'fs=1',
    `to=${encodeURIComponent(to)}`,
  ]
  if (cc) queryParts.push(`cc=${encodeURIComponent(cc)}`)
  if (subject) queryParts.push(`su=${encodeURIComponent(subject)}`)
  if (body) queryParts.push(`body=${encodeURIComponent(body)}`)
  
  return `https://mail.google.com/mail/?${queryParts.join('&')}`
}

export function openMailClient(options: MailOptions) {
  const mailto = generateMailtoUrl(options)
  window.location.href = mailto
}
