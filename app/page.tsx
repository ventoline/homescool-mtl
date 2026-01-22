import { getCentres, parseGeoJSONToItems } from "@/lib/parseCentres"
import Hero from "@/components/listicle/Hero"
import CentreList from "@/components/listicle/CentreList"
import MapList from "@/components/MapList"
import MapboxMap from "@/components/map/MapboxMap"

export default function Page() {
  const centres = parseGeoJSONToItems()//GEOJson 
  // getCentres()//XML
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <Hero />


      {/* Ads placeholder */}
      <div className="my-8 text-center">
        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <span className="text-gray-500"><i>Votre annonce ici</i></span>
        </div>
      </div>

      <section  className="grid"/*  className="grid lg:grid-cols-2 gap-10" */>
   <MapList centres={centres}/> 
 {/* <MapboxMap centres={centres} />*/}
  </section>
  {/*  Listicles */}
      <section className="grid lg:grid-cols-2 gap-10">
       {/* <CentreList centres={centres} />
        <MapboxMap centres={centres} /> */ }
      </section>

      {/* Related links */}
      <section className="mt-16 w-1/3 float-left">
        <h2 className="text-2xl font-bold mb-4">Voir aussi</h2>
        <ul className="space-y-2">
          <li>
            <a href="/ressources" className="text-blue-600 underline">
ressources pour l'école a la maison            </a>
          </li>
          <li>
            <a href="/activites-enfants" className="text-blue-600 underline">
              Activités pour enfants a Montréal
            </a>
          </li>
        </ul>
      </section>
        {/* contact */}
        <section className="my-2 text-center w-1/2 float-right mt-20">

           <div className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
          <span className="text-gray-300">Une question? Ajouter votre centre ici? reporter un glitch? <br/><u><a href='mailto:leclubelectro@gmail.com'>Contactez-nous</a></u></span>
        </div>
        </section>
    </main>
  )
}
