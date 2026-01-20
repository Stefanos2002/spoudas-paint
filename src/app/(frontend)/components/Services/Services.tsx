import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Ανανέωση Εσωτερικών Χώρων με Έμφαση στην Καθαριότητα',
      description:
        'Μεταμορφώνουμε τον χώρο σας γρήγορα και υπεύθυνα. Δίνουμε προτεραιότητα στην απόλυτη προστασία των επίπλων και των δαπέδων σας, παραδίδοντας τον χώρο πεντακάθαρο. Χρησιμοποιούμε οικολογικά, άοσμα χρώματα κορυφαίας ποιότητας για ένα υγιεινό και άψογο αισθητικά αποτέλεσμα.',
      src: '/images/interior01.jpg',
    },
    {
      id: 2,
      title: 'Εξωτερικοί Χρωματισμοί & Θωράκιση Προσόψεων',
      description:
        'Προστατέψτε το κτίριό σας από την υγρασία και τον χρόνο. Αναλαμβάνουμε την αποκατάσταση ρωγμών, τη μόνωση και τη βαφή εξωτερικών τοίχων με ειδικά ακρυλικά και ελαστομερή χρώματα αντοχής. Διαθέτουμε τον κατάλληλο εξοπλισμό για ασφαλή εργασία σε κάθε ύψος.',
      src: '/images/exterior01.jpg',
    },
    {
      id: 3,
      title: 'Υγρή Ταπετσαρία & Μοντέρνες Τεχνοτροπίες',
      description:
        'Δώστε χαρακτήρα και πολυτέλεια στους τοίχους σας. Εφαρμόζουμε υγρή ταπετσαρία που προσφέρει θερμομόνωση και ηχομόνωση, καθώς και ιδιαίτερες τεχνοτροπίες (πατητή τσιμεντοκονία, ψηφίδα τεχνοτροπίας, κ.ά.). Ιδανική λύση για να καλύψετε ατέλειες τοίχων και να δημιουργήσετε έναν χώρο που ξεχωρίζει.',
      src: '/images/wall-decoration01.jpg',
    },
    {
      id: 4,
      title: 'Μόνωση & Βαφή Ταρατσών και Κεραμιδιών',
      description:
        'Αναλαμβάνουμε τη στεγανοποίηση και θερμομόνωση ταρατσών, καθώς και τη βαφή κεραμιδιών, προστατεύοντας το κτίριό σας από υγρασία και καιρικές καταπονήσεις. Χρησιμοποιούμε μονωτικά και ανακλαστικά χρώματα υψηλής αντοχής, για μείωση της θερμοκρασίας, εξοικονόμηση ενέργειας και μακροχρόνια προστασία.',
      src: '/images/roof1.jpg',
    },
  ]
  return (
    <main id="υπηρεσίες" className="relative z-10 -mt-20 md:-mt-12 pb-10 flex flex-col">
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
        {/* Services */}
        <div className="w-full">
          {services.length > 0 &&
            services.map((service) => (
              <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div
                  className={`${service.id % 2 === 0 ? 'order-last' : 'order-first'} p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg`}
                >
                  <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                    {service.title}
                  </h1>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="bg-neutral-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white rounded-md w-max p-2 px-4">
                    Δείτε περισσότερα έργα
                  </button>
                </div>
                <div className="relative w-full h-80 md:h-auto min-h-[300px]">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
