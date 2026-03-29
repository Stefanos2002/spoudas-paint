import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main id="αρχική" className="pt-19">
      <div className="w-full h-screen overflow-hidden relative">
        <div className={`${styles.banner} absolute inset-0`}></div>

        <div className="flex flex-col gap-1 lg:gap-2 items-start absolute text-center bottom-70 right-10 left-10 md:bottom-35 md:left-15">
          {/* <div className="bg-white/10 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none rounded-2xl"> */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-blue-950 tracking-tight rounded-lg px-2 py-1">
            Επαγγελματικές βαφές χώρων
          </h1>
          <h2 className="text-base font-semibold sm:text-lg lg:text-[1.2rem] mb-2 text-slate-800 rounded-lg px-2 py-1">
            Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
          </h2>
        </div>
        <Link href="/rantevou" className="absolute bottom-26 left-5">
          <button
            className="cursor-pointer
                hover:translate-y-1.5
                border-b-9 border-slate-900
                text-sm sm:text-md
                rounded-full transition-all duration-300
                bg-linear-to-b from-blue-900 via-blue-950 to-blue-950
                shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]
                hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]
                text-white
                py-3 px-5"
          >
            Κλείστε ραντεβού
          </button>
        </Link>
      </div>
    </main>
  )
}
