import { getTeam } from '@/lib/getTeam'
import Image from 'next/image'

export default async function Team() {
  const team = await getTeam()
  return (
    <main id="ομάδα" className="bg-white pt-20 pb-18">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase block mb-2">
            Ποιοι ειμαστε
          </span>

          <div className="w-30 h-1 rounded bg-blue-600 mb-4"></div>

          <h2 className="font-bold text-4xl md:text-5xl text-blue-950 mb-4">Γνωρίστε την Ομάδα</h2>

          <p className="text-gray-600 max-w-xl">
            Είμαστε μια οικογενειακή επιχείρηση με πάθος για την ποιότητα και τη λεπτομέρεια. Στόχος
            μας είναι να δημιουργούμε χώρους που ξεχωρίζουν.
          </p>
        </div>
        {/* Team */}
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member) => (
            <div
              key={member.id}
              className="text-center hover:scale-105 duration-500 bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              {member.image?.url && (
                <Image
                  src={member.image.url}
                  alt={member.image.alt}
                  width={260}
                  height={260}
                  className="mx-auto rounded-full mb-6 object-cover"
                />
              )}

              <h3 className="text-xl font-bold text-blue-950">{member.name}</h3>

              <p className="text-blue-600 font-medium mb-3">{member.role}</p>

              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center hover:scale-105 transition-all duration-400 gap-3 bg-blue-900 p-4 rounded-xl justify-center">
            <span className="text-white text-xl">✔</span>
            <p className="font-medium text-white">30+ Χρόνια Εμπειρίας</p>
          </div>

          <div className="flex items-center hover:scale-105 transition-all duration-400 gap-3 bg-blue-900 p-4 rounded-xl justify-center">
            <span className="text-white text-xl">✔</span>
            <p className="font-medium text-white">Πιστοποιημένα Υλικά</p>
          </div>

          <div className="flex items-center hover:scale-105 transition-all duration-400 gap-3 bg-blue-900 p-4 rounded-xl justify-center">
            <span className="text-white text-xl">✔</span>
            <p className="font-medium text-white">Εγγύηση Ποιότητας</p>
          </div>

          <div className="flex items-center hover:scale-105 transition-all duration-400 gap-3 bg-blue-900 p-4 rounded-xl justify-center">
            <span className="text-white text-xl">✔</span>
            <p className="font-medium text-white">Άμεση Εξυπηρέτηση</p>
          </div>
        </div>
      </div>
    </main>
  )
}
