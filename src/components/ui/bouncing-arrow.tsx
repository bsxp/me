
// Animated arrow that gently bounces up and down on a spring animation. The direction it's pointing is also the spring "direction"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

// e.g. if "down", the "hard stop" is on the bottom of the area, and would look like a ball bouncing on the ground.
function BouncingArrow({
  direction = "down",
  id,
}: {
  direction: "up" | "down" | "left" | "right";
  id?: string;
}) {
  useGSAP(() => {
    const targetId = id ?? `bouncing-arrow-${direction}`;

    gsap.to(`#${targetId}`, {
      y: direction === "up" ? -10 : direction === "down" ? 10 : 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div id={id ?? `bouncing-arrow-${direction}`} className="relative">
      <ArrowDown
        className="size-8"
        style={{
          transform:
            direction === "up"
              ? "rotate(180deg)"
              : direction === "down"
              ? "rotate(0deg)"
              : direction === "left"
              ? "rotate(90deg)"
              : "rotate(-90deg)",
        }}
      />
    </div>
  );
}

export { BouncingArrow };