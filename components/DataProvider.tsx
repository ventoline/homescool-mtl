// components/CentresDataProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";import { XMLParser } from "fast-xml-parser";

import { Centre, /* parseCentresXml, */ getCentres, parseGeoJSONToItems } from "@/lib/parseCentres";

type CentresCtx = {
  centres: Centre[];
  ressources: Centre[];
  loading: boolean;
  error: string | null;
 // byType: (type: string) => Centre[];
};

const Ctx = createContext<CentresCtx | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [centres, setCentres] = useState<Centre[]>([]);
  const [ressources, setRessources] = useState<Centre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const parser = new XMLParser({ trimValues: true })
        const [xmlText, geojson] = await Promise.all([
          fetch("/data/ressources links.xml").then((r) => r.text())
          //.then((rt) =>{ 
           //const xml = new XMLParser({trimValues: true,  ignoreAttributes: false,  attributeNamePrefix: '',}).parse(rt); 
 // console.log(xml);})
  ,
          fetch("/data/Homeschool centers in Montreal.geojson").then((r) => r.json()),
        ]);

   /*      const merged = [
          ...parseGeoJSONToItems(geojson),
          ...getCentres(xmlText),
        ];
 */
 console.log('loaded data', xmlText, geojson)
        const centers  =  parseGeoJSONToItems(geojson);
const xml = new XMLParser({trimValues: true,  ignoreAttributes: false,  attributeNamePrefix: '',}).parse(xmlText); 
        const res  =  getCentres(xml);

       
        console.log('then parsed res', xml, res)
 //setCentres( centers );
   // setRessources(res)

        if (!cancelled)  { setCentres( centers );    setRessources(res)  
            console.log('canc', cancelled) ;
        console.log('then parsed centers', centers)
        console.log(' res', res, ressources)
   }


         
   
   
  } catch (e: any) { console.log('caught', e)
        if (!cancelled) setError(e?.message ?? "Failed to load centres");
      } finally {console.log('finally')
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<CentresCtx>(() => {

    console.log('use memo dataprovider', centres, ressources)
    return {
      centres, ressources,
      loading,
      error,
     // byType: (type: string) => centres.filter((c) => c.type === type),
    };
  }, [centres, ressources]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useData() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCentresData must be used inside CentresDataProvider");
  return v;
}
