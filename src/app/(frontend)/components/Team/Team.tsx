import { getTeam } from '@/lib/getTeam'
import Image from 'next/image'
import styles from './Team.module.css'
import ScrollReveal from '@/lib/ScrollReveal'

export default async function Team() {
  const team = await getTeam()

  return (
    <main id="team" className="bg-white pt-20 pb-18">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className={`mb-16 ${styles.reveal}`}>
          <span className="text-blue-600 font-bold tracking-widest text-[12px] uppercase block mb-2">
            Ποιοι ειμαστε
          </span>
          <div className="w-30 h-1 rounded bg-blue-600"></div>
          <h2 className="font-bold text-[24px] md:text-[1.8rem] text-blue-950 mb-4">
            Γνωρίστε την Ομάδα
          </h2>
          <p className="text-gray-600 text-[15px] max-w-xl">
            Είμαστε μια οικογενειακή επιχείρηση με πάθος για την ποιότητα και τη λεπτομέρεια. Στόχος
            μας είναι να δημιουργούμε χώρους που ξεχωρίζουν.
          </p>
        </div>

        {/* Team cards — hover scale handled in CSS module, no Tailwind conflict */}
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member) => (
            <div
              key={member.id}
              className={`${styles.cardReveal} text-center bg-gray-50 p-8 rounded-3xl shadow-sm`}
            >
              {member.image?.url && (
                <Image
                  src={member.image.url}
                  alt={member.image.alt}
                  width={260}
                  height={260}
                  sizes="260px"
                  className="mx-auto rounded-full mb-6 object-cover"
                />
              )}
              <h3 className="text-xl font-bold text-blue-950">{member.name}</h3>
              <p className="text-blue-600 text-[15px] font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges — hover scale handled in CSS module */}
        <div className="mt-20 grid max-w-md md:max-w-full mx-auto place-content-center min-[500px]:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            '30+ Χρόνια Εμπειρίας',
            'Πιστοποιημένα Υλικά',
            'Εγγύηση Ποιότητας',
            'Άμεση Εξυπηρέτηση',
          ].map((text) => (
            <div
              key={text}
              className={`${styles.badgeReveal} flex items-center gap-3 bg-blue-900 p-3 rounded-full justify-center`}
            >
              <span className="text-white text-xl">✔</span>
              <p className="font-medium text-sm text-white">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollReveal
        selectors={[styles.reveal, styles.cardReveal, styles.badgeReveal]}
        visibleClass={styles.visible}
        threshold={0.1}
      />
    </main>
  )
}
