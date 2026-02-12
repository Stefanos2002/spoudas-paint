import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Sort() {
  return (
    <div className="mt-28 relative group w-max z-10">
      <button className="flex cursor-pointer items-center gap-1 text-md p-1.5 px-6 bg-blue-950 text-neutral-100 rounded-full">
        Φίλτρο Εμφάνισης <IoMdArrowDropdown />
      </button>
      <div className="absolute w-full hidden group-hover:flex flex-col w-max-12 text-center bg-white rounded-lg shadow-lg overflow-hidden">
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
