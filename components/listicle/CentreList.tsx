"use client";


import CentreCard from "./CentreCard"
import { Centre } from "@/lib/parseCentres"

export default function CentreList({ centres, filter }: { centres: Centre[], filter:string }) {
console.log('CentreList', filter)
console.log(centres)
  // filter other types of  addresses
  const centresMtl = centres.filter(c => c['properties']['type'] === filter)
 console.log(centresMtl)
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {centresMtl.map((c) => ( 
        <CentreCard key={c.id} centre={c} />
      ))}
    </div>


    
  )
}
