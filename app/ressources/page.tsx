import Hero from "@/components/listicle/Hero"
import CentreList from "@/components/listicle/CentreList"
import MapList from "@/components/MapList"
import MapboxMap from "@/components/map/MapboxMap"
//import PageAnalytics from "@/components/AnalyticsPage"
import AdUnit from "@/components/AdBlock";
import Image from "next/image";
import { defaultConfig } from "next/dist/server/config-shared"
import Link from "next/link";
import CardList from "@/components/CardList"
import { useData } from "@/components/DataProvider";


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function RessourcesPage() {
 
  return (
    <main className="max-w-7xl mx-auto px-4  mt-0">


      <Hero title={"Ressources pour le Homeschooling"}/>
    <section  className="grid">
      <div className="grid gap-4 md:grid-cols-[2fr_1fr] p-3">
<div>  <p className="text-gray-500"> 
  Appliquer une pédagogie alternative peut s'avérer complexe à gérer et il est confortant de trouver les outils et programmes,
   alternatives éducatives. </p>
   <p>
  Ainsi qu de s'appuyer sur <a href='/communaute'>la communauté</a> pour échanger sur les pédagogies ou réseauter et partager 
   avec des familles qui partagent notre aventure. 
 </p> 
<br/>

<p></p>


<h2> Trouve ici les liens pour naviguer l'école a la maison
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
   {/*      <AdUnit  slot="1453151522143278"/>  */}  
        <span className="text-gray-500"><i>Votre annonce ici</i></span>
       </div>
      </div>

      <section  className="grid"/*  className="grid lg:grid-cols-2 gap-10" */>
  {/*  <MapList centres={centres}/>  */}
   <CardList type={'ressources'}/> 
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
          </li>  <li>
            <a href="/communaute" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Soutient - Communautes Homeschooling         </a>
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
