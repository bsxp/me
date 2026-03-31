import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const CIRCLE_DIAMETER = 120;

function AnimatedButton({ handleClick }: { handleClick: () => void }) {
  // When hovering the button, the arrow shoots up and to the right at a 45° angle

  useGSAP(() => {
    // Reset transform on unmount, in case GSAP doesn't clean up
    return () => {
      gsap.set("#navigate-circle-arrow", { x: 0, y: 0, rotate: 0 });
    };
  }, []);

  function handleHoverIn() {

    // Expand the circle ever so slightly
    gsap.to("#navigate-circle", {
      width: CIRCLE_DIAMETER * 1.05,
      height: CIRCLE_DIAMETER * 1.05,
      x: CIRCLE_DIAMETER * 0.025,
      y: CIRCLE_DIAMETER * 0.025,
      duration: 0.2,
      ease: "power3.inOut",
    });

    // First, animate quickly backwards (like a spring windup), then smoothly shoot out to the target
    gsap.to("#navigate-circle-arrow", {
      x: -20,
      y: 20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        gsap.to("#navigate-circle-arrow", {
          x: 60,
          y: -60,
          duration: 0.6,
          ease: "elastic.out(0.5, 0.8)", // springy snap outward
        });
      },
    });

    gsap.to("#navigate-circle-arrow-offscreen", {
      x: (1.5 * CIRCLE_DIAMETER) / 2,
      y: (1.5 * -CIRCLE_DIAMETER) / 2,
      duration: 0.6,
      ease: "elastic.out(0.5, 0.8)", // springy snap inward
    });
  }

  function handleHoverOut() {
    // Shrink circle
    gsap.to("#navigate-circle", {
      width: CIRCLE_DIAMETER,
      height: CIRCLE_DIAMETER,
      x: 0,
      y: 0,
      duration: 0.2,
      ease: "power3.inOut",
    });


    // Put main arrow back to original position 
    gsap.to("#navigate-circle-arrow", {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    // Move offscreen arrow back to original position
    gsap.to("#navigate-circle-arrow-offscreen", {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(0.5, 0.8)", // springy snap inward
    });
  }

  return (
    <div
      id="navigate-circle"
      className="absolute bottom-0 right-0 bg-white z-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
      style={{
        width: CIRCLE_DIAMETER,
        height: CIRCLE_DIAMETER,
      }}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      onClick={handleClick}
    >
      <ArrowUpRight
        id="navigate-circle-arrow-offscreen"
        className="text-black size-16 absolute "
      />
      <div className="relative bg-red-200">
        <ArrowUpRight
          id="navigate-circle-arrow-offscreen"
          className="size-16 absolute"
          style={{
            bottom: -CIRCLE_DIAMETER,
            left: -CIRCLE_DIAMETER,
          }}
        />
      </div>
    </div>
  );
}
export { AnimatedButton };
