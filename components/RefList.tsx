"use client";

import { useEffect, useState } from "react";
import { getCentres, Centre } from "@/lib/parseCentres";
import { useData } from "@/components/DataProvider";
import ListItem from "./listicle/ListItem";

export default function RefList({  type }: {type: string }) {
  const [items, setItems] = useState<Centre[]>([]);
        const { centres, ressources,  loading, error} = useData();
      const filtered = ressources.filter((c) => c.type === type);

  useEffect(() => {
      setItems(filtered);
  }, [type]);

  return (
    <ul className="space-y-1  columns-2 gap-4">
      {filtered.map((item, i) => (
        <li key={i} /* className="border-b pb-2" */>
            <ListItem key={item.id} ref={item} />
        </li>
      ))}
    </ul>
  );
}
