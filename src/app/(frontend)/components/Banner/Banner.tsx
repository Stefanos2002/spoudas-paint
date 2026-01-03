import styles from './Banner.module.css'

export default function Banner() {
  return (
    <main className="pt-22">
      <div className={`${styles.banner} relative`}>
        <div className="flex flex-col gap-5 items-start absolute bottom-15 left-15">
          <h1 className="text-5xl font-black tracking-tight">Επαγγελματικές βαφές χώρων</h1>
          <h2 className="text-xl tracking-tight">
            Με εμπειρία, καθαρή δουλειά και προσοχή στη λεπτομέρεια
          </h2>
          <button className="cursor-pointer text-xl rounded-md transition-colors font-semibold duration-300 hover:text-black hover:bg-white bg-blue-950 text-white p-6 px-8">
            Ζητήστε προσφορά
          </button>
        </div>
      </div>
    </main>
  )
}
