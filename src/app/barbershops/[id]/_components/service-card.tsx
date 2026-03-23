import Image from "next/image"
import { type Service } from "@/app/_constants/barbershop-detail"
import { Button } from "@/app/_components/ui/button"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-card p-3">
      <div className="relative size-[110px] shrink-0 overflow-hidden rounded-lg">
        <Image
          alt={service.name}
          src={service.imageUrl}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-foreground">{service.name}</p>
          <p className="text-xs text-muted-foreground">{service.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-primary">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(service.price)}
          </p>
          <Button variant="secondary" size="sm">
            Reservar
          </Button>
        </div>
      </div>
    </div>
  )
}
