
import { getCentres, parseGeoJSONToItems } from "@/lib/parseCentres"
import Hero from "@/components/listicle/Hero"
import CentreList from "@/components/listicle/CentreList"
import MapList from "@/components/MapList"
import MapboxMap from "@/components/map/MapboxMap"
//import PageAnalytics from "@/components/AnalyticsPage"
import AdUnit from "@/components/AdBlock";
import Image from "next/image";
import { defaultConfig } from "next/dist/server/config-shared"
import Link from "next/link"


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default async function RessourcesPage() {
  const centres = await parseGeoJSONToItems()//GEOJson 
  // getCentres()//XML
  return (
    <main className="max-w-7xl mx-auto px-4  mt-0">


      <Hero title = {'Activités pour Homeschoolers'}/>
    <section  className="grid">
      <div className="grid gap-4 md:grid-cols-[2fr_1fr] p-3">
<div>  <p> <span className="text-gray-500">
  L'emploi du temps de l'enfant hors système scolaire offre une multitude de possibilités. Que ce soit en complément de l'éducation à la maison, ou en soutien scolaire. Il existe des services adaptés aux besoins et envie des homeschoolers! 
</span> </p> 
<br/>

<p></p>


<h2> Les meilleures activites pour homeschoolers a Montreal!
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
       {/*     <AdUnit  slot="1453151522143278"/>   */}  
     <span className="text-gray-500"><i>Votre annonce ici</i></span>
      </div>
      </div>

      <section  className="grid"/*  className="grid lg:grid-cols-2 gap-10" */>
   <MapList centres={centres} filter= {'service'}/> 
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
            <Link href="/" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Centres de l'école a la maison - Homeschooling a Montreal      </Link>
          </li>  <li>
            <Link href="/ressources" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Soutient - Communaute pour l'école a la maison - Homeschooling         </Link>
          </li>
          <li>
            <Link href="/communaute" className="text-blue-600 underline" /* onClick={()=> window.gtag?.("event", "goto_activities")} */>
             Soutient - Communautes Homeschooling   
            </Link>
          </li>
        </ul>
      </section>
        {/* contact */}
        <section className="my-2 text-center w-1/2 float-right mt-20">

           <div className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
          <span  className=" contact-box text-gray-300">Une question? Ajouter votre centre ici? reporter un glitch? <br/><u><Link href='mailto:leclubelectro@gmail.com'>Contactez-nous</Link></u></span>
        </div>
        </section>
    </main>
  )
}
