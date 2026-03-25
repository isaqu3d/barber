import { MapPinIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { Header } from "@/app/_components/header"
import { Footer } from "@/app/_components/footer"
import { BARBERSHOP_DETAIL } from "@/app/_constants/barbershop-detail"
import { BarbershopInfoSidebar } from "./_components/barbershop-info-sidebar"
import { BarbershopMobileHeader } from "./_components/barbershop-mobile-header"
import { ServiceCard } from "./_components/service-card"
import { PhoneItem } from "./_components/phone-item"

export default function BarbershopPage() {
  const barbershop = BARBERSHOP_DETAIL

  return (
    <div className="flex flex-col">
      <div className="hidden md:block">
        <Header />
      </div>

      <div className="relative h-[250px] md:hidden">
        <Image
          alt={barbershop.name}
          src={barbershop.imageUrl}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0">
          <BarbershopMobileHeader />
        </div>
      </div>

      <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-start md:gap-10 md:px-32 md:pt-10">
        <div className="flex flex-1 flex-col gap-6">
          <div className="hidden md:block">
            <div className="relative h-[487px] w-full overflow-hidden rounded-xl">
              <Image
                alt={barbershop.name}
                src={barbershop.imageUrl}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-start justify-between px-5 pt-3 md:px-0 md:pt-0">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-foreground md:text-3xl">
                {barbershop.name}
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPinIcon size={16} className="shrink-0 text-primary" />
                  <p className="text-sm text-foreground">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-2 md:hidden">
                  <StarIcon
                    size={16}
                    className="shrink-0 fill-primary text-primary"
                  />
                  <p className="text-sm text-foreground">
                    {barbershop.rating.toFixed(1).replace(".", ",")} (
                    {barbershop.reviewsCount} avaliações)
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden shrink-0 flex-col items-center gap-1 rounded-xl bg-card px-5 py-2 md:flex">
              <div className="flex items-center gap-2">
                <StarIcon
                  size={20}
                  className="fill-primary text-primary"
                />
                <p className="text-xl text-foreground">
                  {barbershop.rating.toFixed(1).replace(".", ",")}
                </p>
              </div>
              <p className="text-xs text-foreground">
                {barbershop.reviewsCount} avaliações
              </p>
            </div>
          </div>

          <div className="h-px bg-border md:hidden" />

          <div className="flex flex-col gap-3 px-5 md:hidden">
            <h3 className="text-xs font-bold uppercase text-muted-foreground">
              Sobre nós
            </h3>
            <p className="text-sm text-foreground">{barbershop.description}</p>
          </div>

          <div className="h-px bg-border md:hidden" />

          <div className="flex flex-col gap-3 px-5 md:px-0">
            <h3 className="text-xs font-bold uppercase text-muted-foreground">
              Serviços
            </h3>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
              {barbershop.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div className="h-px bg-border md:hidden" />

          <div className="flex flex-col gap-3 px-5 md:hidden">
            <h3 className="text-xs font-bold uppercase text-muted-foreground">
              Contato
            </h3>
            {barbershop.phones.map((phone) => (
              <PhoneItem key={phone} phone={phone} />
            ))}
          </div>
        </div>

        <div className="hidden w-[386px] shrink-0 md:block">
          <BarbershopInfoSidebar barbershop={barbershop} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
