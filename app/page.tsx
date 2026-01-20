import { getCentres } from "@/lib/parseCentres"
import Hero from "@/components/listicle/Hero"
import CentreList from "@/components/listicle/CentreList"
import MapboxMap from "@/components/map/MapboxMap"

export default function Page() {
  const centres = getCentres()

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <Hero />

      {/* Ads placeholder */}
      <div className="my-8 text-center">
        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <span className="text-gray-500">Votre annonce ici</span>
        </div>
      </div>

      <section className="grid lg:grid-cols-2 gap-10">
        <CentreList centres={centres} />
        <MapboxMap centres={centres} />
      </section>

      {/* Related listicles */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Voir aussi</h2>
        <ul className="space-y-2">
          <li>
            <a href="/garderies" className="text-blue-600 underline">
              Garderies à Montréal
            </a>
          </li>
          <li>
            <a href="/activites-enfants" className="text-blue-600 underline">
              Activités pour enfants
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
