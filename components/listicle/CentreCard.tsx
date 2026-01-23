"use client";
import { Centre } from "@/lib/parseCentres"
import { useMapboxMap } from "@/components/MapContext";
import { useRef } from "react";



declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
export default function CentreCard({ centre }: { centre: Centre }) {
      const map = useMapboxMap();
  const hoveredIdRef = useRef<any>(null);


function trackCenterSelect(center: { id: string; nameId: string }) {
  window.gtag?.("event", `select_center${center.nameId}`, {
    center_id: center.id,
    center_name: center.nameId,
  });
}

  const flyToCenter = (c: any) => {


    if (!map || c.lng == null || c.lat == null) return;
    map.flyTo({
      center: [c.lng, c.lat],
      zoom: Math.max(map.getZoom(), 8),
      speed: 1.2,
      curve: 1.42,
      essential: true,
    });
  };    const clearHoverState = () => {
    // optional: do nothing, or return to last view you stored
  };
  function CenterList({ centers, map }: { centers: any[]; map: mapboxgl.Map | null }) {


  
}



  return (
    <article className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
   <div   key={centre.id}
          onMouseEnter={() => flyToCenter(centre)}
        //  onMouseLeave={clearHoverState}
        >
      <h2    className=" card-name text-xl font-semibold mb-2 text-indigo-700">{centre.name}</h2>
      </div> 
      <p className="mb-2 text-blue-600">{centre.description}</p>
      <p className="text-sm text-gray-500 mb-2">{centre.address}</p>
      <a   onClick={() => trackCenterSelect({id:centre.id, nameId:centre.name})}

        href={centre.website}
        target="_blank"
        rel="nofollow sponsored"
        className="text-blue-600 underline"
      >
       Acceder au site
      </a>
    </article>
  )
}
