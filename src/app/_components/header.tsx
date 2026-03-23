import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { HeaderNav } from "./header-nav"
import SidebarSheet from "./sidebar-sheet"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"

export function Header() {
  return (
    <header className="flex flex-col border-b border-border bg-background">
      <div className="flex items-center justify-between px-5 py-6 md:px-32">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={130} />
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon size={20} />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>

        <div className="hidden md:flex">
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}
