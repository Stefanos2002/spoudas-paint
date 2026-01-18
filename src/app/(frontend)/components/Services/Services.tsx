import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Ανανέωση Εσωτερικών Χώρων με Έμφαση στην Καθαριότητα',
      description:
        'Μεταμορφώνουμε τον χώρο σας γρήγορα και υπεύθυνα. Δίνουμε προτεραιότητα στην απόλυτη προστασία των επίπλων και των δαπέδων σας, παραδίδοντας τον χώρο πεντακάθαρο. Χρησιμοποιούμε οικολογικά, άοσμα χρώματα κορυφαίας ποιότητας για ένα υγιεινό και άψογο αισθητικά αποτέλεσμα.',
      image: '/images/interior01.jpg',
    },
    {
      id: 2,
      title: 'Εξωτερικοί Χρωματισμοί & Θωράκιση Προσόψεων',
      description:
        'Προστατέψτε το κτίριό σας από την υγρασία και τον χρόνο. Αναλαμβάνουμε την αποκατάσταση ρωγμών, τη μόνωση και τη βαφή εξωτερικών τοίχων με ειδικά ακρυλικά και ελαστομερή χρώματα αντοχής. Διαθέτουμε τον κατάλληλο εξοπλισμό για ασφαλή εργασία σε κάθε ύψος.',
      image: '/images/exterior01.jpg',
    },
    {
      id: 3,
      title: 'Ανανέωση Εσωτερικών Χώρων με Έμφαση στην Καθαριότητα',
      description:
        'Μεταμορφώνουμε τον χώρο σας γρήγορα και υπεύθυνα. Δίνουμε προτεραιότητα στην απόλυτη προστασία των επίπλων και των δαπέδων σας, παραδίδοντας τον χώρο πεντακάθαρο. Χρησιμοποιούμε οικολογικά, άοσμα χρώματα κορυφαίας ποιότητας για ένα υγιεινό και άψογο αισθητικά αποτέλεσμα.',
      image: '/images/wall-decoration01.jpg',
    },
    {
      id: 4,
      title: 'Ανανέωση Εσωτερικών Χώρων με Έμφαση στην Καθαριότητα',
      description:
        'Μεταμορφώνουμε τον χώρο σας γρήγορα και υπεύθυνα. Δίνουμε προτεραιότητα στην απόλυτη προστασία των επίπλων και των δαπέδων σας, παραδίδοντας τον χώρο πεντακάθαρο. Χρησιμοποιούμε οικολογικά, άοσμα χρώματα κορυφαίας ποιότητας για ένα υγιεινό και άψογο αισθητικά αποτέλεσμα.',
      image: '/images/secret-lighting01.jpg',
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
        <div className="w-full">
          {/* Service 1 */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Ανανέωση Εσωτερικών Χώρων με Έμφαση στην Καθαριότητα
              </h1>
              <p className="text-gray-600">
                Μεταμορφώνουμε τον χώρο σας γρήγορα και υπεύθυνα. Δίνουμε προτεραιότητα στην απόλυτη
                προστασία των επίπλων και των δαπέδων σας, παραδίδοντας τον χώρο πεντακάθαρο.
                Χρησιμοποιούμε οικολογικά, άοσμα χρώματα κορυφαίας ποιότητας για ένα υγιεινό και
                άψογο αισθητικά αποτέλεσμα.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-120 min-h-[300px]">
              <Image
                src="/images/interior01.jpg"
                alt="service1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                {services[0].title}
              </h1>
              <p className="text-gray-600">{services[0].description}</p>
            </div>
            <div className="relative w-full h-80 md:h-120 min-h-[300px]">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative w-full h-80 md:h-120 min-h-[300px] order-last md:order-first">
              <Image
                src="/images/exterior01.jpg"
                alt="service2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Εξωτερικοί Χρωματισμοί & Θωράκιση Προσόψεων
              </h1>
              <p className="text-gray-600">
                Προστατέψτε το κτίριό σας από την υγρασία και τον χρόνο. Αναλαμβάνουμε την
                αποκατάσταση ρωγμών, τη μόνωση και τη βαφή εξωτερικών τοίχων με ειδικά ακρυλικά και
                ελαστομερή χρώματα αντοχής. Διαθέτουμε τον κατάλληλο εξοπλισμό για ασφαλή εργασία σε
                κάθε ύψος.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Υγρή Ταπετσαρία & Μοντέρνες Τεχνοτροπίες
              </h1>
              <p className="text-gray-600">
                Δώστε χαρακτήρα και πολυτέλεια στους τοίχους σας. Εφαρμόζουμε υγρή ταπετσαρία που
                προσφέρει θερμομόνωση και ηχομόνωση, καθώς και ιδιαίτερες τεχνοτροπίες (πατητή
                τσιμεντοκονία, ψηφίδα τεχνοτροπίας, κ.ά.). Ιδανική λύση για να καλύψετε ατέλειες
                τοίχων και να δημιουργήσετε έναν χώρο που ξεχωρίζει.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-120 min-h-[300px]">
              <Image
                src="/images/wall-decoration01.jpg"
                alt="service1"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Service 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative w-full h-80 md:h-120 min-h-[300px] order-last md:order-first">
              <Image
                src="/images/secret-lighting01.jpg"
                alt="service2"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg">
              <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                Κατασκευές Γυψοσανίδας & Κρυφός Φωτισμός
              </h1>
              <p className="text-gray-600">
                Ολοκληρωμένες λύσεις διακόσμησης που αλλάζουν την ατμόσφαιρα. Αναλαμβάνουμε την
                κατασκευή ψευδοροφών και ειδικών συνθέσεων γυψοσανίδας για την εγκατάσταση κρυφού
                φωτισμού LED. Συνδυάζουμε την αρχιτεκτονική με τον φωτισμό για ένα σύγχρονο,
                λειτουργικό και εντυπωσιακό αποτέλεσμα.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
