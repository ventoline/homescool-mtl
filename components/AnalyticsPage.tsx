"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function PageAnalytics({ name }: { name: string }) {
  const pathname = usePathname();

  useEffect(() => {
    // GA4
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_title: name,
    });


  }, [pathname, name]);

  return null;
}
