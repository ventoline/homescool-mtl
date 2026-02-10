"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { Centre } from "@/lib/parseCentres";

if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
  console.warn("⚠️ Mapbox token missing");
}
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function MapboxMap({ centres }: { centres: Centre[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/ventoline/cmkn5sh00002d01s4bgfc0w8a", //"mapbox://styles/mapbox/streets-v12",
      center: [-73.738587, 45.4989],
      zoom: 10,
    });

    mapRef.current = map;

    const resize = () => map.resize();

    map.on("load", () => {
      resize();
      setTimeout(resize, 0);
      setTimeout(resize, 250);
    });

    const ro = new ResizeObserver(() => resize());
    ro.observe(containerRef.current);

    return () => {
      map.remove();
      ro.disconnect();
    };
  }, [centres]);

  return (
    <div
      ref={containerRef}
      className="max-h-500px h-full w-full rounded-xl shadow-md"
    />
  );
}
