"use client";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";

export default function OutLinks(){

    return  (<section>
    
    <div>
                <ul className="space-y-2">
          <li>
            <Link href="/ressources">
Ressources pour l'école a la maison - Homeschooling     
</Link>
      
          </li>  <li>
            <a href="/communaute" className="text-blue-600 underline"  /*onClick={()=> window.gtag?.("event", "goto_resources")} */>
Outils - Communaute pour l'école a la maison - Homeschooling         </a>
          </li>
          <li>
            <a href="/activites" className="text-blue-600 underline" /* onClick={()=> window.gtag?.("event", "goto_activities")} */>
              Activités pour homeschoolers - Montréal
            </a>
          </li>
        </ul>
        
        </div>
        </section>

    )
}

