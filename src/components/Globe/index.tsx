"use client";

import React, { useEffect, useRef } from "react";

import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";

export default function Globe() {
  
  const globeRef = React.useRef<HTMLCanvasElement>(null);
  const pointerInteracting = React.useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;

    if (globeRef.current) {
      const globe = createGlobe(globeRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0.15,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 20000,
        mapBrightness: 6,
        baseColor: [248 / 255, 255 / 255, 252 / 255],
        markerColor: [0.1, 0.8, 1],
        glowColor: [182 / 255, 179 / 255, 255 / 255],
        markers: [
          { location: [7.0, 81.0], size: 0.03 },
        ],
        onRender: (state) => {
          
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <canvas
      ref={globeRef}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        if (globeRef.current) {
          globeRef.current.style.cursor = "grabbing";
        }
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (globeRef.current) {
          globeRef.current.style.cursor = "grab";
        }
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (globeRef.current) {
          globeRef.current.style.cursor = "grab";
        }
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
      style={{ width: 600, height: 600 }}
    ></canvas>
  );
}
