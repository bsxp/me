import { aboutPageGridItems } from "./aboutPageGridItems";

import { ProfileClock } from "../home/ProfileClock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  GRID_SPACING,
  GRID_WIDTH,
  GRID_HEIGHT,
  NUM_HORIZONTAL_LINES,
  NUM_VERTICAL_LINES,
  IMAGE_SCALE,
} from "./config";
import { BouncingArrow } from "@/components/ui/bouncing-arrow";

function HeroPanel() {
  useGSAP(() => {
    animateProfileClockMove();
    animateItemsFadeIn();
  }, []);

  return (
    <div
      id="about-hero"
      className="w-full h-svh relative p-4 flex items-center justify-center"
    >
      <div className="absolute top-4 left-4 z-50">
        <ProfileClock />
      </div>
      <AboutPageGridBackground>
        {aboutPageGridItems.map((item, index) => {
          if (item.type === "image") {
            return (
              <img
                id={`about-grid-item-${index}`}
                src={item.image}
                className="relative z-40 opacity-0"
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
            top: index * GRID_SPACING + GRID_SPACING + "px", // Offset by 1/2 to have overhangs on the lines
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
            left: index * GRID_SPACING + GRID_SPACING + "px", // Offset by 1/2 to have overhangs on the lines
            height: GRID_HEIGHT,
          }}
        />
      ))}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="animate-[arrow-bounce_1.6s_cubic-bezier(0.445,0.05,0.55,0.95)_infinite]">
          <BouncingArrow id="about-grid-arrow" direction="down" />
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
        duration: (2 + Math.random()) / 2,
        delay: (i * 0.15) / 2,
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
        duration: 1 + Math.random(),
        delay: (i * 0.15 - 0.5) / 2,
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
        duration: 3 / 2,
        delay: (i * 0.15) / 2,
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
        delay: 3,
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
        delay: 3,
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
        delay: 3,
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
        delay: 3,
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
        delay: 3,
        ease: "power2.inOut",
      }
    );
  }
}

function animateItemsFadeIn() {
  const imageSelectors: string[] = [];

  // Collect selectors and ensure images start hidden (opacity + visibility)
  aboutPageGridItems.forEach(({ type }, index) => {
    if (type === "image") {
      imageSelectors.push(`#about-grid-item-${index}`);
    }
  });

  if (imageSelectors.length) {
    gsap.set(imageSelectors, { autoAlpha: 0 });
  }

  // Staggered fade-in based on distance from lower-left corner
  aboutPageGridItems.forEach(({ top, left, type }, index) => {
    if (type !== "image") return;

    gsap.to(`#about-grid-item-${index}`, {
      autoAlpha: 1,
      duration: 2 / 2,
      delay:
        (Math.sqrt(
          Math.pow(top / GRID_SPACING - (NUM_HORIZONTAL_LINES - 1), 2) +
            Math.pow(left / GRID_SPACING - 0, 2)
        ) *
          0.225 +
          1.5) /
        2,
      ease: "power2.inOut",
    });
  });

  gsap.set("#about-me-description", { autoAlpha: 0 });

  gsap.to("#about-me-description", {
    autoAlpha: 1,
    duration: 2,
    delay: 3,
    ease: "power2.inOut",
  });
}


export { HeroPanel };
