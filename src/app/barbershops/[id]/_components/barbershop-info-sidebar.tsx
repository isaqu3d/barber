import { MapPinIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { type BarbershopDetail } from "@/app/_constants/barbershop-detail"
import { PhoneItem } from "./phone-item"

interface BarbershopInfoSidebarProps {
  barbershop: BarbershopDetail
}

export function BarbershopInfoSidebar({
  barbershop,
}: BarbershopInfoSidebarProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5">
      <div className="relative flex h-[180px] items-end justify-center overflow-hidden rounded-lg p-5">
        <Image
          alt={barbershop.name}
          src="https://www.figma.com/api/mcp/asset/18866fdc-dcf5-4d12-961f-bd165fc1bd12"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex w-full items-center gap-3 rounded-lg bg-card px-5 py-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
            <Image
              alt={barbershop.name}
              src="https://www.figma.com/api/mcp/asset/da91faf9-6e3b-43eb-bff1-13d5232f763d"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-bold text-foreground">
              {barbershop.name}
            </p>
            <p className="truncate text-xs text-foreground">
              {barbershop.address}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-foreground">SOBRE NÓS</p>
        <p className="text-sm text-muted-foreground">{barbershop.description}</p>
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-2">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>

      <div className="h-px bg-border" />

      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          {barbershop.hours.map((item) => (
            <p key={item.day} className="text-sm text-muted-foreground">
              {item.day}
            </p>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2 text-right">
          {barbershop.hours.map((item) => (
            <p key={item.day} className="text-sm text-foreground">
              {item.time}
            </p>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      <div className="flex items-center justify-between py-2">
        <p className="text-sm text-foreground">Em parceria com</p>
        <Image alt="FSW Barber" src="/logo.png" height={18} width={130} />
      </div>
    </div>
  )
}
