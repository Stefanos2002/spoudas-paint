import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main id="αρχική">
      <div className="w-full h-screen overflow-hidden relative">
        <div className={`${styles.banner} absolute inset-0`}></div>

        <div className="flex flex-col gap-1 lg:gap-2 absolute text-center bottom-70 right-10 left-10 md:bottom-40 md:left-0 md:right-38">
          <div className={`max-w-[20rem] mx-auto md:max-w-[39rem] md:mx-0 ${styles.heroText}`}>
            <h1 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight rounded-lg px-2 py-1">
              Επαγγελματικές βαφές χώρων
            </h1>
            <h2 className="text-base font-semibold sm:font-medium sm:text-lg mb-2 text-slate-800 rounded-lg px-2 py-1">
              Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
            </h2>
          </div>
        </div>

        <Link
          href="/book"
          className="absolute bottom-26 left-5 min-[500px]:bottom-55 min-[500px]:left-1/2 min-[500px]:-translate-x-1/2 md:left-34 md:bottom-25"
        >
          <button
            className={`${styles.heroButton} cursor-pointer
                hover:translate-y-1.5
                border-b-9 border-slate-900
                text-sm sm:text-[15px] md:text-[16px]
                rounded-full transition-all duration-300
                bg-linear-to-b from-blue-900 via-blue-950 to-blue-950
                shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]
                hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]
                text-white
                py-3 px-5`}
          >
            Κλείστε ραντεβού
          </button>
        </Link>
      </div>
    </main>
  )
}
