import { Centre } from "@/lib/parseCentres"
import { useMapboxMap } from "@/components/MapContext";
import { useRef } from "react";


export default function CentreCard({ centre }: { centre: Centre }) {
      const map = useMapboxMap();
  const hoveredIdRef = useRef<any>(null);
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
    <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
   <div   key={centre.id}
          onMouseEnter={() => flyToCenter(centre)}
        //  onMouseLeave={clearHoverState}
        >
      <h2    className="text-xl font-semibold mb-2 text-purple-700">{centre.name}</h2>
      </div> 
      <p className="mb-2 text-gray-700">{centre.description}</p>
      <p className="text-sm text-gray-500 mb-2">{centre.address}</p>
      <a
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
