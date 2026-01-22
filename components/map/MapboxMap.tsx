"use client"

import mapboxgl from "mapbox-gl"
import { useEffect, useRef } from "react"
import { Centre } from "@/lib/parseCentres"


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
      style: "mapbox://styles/ventoline/cmkn5sh00002d01s4bgfc0w8a",//"mapbox://styles/mapbox/streets-v12",
      center: [-73.738587, 45.4989],
      zoom: 10,
    })

    

    return () => map.remove()
  }, [centres])

  return <div ref={mapRef} className="h-[500px] w-full rounded-xl shadow-md" />
}
