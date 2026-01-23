// components/AdUnit.tsx
"use client";

import { useEffect } from "react";

export default function AdUnit({
  slot,
  format = "auto",
  responsive = true,
}: {
  slot: string;
  format?: string;
  responsive?: boolean;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
