"use client"

import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface SearchBarProps {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={cn("flex gap-2 px-5", className)}>
      <Input placeholder="Buscar" className="h-9" />
      <Button size="icon" className="h-9 w-9 shrink-0">
        <SearchIcon size={18} />
      </Button>
    </div>
  )
}
