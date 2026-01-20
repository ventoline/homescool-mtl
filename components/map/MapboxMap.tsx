"use client"

import mapboxgl from "mapbox-gl"
import { useEffect, useRef } from "react"
import { Centre } from "@/lib/parseCentres"

console.log(process.env)
console.log( process.env.NEXT_PUBLIC_MAPBOX_TOKEN)

if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
  console.warn("⚠️ Mapbox token missing")
}
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

export default function MapboxMap({ centres }: { centres: Centre[] }) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-73.5673, 45.5017],
      zoom: 11,
    })

    centres.forEach((c) => {
      new mapboxgl.Marker().setLngLat([c.lng, c.lat]).addTo(map)
    })

    return () => map.remove()
  }, [centres])

  return <div ref={mapRef} className="h-[500px] w-full rounded-xl shadow-md" />
}
