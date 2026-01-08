import Image from 'next/image'

export default function Services() {
  return (
    <main id="υπηρεσίες" className="my-16 flex flex-col gap-20">
      <div className="order-1 text-center max-w-2xl mx-auto px-6">
        {/* Μικρός τίτλος πάνω από τον κύριο (Eyebrow text) */}
        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">
          Τι προσφερουμε
        </span>

        {/* Κύριος Τίτλος */}
        <h1 className="font-bold text-5xl tracking-tight text-blue-950 mb-6">Υπηρεσίες</h1>

        {/* Διακοσμητική Γραμμή */}
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>

        {/* Περιγραφή για να γεμίσει το κενό */}
        <p className="text-gray-600 text-lg">
          Ολοκληρωμένες λύσεις ελαιοχρωματισμού και ανακαίνισης, προσαρμοσμένες στις ανάγκες του
          χώρου σας με έμφαση στην ποιότητα.
        </p>
      </div>
      <div className="order-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="p-15 flex flex-col justify-center gap-7 leading-8 text-lg bg-gray-50">
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
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/images/interior.jpg"
              alt="service1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/images/exterior.jpg"
              alt="service2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-15 flex flex-col justify-center gap-7 leading-8 text-lg ">
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
      </div>
    </main>
  )
}
