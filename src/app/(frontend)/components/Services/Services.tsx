import Image from 'next/image'

export default function Services() {
  return (
    <main id="υπηρεσίες" className="my-20 flex flex-col gap-35">
      <div className="order-1">
        <h1 className="font-semibold text-4xl text-center tracking-tight text-blue-950">
          Υπηρεσίες
        </h1>
      </div>
      <div className="order-2 w-full h-full grid grid-cols-1 grid-rows-6 place-items-center">
        <div className="flex items-center justify-evenly w-full">
          <Image src="/images/interior.jpg" alt="service1" width={700} height={200} />
          <div className="max-w-120 flex flex-col gap-4 leading-7 text-lg">
            <p>
              Αναλαμβάνουμε ελαιοχρωματισμούς εσωτερικών χώρων με έμφαση στη λεπτομέρεια και την
              καθαριότητα.
            </p>
            <p>
              Πριν την έναρξη της εργασίας γίνεται σωστή προετοιμασία των επιφανειών με στοκαρίσματα
              και λειάνσεις, ώστε να εξασφαλίζεται άψογο και ομοιόμορφο αποτέλεσμα.
            </p>
            <p>
              Χρησιμοποιούμε ποιοτικά και ανθεκτικά χρώματα, φιλικά προς τον άνθρωπο και το
              περιβάλλον, και φροντίζουμε για την πλήρη κάλυψη επίπλων και δαπέδων. Ο χώρος
              παραδίδεται καθαρός και έτοιμος προς χρήση.
            </p>
            <p>
              Η υπηρεσία είναι ιδανική για κατοικίες, γραφεία και επαγγελματικούς χώρους,
              προσφέροντας ανανέωση και αίσθηση φρεσκάδας.
            </p>
          </div>
        </div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </main>
  )
}
