"use client";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";

export default function OutLinks(){

    return  (<section>
    
    <div>
                <ul className="space-y-2">
          <li>
            <Link href="/ressources" className="text-blue-600 underline" >
Ressources pour l'école a la maison - Homeschooling     
</Link>
      
          </li>  <li>
            <Link href="/communaute" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Outils - Communaute pour l'école a la maison - Homeschooling         </Link>
          </li>
          <li>
            <Link href="/activites" className="text-blue-600 underline" /* onClick={()=> window.gtag?.("event", "goto_activities")} */>
              Activités pour homeschoolers - Montréal
            </Link>
          </li>
        </ul>
        
        </div>
        </section>

    )
}

