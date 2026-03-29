import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Sort() {
  return (
    <div className="mt-24 absolute group w-max z-10">
      <button className="flex cursor-pointer items-center gap-1 text-md p-3 px-5 text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-950 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)] font-semibold">
        Φίλτρο Εμφάνισης <IoMdArrowDropdown />
      </button>
      {/* dropdown */}
      <div
        className="
    absolute w-full
    flex flex-col text-center
    bg-white rounded-lg shadow-lg overflow-hidden
    max-h-0 group-hover:max-h-60
    transition-all duration-500 ease-in-out
  "
      >
        <Link
          href={'/gallery'}
          className="cursor-pointer text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          Ολες
        </Link>
        <Link
          href={'/gallery/interior'}
          className="cursor-pointer text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          Εσωτερικός χώρος
        </Link>
        <Link
          href={'/gallery/exterior'}
          className="cursor-pointer text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          Εξωτερικός χώρος
        </Link>
        <Link
          href={'/gallery/texnotropies'}
          className="cursor-pointer text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          Τεχνοτροπίες
        </Link>
        <Link
          href={'/gallery/monosi-taratses'}
          className="cursor-pointer text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          Μόνωση/Βάψιμο ταρατσών
        </Link>
      </div>
    </div>
  )
}
