import Image from 'next/image'

export default async function Team() {
  return (
    <main id="ομάδα">
      <div className="bg-white pt-20 overflow-hidden">
        {/* heading */}
        <div className="w-max mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">
            Ποιοι ειμαστε
          </span>
          <div className="w-full h-1 rounded-r-lg bg-blue-600"></div>
          <h1 className="font-bold text-5xl tracking-tight text-blue-950 mb-6">
            Γνωρίστε την Ομάδα
          </h1>
        </div>
        <div className="flex gap-5 justify-center">
          <div>
            <Image
              src={'/images/xrhstos.png'}
              alt="profile_xrhstos"
              width={300}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <Image
              src={'/images/dionysis.png'}
              alt="profile_dionysis"
              width={300}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
