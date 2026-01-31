"use client";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapProvider } from "./MapContext";
import { useData } from "./DataProvider";
//import CenterList from "./listicle/CentreList";
//import {  parseGeoJSONToItems } from "@/lib/parseCentres"
import CentreList from "@/components/listicle/CentreList"
import CentreCard from "@/components/listicle/CentreCard"
import { Centre } from "@/lib/parseCentres"

export default function MapAndList({  filter }:  {/* centres: Centre[],*/ filter:string } ) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
 // const centres = parseGeoJSONToItems()//GEOJson 
        const { centres, ressources,  loading, error} = useData();

  useEffect(() => {
    if (!containerRef.current) return;
if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
  console.warn("⚠️ Mapbox token missing")
}
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

    const m = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/ventoline/cmkn5sh00002d01s4bgfc0w8a",
      center: [-73.738587, 45.4989],
      zoom: 11,
    });

    setMap(m);
    return () => m.remove();
  }, []);

  return (
    <MapProvider map={map}>
      <div  className="grid lg:grid-cols-2 gap-10" /* className="h-[500px] gap-6 "  style={{ display: "grid", gridTemplateColumns: "500px 1fr", gap: 12 }}*/ >
        <CentreList centres={centres} filter={filter} />
        <div  ref={containerRef}  /*style={{ height: 500 }} className="h-[500px] w-full rounded-xl shadow-md"*/  />
      </div>
    </MapProvider>
  );
}
