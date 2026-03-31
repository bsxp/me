import { useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GRID_SPACING } from "./config";

function GridBackground({ id = "home" }: { id?: string }) {
  // Compute line counts to fill the full viewport
  const numVertical = useMemo(
    () => Math.ceil(window.innerWidth / GRID_SPACING) + 1,
    []
  );
  const numHorizontal = useMemo(
    () => Math.ceil(window.innerHeight / GRID_SPACING) + 1,
    []
  );

  // Offset to center the grid horizontally
  const gridOffsetX = useMemo(
    () => (window.innerWidth % GRID_SPACING) / 2,
    []
  );

  useGSAP(() => {
    const fullW = window.innerWidth;
    const fullH = window.innerHeight;

    // Staggered horizontal line draw-in
    for (let i = 0; i < numHorizontal; i++) {
      const dir = i % 2 === 0 ? -1 : 1;
      gsap.fromTo(
        `#${id}-grid-h-${i}`,
        { x: fullW * (1.5 + Math.random()) * dir, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: (2 + Math.random()) / 2,
          delay: (i * 0.15) / 2,
          ease: "power2.inOut",
        }
      );
    }

    // Staggered vertical line draw-in
    for (let i = 0; i < numVertical; i++) {
      const dir = i % 2 === 0 ? -1 : 1;
      gsap.fromTo(
        `#${id}-grid-v-${i}`,
        { y: fullH * dir, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3 / 2,
          delay: (i * 0.15) / 2,
          ease: "power2.inOut",
        }
      );
    }
  }, [numHorizontal, numVertical]);

  return (
    <div
      id={`${id}-grid`}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,240,241,0)_30%,rgba(233,240,241,1)_75%)] z-10 pointer-events-none" />

      {/* Horizontal lines — full width, evenly spaced from top */}
      {Array.from({ length: numHorizontal }).map((_, i) => (
        <div
          key={`h-${i}`}
          id={`${id}-grid-h-${i}`}
          className="absolute bg-black/15 h-[0.5px] left-0 right-0"
          style={{ top: i * GRID_SPACING }}
        />
      ))}

      {/* Vertical lines — full height, evenly spaced from left */}
      {Array.from({ length: numVertical }).map((_, i) => (
        <div
          key={`v-${i}`}
          id={`${id}-grid-v-${i}`}
          className="absolute bg-black/15 w-[0.5px] top-0 bottom-0"
          style={{ left: gridOffsetX + i * GRID_SPACING }}
        />
      ))}
    </div>
  );
}

export { GridBackground };
