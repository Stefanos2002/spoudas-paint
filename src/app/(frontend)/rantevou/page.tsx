// import styles from './page.module.css'
export default function Page() {
  return (
    <main className="min-h-screen bg-yellow-100 flex items-center justify-center px-4 pb-14 pt-38">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className={`text-2xl mb-2 text-center`}>Κλείστε Ραντεβού</h1>

        <p className="text-neutral-600 text-center mb-6">
          Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας σύντομα.
        </p>

        <form className="space-y-4">
          {/* Όνομα */}
          <div>
            <label className="block text-sm font-medium mb-1">Ονοματεπώνυμο</label>
            <input
              type="text"
              required
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="π.χ. Γιάννης Παπαδόπουλος"
            />
          </div>

          {/* Τηλέφωνο */}
          <div>
            <label className="block text-sm font-medium mb-1">Τηλέφωνο</label>
            <input
              type="tel"
              required
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="π.χ. 69XXXXXXXX"
            />
          </div>

          {/* Περιοχή */}
          <div>
            <label className="block text-sm font-medium mb-1">Περιοχή</label>
            <input
              type="text"
              required
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="π.χ. Σπάρτη"
            />
          </div>

          {/* Υπηρεσία */}
          <div className="space-y-3">
            <label className="font-medium">Υπηρεσίες</label>

            <div className="mt-1 grid gap-2">
              {[
                'Βάψιμο Εσωτερικών / Εξωτερικών Χώρων',
                'Μόνωση Ταράτσας / Κεραμίδια',
                'Τεχνοτροπίες / Υγρή Ταπετσαρία',
                'Αλλο',
              ].map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>

            <p className="text-xs text-neutral-500">
              Περιλαμβάνονται όλες οι απαραίτητες εργασίες προετοιμασίας (σπατουλάρισμα κ.λπ.).
            </p>
          </div>

          {/* Μήνυμα */}
          <div>
            <label className="block text-sm font-medium mb-1">Μήνυμα (προαιρετικό)</label>
            <textarea
              rows={4}
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Περιγράψτε σύντομα την εργασία..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Αποστολή Αιτήματος
          </button>
        </form>

        <p className="text-xs text-neutral-500 text-center mt-4">
          Θα επικοινωνήσουμε μαζί σας τηλεφωνικά για λεπτομέρειες.
        </p>
      </div>
    </main>
  )
}
