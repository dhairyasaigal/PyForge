// Analytics & Telemetry Tracker for PyForge

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void
  }
}

export function trackEvent(category: string, action: string, label?: string, value?: number) {
  // 1. Google Analytics 4 support if configured
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // 2. Plausible support if configured
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(`${category}:${action}`, {
      props: { label, value },
    })
  }

  // 3. Fallback console telemetry in development
  if (import.meta.env.DEV) {
    console.debug(`[Telemetry] ${category} -> ${action} (${label || 'n/a'})`)
  }
}
