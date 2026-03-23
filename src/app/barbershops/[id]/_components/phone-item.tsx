"use client"

import { SmartphoneIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/app/_components/ui/button"

interface PhoneItemProps {
  phone: string
}

export function PhoneItem({ phone }: PhoneItemProps) {
  function handleCopyClick() {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado!")
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon size={20} className="text-foreground" />
        <p className="text-sm text-foreground">{phone}</p>
      </div>
      <Button variant="outline" size="sm" onClick={handleCopyClick}>
        Copiar
      </Button>
    </div>
  )
}
