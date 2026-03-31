import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { ProfileClock } from "./ProfileClock";
import { BouncingArrow } from "@/components/ui/bouncing-arrow";
import { GridBackground } from "./GridBackground";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { HERO_PIN_DISTANCE, GRID_SPACING } from "./config";

gsap.registerPlugin(ScrollTrigger);

function HomeHeroSection() {
  const { atLeast } = useBreakpoint();

  // Entrance animations (fire-and-forget on load)
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text-stagger",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      "#home-hero-arrow",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 1.8, ease: "power2.out" }
    );
  }, []);

  // Pinned scroll timeline — everything scrubbed, fully reversible
  useGSAP(() => {
    const fullW = window.innerWidth;
    const fullH = window.innerHeight;

    const hLines = document.querySelectorAll('[id^="home-grid-h-"]');
    const vLines = document.querySelectorAll('[id^="home-grid-v-"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-hero",
        start: "top top",
        end: `+=${HERO_PIN_DISTANCE}`,
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    // --- Grid lines slide back out (reverse of draw-in) ---
    // Using fromTo with immediateRender:false so the scroll timeline
    // has explicit start values (x:0/y:0, opacity:1) and doesn't
    // conflict with the entrance animation.

    // Horizontal lines slide left/right (alternating), staggered
    hLines.forEach((line, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      tl.fromTo(
        line,
        { x: 0, opacity: 1 },
        {
          x: fullW * 1.5 * dir,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          immediateRender: false,
        },
        0.2 + i * 0.02 // stagger start, delayed so grid holds briefly
      );
    });

    // Vertical lines slide up/down (alternating), staggered
    vLines.forEach((line, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      tl.fromTo(
        line,
        { y: 0, opacity: 1 },
        {
          y: fullH * dir,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          immediateRender: false,
        },
        0.2 + i * 0.02
      );
    });

    // --- ProfileClock fades ---
    tl.fromTo(
      "#profile-clock",
      { opacity: 1 },
      { opacity: 0, duration: 0.4, ease: "none", immediateRender: false },
      0.3
    );

    // --- Arrow fades early ---
    tl.fromTo(
      "#home-hero-arrow",
      { opacity: 1 },
      { opacity: 0, duration: 0.3, ease: "none", immediateRender: false },
      0
    );

    // --- Divider expands ---
    tl.fromTo(
      "#home-hero-divider",
      { width: "100px" },
      { width: "100%", duration: 1, ease: "power2.inOut" },
      0
    );

    // --- Text content fades out toward end ---
    tl.to(
      "#home-hero-content",
      { opacity: 0, y: -60, duration: 0.4, ease: "power2.in" },
      0.6
    );
  }, []);

  return (
    <section
      id="home-hero"
      className="w-full h-svh relative flex items-center justify-center overflow-hidden"
    >
      <GridBackground id="home" />

      {/* ProfileClock top-left */}
      <div className="fixed top-4 left-4 z-[1001]">
        <ProfileClock />
      </div>

      {/* Centered content */}
      <div
        id="home-hero-content"
        className="relative z-20 flex flex-col items-center text-center px-8 max-w-3xl gap-y-3"
      >
        <Typography
          variant="eyebrow"
          className="hero-text-stagger text-blue-600 opacity-0"
        >
          CHRIS PORTER
        </Typography>

        <Typography
          variant={atLeast.md ? "h1" : "h3"}
          className="hero-text-stagger font-medium font-[Forum] opacity-0"
        >
          SOFTWARE ENGINEER & URBANIST
        </Typography>

        <div
          id="home-hero-divider"
          className="hero-text-stagger h-px bg-gray-400 opacity-0"
          style={{ width: 100 }}
        />

        <Typography
          variant="h6"
          className="hero-text-stagger font-medium text-2xl font-[Google_Sans_Code] relative inline-block opacity-0"
        >
          <span className="relative z-10">
            Using urban data to reshape cities
          </span>
          <span
            aria-hidden
            className="absolute left-1 bottom-0 w-full h-4.5 bg-amber-300/60 z-0"
            style={{ pointerEvents: "none" }}
          />
        </Typography>

        <Typography
          variant="div"
          className="hero-text-stagger font-extralight text-md font-[Google_Sans_Code] max-w-2xl opacity-0"
        >
          I'm on a mission to make cities more human-centric through software,
          data, and design.
        </Typography>

        <div id="home-hero-arrow" className="mt-8 opacity-0">
          <div className="animate-[arrow-bounce_3.2s_cubic-bezier(0.445,0.05,0.55,0.95)_infinite]">
            <BouncingArrow id="home-bounce-arrow" direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeHeroSection };
