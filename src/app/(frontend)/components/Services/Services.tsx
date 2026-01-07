import Image from 'next/image'

export default function Services() {
  return (
    <main id="υπηρεσίες" className="my-25 flex flex-col gap-20">
      <div className="order-1">
        <h1 className="font-semibold text-4xl text-center tracking-tight text-blue-950">
          Υπηρεσίες
        </h1>
      </div>
      <div className="order-2 w-full h-full">
        <div className="flex w-full">
          <Image src="/images/interior.jpg" alt="service1" width={713} height={200} />
          <div className="p-15 order-first flex flex-col gap-7 leading-8 text-lg">
            <h1 className="font-black tracking-tight text-4xl">
              Ελαιοχρωματισμοί εσωτερικών χώρων με λεπτομέρεια και καθαριότητα
            </h1>
            <p>
              Πραγματοποιούμε σωστή προετοιμασία επιφανειών με στοκαρίσματα και λειάνσεις για άψογο,
              ομοιόμορφο αποτέλεσμα. Χρησιμοποιούμε ποιοτικά, ανθεκτικά και φιλικά προς τον άνθρωπο
              και το περιβάλλον χρώματα, ενώ φροντίζουμε για την πλήρη προστασία επίπλων και
              δαπέδων. Ο χώρος παραδίδεται καθαρός και έτοιμος προς χρήση, ιδανικός για κατοικίες
              και επαγγελματικούς χώρους.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-12 w-full">
          <Image src="/images/exterior.jpg" alt="service1" width={713} height={200} />
          <div className="p-15 order-last flex flex-col gap-7 leading-8 text-lg">
            <h1 className="font-black tracking-tight text-4xl">
              Ελαιοχρωματισμοί εξωτερικών χώρων & προσόψεων
            </h1>
            <p>
              Σωστή προετοιμασία επιφανειών, αποκατάσταση ατελειών και εφαρμογή ανθεκτικών,
              ποιοτικών χρωμάτων για μακροχρόνια προστασία από καιρικές συνθήκες. Εργαζόμαστε με
              καθαριότητα και ασφάλεια, ανανεώνοντας την όψη κατοικιών και επαγγελματικών χώρων.
            </p>
          </div>
        </div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </main>
  )
}
