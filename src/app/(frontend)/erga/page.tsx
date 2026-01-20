import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      id: 1,
      altText: 'internal-1',
      src: '/images/interior01.jpg',
    },
    {
      id: 2,
      altText: 'external-1',
      src: '/images/exterior01.jpg',
    },
    {
      id: 3,
      altText: 'wall-1',
      src: '/images/wall-decoration01.jpg',
    },
    {
      id: 4,
      altText: 'roof-1',
      src: '/images/roof1.jpg',
    },
  ]
  return (
    <main>
      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="relative w-full h-64">
              <Image src={image.src} alt={image.altText} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </main>
    // <main className="relative z-10 -mt-20 md:-mt-12 pb-10 flex flex-col">
    //   <div className="bg-white rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.15)] pt-16 md:pt-24 overflow-hidden">
    //     <div className="text-center max-w-2xl mx-auto px-6 mb-20">
    //       <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">
    //         Τι προσφερουμε
    //       </span>
    //       <h1 className="font-bold text-5xl tracking-tight text-blue-950 mb-6">Υπηρεσίες</h1>
    //       <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
    //       <p className="text-gray-600 text-lg">
    //         Ολοκληρωμένες λύσεις ελαιοχρωματισμού και ανακαίνισης, προσαρμοσμένες στις ανάγκες του
    //         χώρου σας με έμφαση στην ποιότητα.
    //       </p>
    //     </div>
    //     {/* Services */}
    //     <div className="w-full">
    //       {services.length > 0 &&
    //         services.map((service, index) => (
    //           <div key={index} className="grid grid-cols-1 md:grid-cols-2 w-full">
    //             <div
    //               className={`${index % 2 === 0 ? 'order-first' : 'order-last'} p-10 md:p-20 flex flex-col justify-center gap-7 leading-8 text-lg`}
    //             >
    //               <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
    //                 {service.title}
    //               </h1>
    //               <p className="text-gray-600">{service.description}</p>
    //               <button className="bg-neutral-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white rounded-md w-max p-2 px-4">
    //                 Δείτε περισσότερα έργα
    //               </button>
    //             </div>
    //             <div className="relative w-full h-80 md:h-auto min-h-[300px]">
    //               <Image
    //                 src={service.image}
    //                 alt={service.title}
    //                 fill
    //                 className="object-cover"
    //                 sizes="(max-width: 768px) 100vw, 50vw"
    //               />
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </main>
  )
}
