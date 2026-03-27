import { type Barbershop } from "../_constants/barbershops"
import { BarbershopCard } from "./barbershop-card"

interface BarbershopSectionProps {
  title: string
  barbershops: Barbershop[]
}

export function BarbershopSection({ title, barbershops }: BarbershopSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="px-5 text-xs font-bold uppercase text-muted-foreground md:px-32">
        {title}
      </h3>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-1 md:px-32">
        {barbershops.map((barbershop) => (
          <BarbershopCard key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}
