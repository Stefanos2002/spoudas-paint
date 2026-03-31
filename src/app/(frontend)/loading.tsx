import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-950 gap-5">
      <div className="flex items-center gap-1">
        <Image
          src="/images/logo-splash.png"
          alt="Σπουδάς"
          width={64}
          height={62}
          priority
        />
        <div className="flex flex-col -translate-x-8">
          <span className="text-white text-2xl font-black tracking-tighter leading-none">
            ΣΠΟΥΔΑΣ
          </span>
          <span className="text-blue-100 text-center bg-blue-700 px-1 py-0.5 text-[10px] font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>

      {/* Paint roller dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400"
            style={{
              animation: 'loadingBounce 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes loadingBounce {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
