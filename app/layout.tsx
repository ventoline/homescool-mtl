import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "Centres d’instruction à domicile à Montréal",
  description:
    "Liste complète et mise à jour des centres d’instruction à domicile à Montréal.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#FFF8EE] text-gray-800 font-sans">
        {children}
      </body>
    </html>
  )
}
