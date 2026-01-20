import CentreCard from "./CentreCard"
import { Centre } from "@/lib/parseCentres"

export default function CentreList({ centres }: { centres: Centre[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {centres.map((c) => (
        <CentreCard key={c.name} centre={c} />
      ))}
    </div>
  )
}
