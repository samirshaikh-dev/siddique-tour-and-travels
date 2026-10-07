"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

function ScrollTriggerSync() {
  // Sync Lenis scroll events with GSAP ScrollTrigger
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return null;
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Drive Lenis RAF with GSAP's ticker to keep animations & scroll perfectly in sync
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false, // We control raf via GSAP ticker
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

export { useLenis };
