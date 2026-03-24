import { cn } from "@/app/_lib/utils"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Toaster } from "sonner"
import AuthProvider from "./_providers/auth"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Agende nos melhores com FSW Barber",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans dark", nunito.variable)}>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
