import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProfileClock } from "../home/ProfileClock";
import AmsterdamImage from "@/assets/amsterdam.jpg";
import AustinAerialImage from "@/assets/austin-aerial.jpg";
import CodingImage from "@/assets/coding.jpg";
import UiDesignImage from "@/assets/ui-design.jpg";
import BeachImage from "@/assets/beach-small.jpg";
import BigBenImage from "@/assets/big-ben-small.jpg";
import BrusselsImage from "@/assets/brussels-small.jpg";
import EdinburghImage from "@/assets/edinburgh-small.jpg";
import LisbonImage from "@/assets/lisbon-small.jpg";
import NeuschwansteinImage from "@/assets/neuschwanstein-small.jpg";
import OregonImage from "@/assets/oregon-small.jpg";
import PragueBridge from "@/assets/prague-bridge-small.jpg";
import PragueImage from "@/assets/prague-small.jpg";
import RainierImage from "@/assets/rainier-small.jpg";
import ZurichImage from "@/assets/zurich-small.jpg";
import { Typography } from "@/components/ui/typography";
import { ArrowDown } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NUM_HORIZONTAL_LINES = 11; // Keep above 0
const GRID_SPACING = 75;
const GRID_HEIGHT = GRID_SPACING * NUM_HORIZONTAL_LINES;

const NUM_VERTICAL_LINES = 16; // Keep above 0
const GRID_WIDTH = GRID_SPACING * NUM_VERTICAL_LINES;

const IMAGE_SCALE = 3;

// Words to form:
// Move
// Hello
//

const items = [
  {
    image: AmsterdamImage,
    top: 7.5 * GRID_SPACING,
    left: 5.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: AustinAerialImage,
    top: 2.5 * GRID_SPACING,
    left: 7.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: CodingImage,
    top: 4.5 * GRID_SPACING,
    left: 4.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: UiDesignImage,
    top: 7.5 * GRID_SPACING,
    left: 1.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: BeachImage,
    top: 2.5 * GRID_SPACING,
    left: 5.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: BigBenImage,
    top: 3.5 * GRID_SPACING,
    left: 9.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: BrusselsImage,
    top: 2.5 * GRID_SPACING,
    left: 11.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: EdinburghImage,
    top: 3.5 * GRID_SPACING,
    left: 8.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: LisbonImage,
    top: 4.5 * GRID_SPACING,
    left: 6.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: NeuschwansteinImage,
    top: 5.5 * GRID_SPACING,
    left: 4.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: OregonImage,
    top: 5.5 * GRID_SPACING,
    left: 7.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: PragueBridge,
    top: 1.5 * GRID_SPACING,
    left: 9.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: PragueImage,
    top: 6.5 * GRID_SPACING,
    left: 3.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: RainierImage,
    top: 5.5 * GRID_SPACING,
    left: 2.5 * GRID_SPACING,
    type: "image",
  },
  {
    image: ZurichImage,
    top: 6.5 * GRID_SPACING,
    left: 6.5 * GRID_SPACING,
    type: "image",
  },
  {
    type: "div",
    top: 5.5 * GRID_SPACING,
    left: 9.5 * GRID_SPACING,
    content: (
      <div id="about-me-description" className="p-1 flex flex-col gap-2">
        <Typography variant="h6" className="z-50 font-xl">
          About me
        </Typography>
        <Typography
          variant="caption"
          className="z-50 text-gray-700"
          style={{ maxWidth: GRID_SPACING * 4 }}
        >
          I believe in the power of technology to transform our cities into
          human-centric spaces. I build tools to help reshape the way we build
          our world.
        </Typography>
      </div>
    ),
  },
];

export function AboutPage() {
  useGSAP(() => {
    animateProfileClockMove();
    animateItemsFadeIn();
  }, []);

  useGSAP(() => {
    // Animate the fading out of the images, etc as the user scrolls down the page
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-me-description",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-[10000px] relative flex items-start justify-center">
      <div className="w-full h-svh relative p-4 flex items-center justify-center">
        <div className="absolute top-4 left-4  z-50">
          <ProfileClock />
        </div>
        <AboutPageGridBackground>
          {items.map((item, index) => {
            if (item.type === "image") {
              return (
                <img
                  id={`about-grid-item-${index}`}
                  src={item.image}
                  className="relative z-40"
                  style={{
                    borderRadius: 0,
                    width: GRID_SPACING,
                    height: GRID_SPACING,
                    margin: 0,
                    objectFit: "cover",
                    position: "absolute",
                    top: item.top,
                    left: item.left,
                  }}
                />
              );
            }
            if (item.type === "div") {
              return (
                <div
                  className="relative z-40"
                  style={{
                    top: item.top,
                    left: item.left,
                  }}
                >
                  {item.content}
                </div>
              );
            }
          })}
        </AboutPageGridBackground>
      </div>
    </div>
  );
}

function AboutPageGridBackground({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    animateGridLines();
  }, []);

  return (
    <div
      className="relative after:content-[''] after:block after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,rgba(233,240,241,0)_25%,rgba(233,240,241,1)_70%,rgba(233,240,241,1)_100%)] after:pointer-events-none overflow-hidden"
      style={{
        width: `${GRID_WIDTH}px`,
        height: `${GRID_HEIGHT}px`,
      }}
    >
      {children}
      {/* HORIZONTAL LINES */}
      {new Array(NUM_HORIZONTAL_LINES).fill(null).map((_, index) => (
        <div
          id={`about-grid-horizontal-line-${index}`}
          key={index}
          className="absolute bg-black/20 h-[0.5px] left-0"
          style={{
            top: index * GRID_SPACING + GRID_SPACING / 2 + "px", // Offset by 1/2 to have overhangs on the lines
            width: GRID_WIDTH,
          }}
        />
      ))}

      {/* VERTICAL LINES */}
      {new Array(NUM_VERTICAL_LINES).fill(null).map((_, index) => (
        <div
          id={`about-grid-vertical-line-${index}`}
          key={index}
          className="absolute bg-black/20 w-[0.5px] top-0"
          style={{
            left: index * GRID_SPACING + GRID_SPACING / 2 + "px", // Offset by 1/2 to have overhangs on the lines
            height: GRID_HEIGHT,
          }}
        />
      ))}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="animate-[arrow-bounce_1.6s_cubic-bezier(0.445,0.05,0.55,0.95)_infinite]">
          <BouncingArrow direction="down" />
        </div>
      </div>
    </div>
  );
}

