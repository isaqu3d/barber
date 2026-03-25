import { BarbershopCard } from "./_components/barbershop-card"
import { BookingItem } from "./_components/booking-item"
import { Footer } from "./_components/footer"
import { Header } from "./_components/header"
import { PromoBanner } from "./_components/promo-banner"
import { QuickSearch } from "./_components/quick-search"
import { SearchBar } from "./_components/search-bar"
import {
  popularBarbershops,
  recommendedBarbershops,
} from "./_constants/barbershops"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex flex-col gap-6 py-6">
        <div className="px-5">
          <h2 className="text-xl text-foreground">
            Olá, <strong>Miguel!</strong>
          </h2>
          <p className="text-sm text-foreground">Sexta, 2 de Fevereiro</p>
        </div>

        <SearchBar />
        <QuickSearch />
        <PromoBanner />

        <div className="flex flex-col gap-3 px-5">
          <h3 className="text-muted-foreground text-xs font-bold uppercase">
            Agendamentos
          </h3>
          <BookingItem />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground px-5 text-xs font-bold uppercase">
            Recomendados
          </h3>
          <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-1">
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground px-5 text-xs font-bold uppercase">
            Populares
          </h3>
          <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-1">
            {popularBarbershops.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
