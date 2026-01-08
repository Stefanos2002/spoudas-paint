import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main id="#" className="pt-22">
      <div className={`${styles.banner} relative`}>
        <div className="flex flex-col gap-5 items-start absolute bottom-15 left-15">
          <h1 className="text-5xl font-black text-blue-950 tracking-tight">
            Επαγγελματικές βαφές χώρων
          </h1>
          <h2 className="text-xl tracking">
            Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
          </h2>
          <button className="cursor-pointer text-lg rounded-xl transition-all duration-300 hover:tracking-[.1rem] bg-blue-950 text-white p-5 px-6">
            Ζητήστε προσφορά
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-b from-transparent to-blue-950"></div>
      </div>
    </main>
  )
}
