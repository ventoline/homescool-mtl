"use client";
import { createContext, useContext } from "react";
import type mapboxgl from "mapbox-gl";

const MapCtx = createContext<mapboxgl.Map | null>(null);

export function MapProvider({
  map,
  children,
}: {
  map: mapboxgl.Map | null;
  children: React.ReactNode;
}) {
  return <MapCtx.Provider value={map}>{children}</MapCtx.Provider>;
}

export function useMapboxMap() {
  return useContext(MapCtx);
}
