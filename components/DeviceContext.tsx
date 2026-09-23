"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Matches Tailwind's `md` breakpoint: below 768px is mobile, tablets and up count as desktop.
export const MOBILE_QUERY = "(max-width: 767px)";

type Device = "mobile" | "desktop";

type DeviceCtx = {
  device: Device;
  isMobile: boolean;
  isDesktop: boolean;
};

const Ctx = createContext<DeviceCtx>({
  device: "desktop",
  isMobile: false,
  isDesktop: true,
});

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  // Server render has no window, so start as desktop and correct on mount.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const value: DeviceCtx = {
    device: isMobile ? "mobile" : "desktop",
    isMobile,
    isDesktop: !isMobile,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDevice() {
  return useContext(Ctx);
}
