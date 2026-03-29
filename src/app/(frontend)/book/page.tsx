'use client'

import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [servicesError, setServicesError] = useState('')

  const [fields, setFields] = useState({ name: '', phone: '', area: '', message: '' })
  const [services, setServices] = useState<string[]>([])

  useEffect(() => {
    const el = formRef.current
    if (!el) return
    el.style.transition = 'none'
    el.style.opacity = '0'
    el.style.transform = 'scale(0.64)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          'opacity 1s cubic-bezier(0.4,0,0.2,1), transform 2s cubic-bezier(0.4,0,0.2,1)'
        el.style.opacity = '1'
        el.style.transform = 'scale(1)'
      })
    })
  }, [])

  const toggleService = (s: string) =>
    setServices((prev) => {
      const next = prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
      if (next.length > 0) setServicesError('')
      return next
    })

  const handlePhoneChange = (value: string) => {
    // Only allow digits, +, spaces
    const cleaned = value.replace(/[^\d+\s]/g, '')
    // Max 10 digits (ignore + and spaces for count)
    const digitsOnly = cleaned.replace(/[^\d]/g, '')
    if (digitsOnly.length > 10) return
    setFields({ ...fields, phone: cleaned })

    if (cleaned && digitsOnly.length < 10) {
      setPhoneError('Ο αριθμός πρέπει να έχει 10 ψηφία')
    } else {
      setPhoneError('')
    }
  }

  const validate = () => {
    let valid = true

    const digits = fields.phone.replace(/[^\d]/g, '')
    if (digits.length !== 10) {
      setPhoneError('Ο αριθμός πρέπει να έχει 10 ψηφία')
      valid = false
    }

    if (services.length === 0) {
      setServicesError('Παρακαλώ επιλέξτε τουλάχιστον μία υπηρεσία')
      valid = false
    }

    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, services }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center px-4 pb-14 pt-38">
      <div ref={formRef} className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-semibold mb-2">Το αίτημά σας στάλθηκε!</h2>
            <p className="text-neutral-500">Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl mb-2 text-center">Κλείστε Ραντεβού</h1>
            <p className="text-neutral-600 text-center mb-6">
              Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας σύντομα.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Ονοματεπώνυμο</label>
                <input
                  type="text"
                  required
                  value={fields.name}
                  onChange={(e) => setFields({ ...fields, name: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="π.χ. Γιάννης Παπαδόπουλος"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Τηλέφωνο</label>
                <input
                  type="tel"
                  required
                  value={fields.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                    phoneError
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-neutral-300 focus:ring-blue-500'
                  }`}
                  placeholder="π.χ. 69XXXXXXXX"
                />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Περιοχή</label>
                <input
                  type="text"
                  required
                  value={fields.area}
                  onChange={(e) => setFields({ ...fields, area: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="π.χ. Σπάρτη"
                />
              </div>

              <div className="space-y-3">
                <label className="font-medium">
                  Υπηρεσίες <span className="text-red-500">*</span>
                </label>
                <div
                  className={`mt-1 grid gap-2 p-3 rounded-lg border transition-colors ${
                    servicesError ? 'border-red-400 bg-red-50' : 'border-transparent'
                  }`}
                >
                  {[
                    'Βάψιμο Εσωτερικών / Εξωτερικών Χώρων',
                    'Μόνωση Ταράτσας / Κεραμίδια',
                    'Τεχνοτροπίες / Υγρή Ταπετσαρία',
                    'Αλλο',
                  ].map((s) => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.includes(s)}
                        onChange={() => toggleService(s)}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
                {servicesError ? (
                  <p className="text-red-500 text-xs">{servicesError}</p>
                ) : (
                  <p className="text-xs text-neutral-500">
                    Περιλαμβάνονται όλες οι απαραίτητες εργασίες προετοιμασίας (σπατουλάρισμα
                    κ.λπ.).
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Μήνυμα (προαιρετικό)</label>
                <textarea
                  rows={4}
                  value={fields.message}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Περιγράψτε σύντομα την εργασία..."
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">
                  Κάτι πήγε στραβά. Δοκιμάστε ξανά.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition"
              >
                {loading ? 'Αποστολή...' : 'Αποστολή Αιτήματος'}
              </button>
            </form>
            <p className="text-xs text-neutral-500 text-center mt-4">
              Θα επικοινωνήσουμε μαζί σας τηλεφωνικά για λεπτομέρειες.
            </p>
          </>
        )}
      </div>
    </main>
  )
}
