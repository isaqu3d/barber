import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "lucide-react"
import { Button } from "./ui/button"
import { type Barbershop } from "../_constants/barbershops"

interface BarbershopCardProps {
  barbershop: Barbershop
}

export function BarbershopCard({ barbershop }: BarbershopCardProps) {
  return (
    <div className="flex w-[167px] shrink-0 flex-col rounded-2xl border border-border bg-card">
      <div className="relative p-1 pb-2">
        <div className="relative h-[159px] w-full overflow-hidden rounded-2xl">
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-2xl bg-primary-muted/70 px-2.5 py-1 backdrop-blur-sm">
          <StarIcon size={12} className="fill-primary text-primary" />
          <span className="text-xs font-bold text-foreground">
            {barbershop.rating.toFixed(1).replace(".", ",")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-3 pb-3">
        <div className="flex flex-col gap-1">
          <p className="truncate text-base font-bold text-foreground">
            {barbershop.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {barbershop.address}
          </p>
        </div>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
        </Button>
      </div>
    </div>
  )
}
