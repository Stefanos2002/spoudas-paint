import { IoMdArrowDropdown } from 'react-icons/io'

export default function Sort() {
  return (
    <div className="mt-28 relative group w-max z-10">
      <button className="flex cursor-pointer items-center gap-1 text-md p-1.5 px-6 bg-blue-950 text-neutral-100 rounded-full">
        Ταξινόμηση κατά <IoMdArrowDropdown />
      </button>
      <div className="absolute w-full right-0 hidden group-hover:block bg-white rounded-lg shadow-lg overflow-hidden">
        <a
          href="tel:+306973188392"
          className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          697 318 8392
        </a>
        <a
          href="tel:+306989462660"
          className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
        >
          698 946 2660
        </a>
      </div>
    </div>
  )
}
