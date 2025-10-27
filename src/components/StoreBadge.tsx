import Image from "next/image"

type Props = {
  type: "apple" | "google"
  className?: string
}

export default function StoreBadge({ type, className = "" }: Props) {
  const isApple = type === "apple"
  const icon = isApple ? "/assets/banner/Apple.svg" : "/assets/banner/Playstore.svg"
  const small = isApple ? ["Download on the", "App Store"] : ["GET IT ON", "Google Play"]

  return (
    <button
      className={
        "inline-flex items-center gap-4 bg-black text-white rounded-[7.2px] px-3 py-2 shadow-sm hover:scale-105 transition-transform " +
        className
      }
      aria-label={isApple ? "Download on the App Store" : "Get it on Google Play"}
    >
      <div className="flex items-center justify-center w-9 h-9 bg-black">
        <Image src={icon} alt={type + " icon"} width={28} height={28} />
      </div>

      <div className="text-left leading-tight">
        <div className="text-[10.8px] text-white">{small[0]}</div>
        <div className="text-[21.6px] font-medium">{small[1]}</div>
      </div>
    </button>
  )
}
