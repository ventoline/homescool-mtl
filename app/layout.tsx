import "./globals.css"
import type { ReactNode } from "react"
import { Inter, Roboto,Leckerli_One, Pacifico, Sour_Gummy, Borel, Bonheur_Royale  } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";



declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const leckerli = Borel({
  weight: '400', // Leckerli One only has one weight
  subsets: ['latin'], // Or other subsets if needed
  variable: "--font-leckerli",
});


export const metadata = {
  title: "Centres d’instruction à domicile à Montréal",
  description:
    "Liste complète et mise à jour des centres d’instruction à domicile à Montréal.",
}

export default function RootLayout({ children }: { children: ReactNode }) {



  return (
    <html lang="fr"  className={`${inter.variable} ${roboto.variable} ${leckerli.variable}`}>
      
      <body className="bg-[#FFF8EE] text-gray-800 font-sans">
       
        {children}
         <GoogleAnalytics gaId="G-3TPJ06NTX1" />
     </body>
    </html>
  )
}
