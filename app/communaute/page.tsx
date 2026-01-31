
import { getCentres, parseGeoJSONToItems } from "@/lib/parseCentres"
import Hero from "@/components/listicle/Hero"
import MapList from "@/components/MapList"
import AdUnit from "@/components/AdBlock";
import Image from "next/image";
import Link from "next/link";
import CentreList from "@/components/listicle/CentreList";
import { DataProvider } from "@/components/DataProvider";
import RefList from "@/components/RefList";


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function RessourcesPage() {

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

<p>Comme point de départ,il est avise de se rapprocher de son école de quartier (<Link href='https://www.cssdm.gouv.qc.ca/trouver-une-ecole'>en francais</Link> ou <Link href="https://apps.emsb.qc.ca/SchoolFinder/en-CA">anglophone</Link>) pour des directives. </p>
<p> </p>

  <h2>Ici les Incontournables pour naviguer l'école a la maison a Montréal.
  </h2>
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

       {/*<section  className="grid">
   <MapList centres={centres}/> 
 </section> */}


  {/*  Listicles */}
      <section /* className="grid lg:grid-cols-2 gap-10" */>
      <RefList  type={'admin'} />

      </section>

      {/* Related links */}
      <section className="mt-16 w-1/2 float-left">
        <h2 className="text-2xl font-bold mb-4">Voir aussi</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Centres de l'école a la maison - Homeschooling a Montreal      </Link>
          </li>  
          <li>
 <Link href="/ressources">
Ressources pour l'école a la maison  
</Link>
          </li>
          <li>
            <Link href="/activites" className="text-blue-600 underline" /* onClick={()=> window.gtag?.("event", "goto_activities")} */>
              Activités pour homeschoolers - Montréal
            </Link>
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
