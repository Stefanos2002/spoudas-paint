export default function GalleryLoading() {
  return (
    <div className="mt-22 px-4 columns-1 min-[600px]:columns-2 min-[930px]:columns-3 min-[1200px]:columns-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="mb-4 break-inside-avoid rounded-[10px] bg-neutral-200 animate-pulse"
          style={{ height: `${180 + (i % 3) * 60}px` }}
        />
      ))}
    </div>
  )
}
