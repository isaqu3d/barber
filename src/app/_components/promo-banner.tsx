import Image from "next/image"

export function PromoBanner() {
  return (
    <div className="px-5">
      <div className="bg-primary-muted relative h-[150px] w-full rounded-xl">
        <Image
          alt="Promoção FSW Barber"
          src="/banner-01.png"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
