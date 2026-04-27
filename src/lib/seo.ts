// ─── Fill in the TODOs below with your real business details ───────────────
export const siteConfig = {
  name: 'Σπουδάς | Χρώμα & Διακόσμηση',
  shortName: 'Σπουδάς',
  description:
    'Επαγγελματικές βαφές χώρων με 30+ χρόνια εμπειρίας. Ελαιοχρωματισμός, ανακαίνιση και διακόσμηση χώρων από οικογενειακή επιχείρηση. Ζητήστε προσφορά σήμερα.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spoudaspaint.gr',
  email: 'denisp1998glx@gmail.com',
  phone: ['+30 697 318 8392', '+30 698 946 2660'], // TODO: add second number
  locale: 'el_GR',
  address: {
    street: '', // TODO: e.g. 'Οδός Παιανίας 12'
    city: 'Βάρδα',
    region: 'Ηλείας',
    postalCode: '27052',
    country: 'GR',
  },
  // Approximate lat/lng for geo meta tags — update to your actual location
  geo: {
    lat: '  38.03055947742945',
    lng: '21.390095126516673',
  },
} as const
