import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main className="pt-22">
      <div className={`${styles.banner} relative`}>
        <div className="flex flex-col  gap-3 lg:gap-5 items-start absolute bottom-35 left-8 md:left-15">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 tracking-tight">
            Επαγγελματικές βαφές χώρων
          </h1>
          <h2 className="text-md sm:text-lg lg:text-xl tracking">
            Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
          </h2>
          <Link href="/rantevou">
            <button className="cursor-pointer text-md sm:text-lg rounded-xl transition-all duration-300 hover:tracking-[.1rem] bg-blue-950 text-white p-5 px-6">
              Κλείστε ραντεβού
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
