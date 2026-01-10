import Image from 'next/image'

export default function Services() {
  return (
    <main id="υπηρεσίες" className="relative z-10 -mt-20 md:-mt-12 pb-16 flex flex-col">
      <div className="bg-white rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.15)] pt-16 md:pt-24 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto px-6 mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">
            Τι προσφερουμε
          </span>
          <h1 className="font-bold text-5xl tracking-tight text-blue-950 mb-6">Υπηρεσίες</h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Ολοκληρωμένες λύσεις ελαιοχρωματισμού και ανακαίνισης, προσαρμοσμένες στις ανάγκες του
            χώρου σας με έμφαση στην ποιότητα.
          </p>
        </div>
        <div className="w-full">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Ελαιοχρωματισμοί εσωτερικών χώρων με λεπτομέρεια και καθαριότητα
              </h1>
              <p className="text-gray-600">
                Πραγματοποιούμε σωστή προετοιμασία επιφανειών με στοκαρίσματα και λειάνσεις για
                άψογο, ομοιόμορφο αποτέλεσμα. Χρησιμοποιούμε ποιοτικά, ανθεκτικά και φιλικά προς τον
                άνθρωπο και το περιβάλλον χρώματα, ενώ φροντίζουμε για την πλήρη προστασία επίπλων
                και δαπέδων.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-auto min-h-[300px]">
              <Image
                src="/images/interior.jpg"
                alt="service1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative w-full h-80 md:h-auto min-h-[300px] order-last md:order-first">
              <Image
                src="/images/exterior.jpg"
                alt="service2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Ελαιοχρωματισμοί εξωτερικών χώρων & προσόψεων
              </h1>
              <p className="text-gray-600">
                Σωστή προετοιμασία επιφανειών, αποκατάσταση ατελειών και εφαρμογή ανθεκτικών,
                ποιοτικών χρωμάτων για μακροχρόνια προστασία από καιρικές συνθήκες. Εργαζόμαστε με
                καθαριότητα και ασφάλεια.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Τεχνοτροπίες διακόσμησης τοίχων & ειδικά εφέ
              </h1>
              <p className="text-gray-600">
                Δημιουργούμε μοναδικές ατμόσφαιρες με τεχνοτροπίες όπως σπατουλαριστά, βουρτσιστά,
                πατητή τσιμεντοκονία και άλλα ειδικά εφέ. Προσαρμόζουμε τις τεχνικές μας στις
                προτιμήσεις σας για εντυπωσιακά αποτελέσματα που αναδεικνύουν τον χώρο σας.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-auto min-h-[300px]">
              <Image
                src="/images/wall_decorations.jpg"
                alt="service1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
