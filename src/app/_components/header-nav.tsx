"use client"

import { CalendarIcon, UserIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function HeaderNav() {
  const { data } = useSession()

  return (
    <div className="flex items-center gap-6">
      <Button variant="ghost" asChild>
        <Link href="/bookings" className="flex items-center gap-2">
          <CalendarIcon size={16} />
          Agendamentos
        </Link>
      </Button>

      {data?.user ? (
        <div className="flex items-center gap-2">
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
            <Image
              alt={data.user.name ?? "Usuário"}
              src={data.user.image ?? ""}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-base font-bold text-foreground">{data.user.name}</p>
        </div>
      ) : (
        <Button asChild>
          <Link href="/auth" className="flex items-center gap-2">
            <UserIcon size={16} />
            Perfil
          </Link>
        </Button>
      )}
    </div>
  )
}
