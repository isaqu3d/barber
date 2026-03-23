import Image from "next/image"

export function BookingItem() {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-border bg-card">
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="flex items-center justify-center self-start rounded-full bg-primary-muted px-2 py-0.5">
          <span className="text-xs font-bold text-primary">Confirmado</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-base font-bold text-foreground">Corte de Cabelo</p>
          <div className="flex items-center gap-2">
            <div className="relative size-6 shrink-0 overflow-hidden rounded-full">
              <Image
                alt="Vintage Barber"
                src="https://www.figma.com/api/mcp/asset/a6b156a5-faa3-4541-aa7a-326528b61159"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-foreground">Vintage Barber</span>
          </div>
        </div>
      </div>

      <div className="flex h-full shrink-0 flex-col items-center justify-center border-l border-border px-6 py-3">
        <p className="text-xs text-foreground">Fevereiro</p>
        <p className="text-2xl text-foreground">06</p>
        <p className="text-xs text-foreground">09:45</p>
      </div>
    </div>
  )
}
