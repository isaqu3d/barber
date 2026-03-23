"use client"

import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"

export function BarbershopMobileHeader() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between p-5">
      <Button
        size="icon"
        variant="ghost"
        className="bg-background"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon size={20} />
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="bg-background">
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>
        <SidebarSheet />
      </Sheet>
    </div>
  )
}
