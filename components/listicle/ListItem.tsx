"use client";
import { Centre } from "@/lib/parseCentres"
import { useMapboxMap } from "@/components/MapContext";
import { useRef } from "react";



declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
export default function ListItem({ ref }: { ref: Centre }) {
      const map = useMapboxMap();
  const hoveredIdRef = useRef<any>(null);


function trackCenterSelect(center: { id: string; nameId: string }) {
  window.gtag?.("event", `select_center`, {
    center_id: center.id,
    center_name: center.nameId
  });

  
}


  const clearHoverState = () => {
    // optional: do nothing, or return to last view you stored
  };



  return (
    <article className="border-t border-blue-200 p-4 break-inside-avoid-column">
   <div   key={ref.id}
         // onMouseEnter={() => flyToCenter(centre)}
        //  onMouseLeave={clearHoverState}
        >
      <h2    className=" card-name text-xl font-semibold mb-2 text-indigo-700 ">{ref.name}</h2>
      </div> 
      <p className="mb-2 text-blue-600">{ref.description}</p>
      <p className="text-sm text-gray-500 mb-2">{ref.address}</p>
      <a   onClick={() => trackCenterSelect({id:ref.id, nameId:ref.name})}

        href={ref.website}
        target="_blank"
        rel="nofollow sponsored"
        className="text-blue-600 underline"
      >
       Acceder au site
      </a>  

    </article>  )
   
}
