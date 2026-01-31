
"use client";

import { useEffect, useState } from "react";
import { getCentres, Centre } from "@/lib/parseCentres";
import { useData } from "@/components/DataProvider";
import CentreCard from "./listicle/CentreCard";

export default function CardList({  type }: {type: string }) {
  const [items, setItems] = useState<Centre[]>([]);
        const { centres, ressources,  loading, error} = useData();
      const filtered = ressources.filter((c) => c.type === type);

  useEffect(() => {
      setItems(filtered);
  }, [type]);

  return (
    <ul className="space-y-3  columns-3 gap-2">
      {filtered.map((item, i) => (
        <li key={i} /* className="border-b pb-2" */>
            <CentreCard key={item.id} centre={item} />

        </li>
      ))}
    </ul>
  );
}
