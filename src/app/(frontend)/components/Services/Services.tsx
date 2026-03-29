import { getServices } from '@/lib/getServices'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Services.module.css'

export default async function Services() {
  const docs = await getServices()

  return (
    <main id="υπηρεσίες" className="relative z-10 -mt-20 md:-mt-12 flex flex-col">
      <div
        className={`bg-white border-t-24 ${styles.design} border-neutral-100 rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-md pt-16 md:pt-24 overflow-hidden`}
      >
        <div className="text-center max-w-2xl mx-auto px-6 mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-[12px] uppercase mb-2 block">
            Τι προσφερουμε
          </span>
          <h1 className="font-bold text-[28px] lg:text-[2.5rem] tracking-tight text-blue-950 mb-6">
            Υπηρεσίες
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-md sm:text-[1.1rem]">
            Ολοκληρωμένες λύσεις ελαιοχρωματισμού και ανακαίνισης, προσαρμοσμένες στις ανάγκες του
            χώρου σας με έμφαση στην ποιότητα.
          </p>
        </div>

        {/* Services */}
        <div className="w-full">
          {docs.length > 0 &&
            docs.map((item, index) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 w-full">
                {/* Image — always first on mobile, alternates on desktop */}
                {item.image?.url && (
                  <div
                    className={`relative w-full h-80 sm:h-96 md:h-120 ${
                      index % 2 === 0 ? 'md:order-last' : 'md:order-first'
                    } order-first`}
                  >
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || 'Service Image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Text — always second on mobile, alternates on desktop */}
                <div
                  className={`${
                    index % 2 === 0 ? 'md:order-first' : 'md:order-last'
                  } order-last p-8 flex flex-col justify-center text-center items-center gap-7 leading-[30px] text-lg`}
                >
                  <h1 className="font-black tracking-tight text-[25px] md:text-[2.2rem] text-blue-950">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-[16px] leading-[25px]">{item.description}</p>
                  <Link href={`/gallery/${item.slug}`} className="w-max">
                    <button
                      className="text-[15px] cursor-pointer
        bg-neutral-500
        border-b-6 border-neutral-600
        text-white
        rounded-4xl
        shadow-lg shadow-neutral-700/40
        px-3 py-2
        transition-all duration-300
        transform hover:translate-y-1"
                    >
                      Δείτε περισσότερα έργα
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
