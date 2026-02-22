import { getServices } from '@/lib/getServices'
import Image from 'next/image'
import Link from 'next/link'

export default async function Services() {
  const docs = await getServices()

  return (
    <main id="υπηρεσίες" className="relative z-10 -mt-20 md:-mt-12 flex flex-col">
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
          {docs.length > 0 &&
            docs.map((item, index) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div
                  className={`${
                    index % 2 === 0 ? 'order-last' : 'order-first'
                  } p-8 flex flex-col justify-center gap-7 leading-8 text-lg`}
                >
                  <h1 className="font-black tracking-tight text-3xl md:text-4xl text-blue-950">
                    {item.title}
                  </h1>
                  <p className="text-gray-600">{item.description}</p>
                  <Link href={`/gallery/${item.slug}`} className="w-max">
                    <button className="bg-neutral-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white rounded-md w-max p-2 px-4">
                      Δείτε περισσότερα έργα
                    </button>
                  </Link>
                </div>

                {item.image?.url && (
                  <div className="relative w-full h-120">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || 'Service Image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
