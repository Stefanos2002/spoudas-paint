import { getServices } from '@/lib/getServices'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Services.module.css'
import ScrollReveal from '@/lib/ScrollReveal'

export default async function Services() {
  const docs = await getServices()

  return (
    <main id="υπηρεσίες" className="relative z-10 -mt-20 md:-mt-12 flex flex-col">
      <div
        className={`bg-white border-t-24 ${styles.design} border-neutral-100 rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-md pt-16 md:pt-24 overflow-hidden`}
      >
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto px-6 mb-20 ${styles.reveal}`}>
          <span className="text-blue-600 font-bold tracking-widest text-[12px] uppercase mb-2 block">
            Τι προσφερουμε
          </span>
          <h1 className="font-bold text-[28px] md:text-[2rem] tracking-tight text-blue-950 mb-6">
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
          {docs.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 w-full">
                {item.image?.url && (
                  <div
                    className={`relative w-full h-80 sm:h-96 md:h-120 ${
                      isEven ? 'md:order-last' : 'md:order-first'
                    } order-first ${isEven ? styles.revealRight : styles.revealLeft}`}
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

                <div
                  className={`${
                    isEven ? 'md:order-first' : 'md:order-last'
                  } order-last p-8 py-15 sm:py-22 md:py-0 flex flex-col justify-center text-center items-center gap-7 leading-[30px] text-lg
                  ${isEven ? styles.revealLeft : styles.revealRight}`}
                >
                  <h1 className="font-black tracking-tight text-[25px] md:text-[1.7rem] text-blue-950">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-[16px] md:text-[1rem] leading-[25px]">
                    {item.description}
                  </p>
                  <Link href={`/gallery/${item.slug}`} className="w-max">
                    <button
                      className="text-[15px] md:text-[16px] cursor-pointer
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
            )
          })}
        </div>
      </div>

      {/* Client component that runs the IntersectionObserver after hydration */}
      <ScrollReveal
        selectors={[styles.reveal, styles.revealLeft, styles.revealRight]}
        visibleClass={styles.visible}
      />
    </main>
  )
}