function animateGridLines() {
  // Draw the lines, but stagger them slightly to create a subtle drawing effect

  // Start with horizontal lines
  for (let i = 0; i < NUM_HORIZONTAL_LINES; i++) {
    const dir = i % 2 === 0 ? "left" : "right";
    gsap.fromTo(
      `#about-grid-horizontal-line-${i}`,
      {
        x: GRID_WIDTH * (2 - Math.random()) * (dir === "left" ? -1 : 1),
      },
      {
        x: 0,
        duration: 3 + Math.random(),
        delay: i * 0.15,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      `#about-grid-horizontal-line-${i}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2 + Math.random(),
        delay: i * 0.15 - 0.5,
        ease: "power2.inOut",
      }
    );
  }

  for (let i = 0; i < NUM_VERTICAL_LINES; i++) {
    const dir = i % 2 === 0 ? "up" : "down";

    gsap.fromTo(
      `#about-grid-vertical-line-${i}`,
      {
        y: GRID_HEIGHT * (dir === "up" ? -1 : 1),
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: i * 0.15,
        ease: "power2.inOut",
      }
    );
  }
}

function animateProfileClockMove() {
  const thirdHorizontalLine = document.getElementById(
    `about-grid-horizontal-line-1`
  );
  const fifthVerticalLine = document.getElementById(
    `about-grid-vertical-line-0`
  );

  if (thirdHorizontalLine && fifthVerticalLine) {
    gsap.fromTo(
      "#profile-clock",
      {
        position: "fixed",
        top: 16,
        left: 16,
      },
      {
        position: "fixed",
        top: thirdHorizontalLine.getBoundingClientRect().y,
        left: fifthVerticalLine.getBoundingClientRect().x,
        duration: 2,
        delay: 1.5,
        width: GRID_SPACING * IMAGE_SCALE,
        height: GRID_SPACING * IMAGE_SCALE,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#profile-circle",
      {
        borderRadius: "50%",
      },
      {
        borderRadius: 0,
        duration: 2,
        delay: 1.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#profile-clock-content",
      {
        opacity: 1,
      },
      {
        borderRadius: 0,
        opacity: 0,
        pointerEvents: "none",
        display: "none",
        duration: 2,
        delay: 1.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#profile-clock-border",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 2,
        delay: 1.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#profile-clock-dots",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        pointerEvents: "none",
        display: "none",
        duration: 2,
        delay: 1.5,
        ease: "power2.inOut",
      }
    );
  }
}

function animateItemsFadeIn() {
  items.forEach(({ top, left }, index) => {
    gsap.fromTo(
      `#about-grid-item-${index}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        // Compute delay based on distance from the lower left corner of the grid
        delay:
          Math.sqrt(
            Math.pow(top / GRID_SPACING - (NUM_HORIZONTAL_LINES - 1), 2) +
              Math.pow(left / GRID_SPACING - 0, 2)
          ) * 0.3, // shorter delay, relative to lower left
        ease: "power2.inOut",
      }
    );
  });

  gsap.fromTo(
    "#about-me-description",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
      delay: 3,
      ease: "power2.inOut",
    }
  );
}

// Animated arrow that gently bounces up and down on a spring animation. The direction it's pointing is also the spring "direction"
// e.g. if "down", the "hard stop" is on the bottom of the area, and would look like a ball bouncing on the ground.
function BouncingArrow({
  direction = "down",
}: {
  direction: "up" | "down" | "left" | "right";
}) {
  useGSAP(() => {
    gsap.to(`#bouncing-arrow-${direction}`, {
      y: direction === "up" ? -10 : direction === "down" ? 10 : 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div id={`bouncing-arrow-${direction}`} className="relative">
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
