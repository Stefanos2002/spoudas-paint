import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main className="pt-19">
      <div className={`${styles.banner} relative`}>
        <div className="flex flex-col gap-0 lg:gap-2 items-start absolute bottom-35 left-8 md:left-15">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-blue-950 tracking-tight">
            Επαγγελματικές βαφές χώρων
          </h1>
          <h2 className="text-md sm:text-lg lg:text-[1.2rem] mb-2">
            Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
          </h2>
          <Link href="/rantevou">
            <button
              className="cursor-pointer
  hover:translate-y-1.5
  border-b-6 border-slate-900
  text-md sm:text-lg
  rounded-xl
  transition-all duration-300
  bg-linear-to-b from-blue-900 via-blue-950 to-blue-950
  shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]
  hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]
  text-white
  py-3 px-4"
            >
              Κλείστε ραντεβού
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
