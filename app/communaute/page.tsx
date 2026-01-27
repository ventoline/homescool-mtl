
import { getCentres, parseGeoJSONToItems } from "@/lib/parseCentres"
import Hero from "@/components/listicle/Hero"
import MapList from "@/components/MapList"
import AdUnit from "@/components/AdBlock";
import Image from "next/image";
import Link from "next/link";


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function RessourcesPage() {
  const centres = parseGeoJSONToItems()//GEOJson 
  // getCentres()//XML
  return (
    <main className="max-w-7xl mx-auto px-4  mt-0">


      <Hero  title={'Liens utiles'}/>
    <section  className="grid">
      <div className="grid gap-4 md:grid-cols-[2fr_1fr] p-3">
<div>  <p> <span className="text-gray-500">
 Le système d’école à la maison au Quebec peut être difficile à naviguer, entre systèmes multi niveaux, français CSSDM  et anglais EMSB.
 Trouve ici les liens utiles pour connaître la réglementation, les ressource nécessaires disponibles  et accéder des conseils utiles pour faire l'enseignement à la maison
réseauter.
</span> </p> 
<br/>

<p>
<h2> Incontournables pour naviguer l'ecole a la maison a Montreal.
  </h2></p>
  </div>
 <div  className="bg-black"> <Image   className="h-50 w-full object-cover"

  src="/images/children-engaged-with-book_500.jpg"
  alt="Homeschooling community in Montreal"
  width={250}
  height={250}
/>
  </div>
  </div>
 {/*  <div className="grid gap-4 md:grid-cols-[1fr_auto]" ><Image
  src="/images/children-engaged-with-book_500.jpg"
  alt="Homeschooling community in Montreal"
  width={250}
  height={250}
/></div> */}
      </section>

      {/* Ads placeholder */}
   <div className="my-2 text-center">
        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
   {/*   <AdUnit  slot="1453151522143278"/>   */} 
           <span className="text-gray-500"><i>Votre annonce ici</i></span>
       </div>
      </div>

      <section  className="grid"/*  className="grid lg:grid-cols-2 gap-10" */>
   <MapList centres={centres}/> 
  </section>



  {/*  Listicles */}
      <section className="grid lg:grid-cols-2 gap-10">
       {/* <CentreList centres={centres} />
        <MapboxMap centres={centres} /> */ }
      </section>

      {/* Related links */}
      <section className="mt-16 w-1/2 float-left">
        <h2 className="text-2xl font-bold mb-4">Voir aussi</h2>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Centres de l'école a la maison - Homeschooling a Montreal      </a>
          </li>  
          <li>
 <Link href="/ressources">
Ressources pour l'école a la maison  
</Link>
          </li>
          <li>
            <a href="/activites" className="text-blue-600 underline" /* onClick={()=> window.gtag?.("event", "goto_activities")} */>
              Activités pour homeschoolers - Montréal
            </a>
          </li>
        </ul>
      </section>
        {/* contact */}
        <section className="my-2 text-center w-1/2 float-right mt-20">

           <div className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
          <span  className=" contact-box text-gray-300">Une question? Ajouter votre centre ici? reporter un glitch? <br/><u><a href='mailto:leclubelectro@gmail.com'>Contactez-nous</a></u></span>
        </div>
        </section>
    </main>
  )
}
