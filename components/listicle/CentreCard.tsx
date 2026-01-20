import { Centre } from "@/lib/parseCentres"

export default function CentreCard({ centre }: { centre: Centre }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-purple-700">{centre.name}</h2>
      <p className="mb-2 text-gray-700">{centre.description}</p>
      <p className="text-sm text-gray-500 mb-2">{centre.address}</p>
      <a
        href={centre.website}
        target="_blank"
        rel="nofollow sponsored"
        className="text-blue-600 underline"
      >
        Visiter le site
      </a>
    </article>
  )
}
