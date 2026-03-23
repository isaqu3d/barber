import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"

export function QuickSearch() {
  return (
    <div className="flex gap-3 overflow-x-auto px-5 scrollbar-hide">
      {quickSearchOptions.map((option) => (
        <Link
          key={option.title}
          href={`/barbershops?service=${option.title}`}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-3"
        >
          <Image
            alt={option.title}
            src={option.imageUrl}
            height={16}
            width={16}
          />
          <span className="text-sm font-bold text-foreground">
            {option.title}
          </span>
        </Link>
      ))}
    </div>
  )
}
