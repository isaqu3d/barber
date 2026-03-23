"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SearchBar() {
  return (
    <div className="flex gap-2 px-5">
      <Input placeholder="Buscar" className="h-9" />
      <Button size="icon" className="h-9 w-9 shrink-0">
        <SearchIcon size={18} />
      </Button>
    </div>
  )
}
