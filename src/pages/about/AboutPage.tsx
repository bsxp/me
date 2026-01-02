import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutPageGridItems } from "./aboutPageGridItems";
import {
  NUM_HORIZONTAL_LINES,
  GRID_SPACING,
  NUM_VERTICAL_LINES,
} from "./config";
import { HeroPanel } from "./HeroPanel";
import { MissionPanel } from "./MissionPanel";
import { ProjectsPanel } from "./ProjectsPanel";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const items = aboutPageGridItems;

export function AboutPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isAutoScrollingProjectsRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock scrolling until the initial fade-in animations finish
  useEffect(() => {
    const unlockScroll = () => {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    };

    // Compute the longest fade-in completion time (images + description)
    const baseDurationSec = 2; // shared duration for fade-ins
    let maxEndMs = 0;
    items.forEach(({ top, left, type }) => {
      if (type === "image") {
        const delaySec =
          Math.sqrt(
            Math.pow(top / GRID_SPACING - (NUM_HORIZONTAL_LINES - 1), 2) +
              Math.pow(left / GRID_SPACING - 0, 2)
          ) * 0.3;
        maxEndMs = Math.max(maxEndMs, (delaySec + baseDurationSec) * 1000);
      }
    });
    // About description fade-in
    maxEndMs = Math.max(maxEndMs, (3 + baseDurationSec) * 1000);

    // Add a small buffer to ensure completion
    const unlockDelayMs = maxEndMs + 300;

    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    const timeout = window.setTimeout(unlockScroll, unlockDelayMs);

    return () => {
      window.clearTimeout(timeout);
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    };
  }, []);

  // When the projects panel is at least 25% visible, gently snap it to the top
  useEffect(() => {
    let releaseTimeout: number | null = null;

    const trigger = ScrollTrigger.create({
      trigger: "#about-projects",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (isAutoScrollingProjectsRef.current) return;
        const el = self.trigger as HTMLElement | null;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visiblePixels =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const visibility = Math.max(0, visiblePixels) / Math.max(rect.height, 1);
        const isScrollingDown = self.direction === 1;

        // Scrolling down: snap the panel to the top once 25% visible
        if (isScrollingDown) {
          if (visibility < 0.25 || rect.top <= 0) return;

          const targetY = window.scrollY + rect.top;
          if (Math.abs(targetY - window.scrollY) < 1) return;

          isAutoScrollingProjectsRef.current = true;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        } else {
          // Scrolling up: once mostly gone (<=25% visible), finish hiding it
          if (visibility > 0.25 || rect.bottom <= 0) return;

          // Scroll so the panel's bottom aligns to the top edge, moving it fully out
          const targetY = window.scrollY + rect.bottom;
          if (Math.abs(targetY - window.scrollY) < 1) return;

          isAutoScrollingProjectsRef.current = true;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }

        // Release the guard shortly after the smooth scroll should finish
        if (releaseTimeout) {
          window.clearTimeout(releaseTimeout);
        }
        releaseTimeout = window.setTimeout(() => {
          isAutoScrollingProjectsRef.current = false;
        }, 600);
      },
      onLeaveBack: () => {
        isAutoScrollingProjectsRef.current = false;
      },
    });

    return () => {
      if (releaseTimeout) {
        window.clearTimeout(releaseTimeout);
      }
      trigger.kill();
    };
  }, []);

  useGSAP(() => {
    // Pin the hero and fade the grid, images, and description while scrolling
    const itemSelectors = items.reduce<string[]>((acc, item, index) => {
      if (item.type === "image") {
        acc.push(`#about-grid-item-${index}`);
      }
      return acc;
    }, []);

    const horizontalGridLineSelectors = new Array(NUM_HORIZONTAL_LINES)
      .fill(null)
      .map((_, i) => `#about-grid-horizontal-line-${i}`);

    const verticalGridLineSelectors = new Array(NUM_VERTICAL_LINES)
      .fill(null)
      .map((_, i) => `#about-grid-vertical-line-${i}`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-hero",
        start: "top top",
        end: "+=800", // fade over 800px of scroll
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    tl
      // .fromTo(
      //   [...itemSelectors, "#about-me-description"],
      //   { opacity: 1, immediateRender: false },
      //   {
      //     opacity: 0,
      //     duration: 1.5, // timeline is scrubbed; duration scales to scroll distance
      //     ease: "none",
      //   },
      //   0
      // )
      .fromTo(
        [
          ...itemSelectors,
          ...horizontalGridLineSelectors,
          ...verticalGridLineSelectors.filter((_, idx) => idx % 3 !== 1),
          "#profile-circle",
          "#about-me-description",
          "#about-grid-arrow",
        ],
        { opacity: 1, immediateRender: false },
        {
          opacity: 0,
          duration: 1.5, // timeline is scrubbed; duration scales to scroll distance
          ease: "none",
        },
        0
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-hero",
        start: "200px top",
        end: "+=300svh", // fade over 800px of scroll
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    tl2.fromTo(
      "#about-mission",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 0.8, ease: "none" }
    );

    // Pin and fade out #about-mission as #about-projects scrolls in
    const projectsPanelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-projects",
        start: "top top",
        end: "+=100svh", // change pin duration as needed
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    projectsPanelTimeline.to(
      "#about-mission",
      { opacity: 0, duration: 1, ease: "none" },
      0 // start simultaneously as projects scrolls in/pins
    );
  }, []);

  return (
    <div className="w-full h-[10000px] relative">
      <div className="fixed top-2 right-2 z-120 bg-white/90 text-gray-800 border border-gray-200 shadow-sm px-2 py-1 rounded text-xs font-mono">
        scrollY: {Math.round(scrollPosition)}px
      </div>
      <HeroPanel />
      <MissionPanel />
      <ProjectsPanel />
    </div>
  );
}
