import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SelectedProjectsList } from "./SelectedProjectsList";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectsShowcase, NUM_SHOWCASE_PROJECTS, SHOWCASE_CYCLE_DISTANCE } from "./ProjectsShowcase";
import { AboutOverlay } from "./AboutSection";
import { projects } from "@/data/projects";
import AustinSvg from "@/assets/austin-infrastructure.svg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURED = [
  {
    id: "hearth",
    tags: ["Urban Data", "Civic Tech", "Data Visualization", "Mapping"],
    bgColor: "#0a0a0a",
  },
  {
    id: "labbook",
    tags: ["Science", "E-Notebooks", "Cryptography", "SaaS"],
    bgColor: "#1a1a2e",
  },
  {
    id: "foundry",
    tags: ["Startups", "CRM", "Accounting", "Toolkit"],
    bgColor: "#1c1c1c",
  },
  {
    id: "playbook",
    tags: ["Events", "Coordination", "Mobile", "Logistics"],
    bgColor: "#141420",
  },
  {
    id: "OneFeed",
    tags: ["Developer Tools", "Notifications", "Integrations", "Productivity"],
    bgColor: "#181818",
  },
  {
    id: "lumon",
    tags: ["Terminal", "Retro UI", "Easter Egg", "Severance"],
    bgColor: "#0d1117",
  },
];

const featuredProjects = FEATURED.map((f) => ({
  ...f,
  project: projects.find((p) => p.id === f.id)!,
}));

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseIndexRef = useRef(0);
  const [showcaseIndex, setShowcaseIndex] = useState(0);



  useGSAP(
    () => {
      const featuredTransitions = featuredProjects.length - 1; // 5 transitions between 6 panels
      const buffer = 200; // px of scroll pause between each transition
      // Total = featured transitions + showcase slide-in + showcase cycling
      const allSlideTransitions = featuredTransitions + 1; // +1 for showcase sliding in
      const totalPinScroll =
        allSlideTransitions * window.innerHeight +
        (allSlideTransitions + 2) * buffer +
        SHOWCASE_CYCLE_DISTANCE;

      // Pin the intro and drive the hero→about transition as one scrubbed timeline
      // First 800px: hero fades out. Next: about fades in. Then 800px hold before featured.
      const heroExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-intro",
          start: "top top",
          end: "+=2000",
          pin: true,
          pinReparent: false,
          scrub: 0.3,
        },
      });

      // === Hero exit + About enter (0–0.8), then 0.8–1.0 is hold ===

      // Phase 1: Hero text, SVG, nav links fade out + up; vertical line slides left
      heroExitTl.to(
        ["#hero-name", "#hero-tagline", "#hero-scroll-indicator"],
        { y: -60, opacity: 0, duration: 0.2, ease: "none" },
        0
      );
      heroExitTl.to(
        "#hero-vertical-line",
        { x: -40, opacity: 0, duration: 0.2, ease: "none" },
        0
      );
      heroExitTl.to(
        "#home-intro img[alt=''], #home-intro .desktop-svg-map",
        { opacity: 0, duration: 0.2, ease: "none" },
        0
      );
      // "chris." animates from nav position to about overlay top-left
      // Nav links animate from nav position to about overlay top-right
      {
        const logo = document.getElementById("nav-logo");
        const logoTarget = document.getElementById("about-logo-target");
        const navLinks = document.getElementById("nav-links");
        const navTarget = document.getElementById("about-nav-target");

        if (logo && logoTarget) {
          const logoRect = logo.getBoundingClientRect();
          const targetRect = logoTarget.getBoundingClientRect();
          heroExitTl.to(
            "#nav-logo",
            { x: targetRect.left - logoRect.left, y: targetRect.top - logoRect.top, duration: 0.24, ease: "none" },
            0.12
          );
        }

        if (navLinks && navTarget) {
          const navRect = navLinks.getBoundingClientRect();
          const targetRect = navTarget.getBoundingClientRect();
          heroExitTl.to(
            "#nav-links",
            { x: targetRect.right - navRect.right, y: targetRect.top - navRect.top, duration: 0.24, ease: "none" },
            0.12
          );
        }
      }

      // Phase 2: Project list collapses toward line between items 3 and 4
      heroExitTl.to("#selected-project-0", { y: 120, opacity: 0, duration: 0.28, ease: "none" }, 0.08);
      heroExitTl.to("#selected-project-1", { y: 80, opacity: 0, duration: 0.28, ease: "none" }, 0.08);
      heroExitTl.to("#selected-project-2", { y: 40, opacity: 0, duration: 0.28, ease: "none" }, 0.08);
      heroExitTl.to("#selected-project-3", { y: -40, opacity: 0, duration: 0.28, ease: "none" }, 0.08);
      heroExitTl.to("#selected-project-4", { y: -80, opacity: 0, duration: 0.28, ease: "none" }, 0.08);
      heroExitTl.to("#selected-project-5", { y: -120, opacity: 0, duration: 0.28, ease: "none" }, 0.08);

      // "Selected Projects" header fades out
      heroExitTl.to("#selected-projects-header", { opacity: 0, duration: 0.2, ease: "none" }, 0.12);

      // Collapse line fades out
      heroExitTl.to(".selected-project-collapse-line", { opacity: 0, duration: 0.12, ease: "none" }, 0.32);

      // Phase 3: About overlay elements fade in
      heroExitTl.fromTo("#about-overlay", { opacity: 0 }, { opacity: 1, duration: 0.08, ease: "none", onComplete: () => {
        document.getElementById("about-inner")?.style.setProperty("pointer-events", "auto");
      }, onReverseComplete: () => {
        document.getElementById("about-inner")?.style.setProperty("pointer-events", "none");
      }}, 0.4);
      heroExitTl.fromTo(".about-line", { opacity: 0 }, { opacity: 1, duration: 0.12, ease: "none", stagger: 0.04 }, 0.44);
      // Left image slides in from left, top stacked from top, bottom stacked from bottom
      const aboutImages = document.querySelectorAll(".about-image");
      if (aboutImages[0]) {
        heroExitTl.fromTo(aboutImages[0], { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.12, ease: "none" }, 0.48);
      }
      if (aboutImages[1]) {
        heroExitTl.fromTo(aboutImages[1], { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.12, ease: "none" }, 0.52);
      }
      if (aboutImages[2]) {
        heroExitTl.fromTo(aboutImages[2], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.12, ease: "none" }, 0.52);
      }
      heroExitTl.fromTo("#about-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "none" }, 0.56);

      // 0.8–1.0: dead time (hold on about section before featured projects)
      heroExitTl.set({}, {}, 1.0);


      // Position all panels except the first off-screen
      featuredProjects.forEach((_, i) => {
        if (i === 0) return;
        const fromRight = i % 2 === 1;
        gsap.set(`#featured-${i}`, {
          xPercent: fromRight ? 100 : 0,
          yPercent: fromRight ? 0 : 100,
        });
      });
      // Showcase panel starts off-screen below (slides up like even panels)
      gsap.set("#showcase-panel", { yPercent: 100 });

      // Scroll position (in px) where showcase cycling begins
      const showcaseCycleStart =
        allSlideTransitions * window.innerHeight +
        (allSlideTransitions + 2) * buffer;

      // Single timeline for all transitions — no gaps, continuous scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#featured-wrapper",
          start: "top top",
          end: `+=${totalPinScroll}`,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          onUpdate: (self) => {
            // Drive showcase active index during the cycling phase
            const scrolled = self.progress * totalPinScroll;
            if (scrolled > showcaseCycleStart) {
              const cycleProgress = (scrolled - showcaseCycleStart) / SHOWCASE_CYCLE_DISTANCE;
              const idx = Math.max(0, Math.min(
                Math.floor(cycleProgress * NUM_SHOWCASE_PROJECTS),
                NUM_SHOWCASE_PROJECTS - 1
              ));
              if (idx !== showcaseIndexRef.current) {
                showcaseIndexRef.current = idx;
                setShowcaseIndex(idx);
              }
            } else if (showcaseIndexRef.current !== 0) {
              showcaseIndexRef.current = 0;
              setShowcaseIndex(0);
            }
          },
        },
      });

      // Trigger Hearth (first panel) title animation when wrapper reaches top
      ScrollTrigger.create({
        trigger: "#featured-wrapper",
        start: "top 60%",
        once: true,
        onEnter: () => {
          const lines = document.querySelectorAll("#featured-0 .title-line");
          gsap.to(lines, {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          });
        },
      });

      // Add each transition with buffer pauses between them
      // Timeline units: buffer ratio relative to a transition
      const bufferRatio = buffer / window.innerHeight;

      featuredProjects.forEach((_, i) => {
        if (i === 0) return;

        // Each segment: buffer + transition (1 unit)
        // First panel gets an initial buffer too
        const position = (i - 1) * (1 + bufferRatio) + bufferRatio;

        tl.to(
          `#featured-${i}`,
          {
            xPercent: 0,
            yPercent: 0,
            duration: 1,
            ease: "none",
          },
          position
        );

        // Trigger title animation at 1/3 through the slide-in
        tl.call(
          () => {
            const lines = document.querySelectorAll(`#featured-${i} .title-line`);
            if (lines.length && !lines[0].classList.contains("animated")) {
              lines[0].classList.add("animated");
              gsap.to(lines, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
              });
            }
          },
          undefined,
          position + 0.33
        );
      });

      // Showcase slides up from below after the last featured panel
      const showcasePosition = featuredTransitions * (1 + bufferRatio) + bufferRatio;
      tl.to(
        "#showcase-panel",
        { yPercent: 0, duration: 1, ease: "none" },
        showcasePosition
      );

      // Extend timeline to cover the showcase cycling scroll distance
      const showcaseCycleRatio = SHOWCASE_CYCLE_DISTANCE / window.innerHeight;
      tl.set({}, {}, showcasePosition + 1 + bufferRatio + showcaseCycleRatio);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="overflow-x-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Intro section — gets pinned */}
      <div
        id="home-intro"
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        {/* Austin infrastructure SVG underlay — full width on mobile */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden lg:hidden"
        >
          <img
            src={AustinSvg}
            alt=""
            className="absolute"
            style={{

              width: "140%",
              height: "160%",
              top: "-50%",
              left: "-20%",
            }}
          />
        </div>
        {/* Austin infrastructure SVG underlay — faded right on desktop */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block z-0"
          style={{
            maskImage: `
              linear-gradient(to right, black 40%, transparent 70%),
              linear-gradient(to top, black 20%, transparent 50%),
              linear-gradient(to bottom, black 100px, transparent 200px)
            `,
            maskComposite: "add",
            WebkitMaskImage: `
              linear-gradient(to right, black 40%, transparent 70%),
              linear-gradient(to top, black 20%, transparent 50%),
              linear-gradient(to bottom, black 100px, transparent 200px)
            `,
            WebkitMaskComposite: "source-over",
          }}
        >
          <AustinSvgMap />
        </div>
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
        {/* Vertical line — line, coordinates, line — rotated as one unit */}
        <div
          id="hero-vertical-line"
          className="absolute top-0 bottom-0 z-30 pointer-events-none hidden sm:flex flex-col items-center"
          style={{ left: 94 }}
        >
          {/* Top line segment */}
          <div style={{ width: 1, flex: "1 1 0%", backgroundColor: "#1a1a1a", opacity: 0.5 }} />
          {/* Coordinates — rotated 90°, explicit height to create gap */}
          <div
            className="relative shrink-0"
            style={{ width: 1, height: 180 }}
          >
            <span
              className="absolute left-1/2 top-1/2 font-['Space_Mono'] text-[10px] tracking-[0.15em] uppercase whitespace-nowrap cursor-pointer"
              style={{
                color: "#1a1a1a",
                opacity: 0.6,
                transform: "translate(-50%, -50%) rotate(-90deg)",
                pointerEvents: "auto",
              }}
              onMouseEnter={() => {
                const ping = document.getElementById("coord-ping");
                if (ping) ping.setAttribute("opacity", "1");
              }}
              onMouseLeave={() => {
                const ping = document.getElementById("coord-ping");
                if (ping) ping.setAttribute("opacity", "0");
              }}
            >
              30.2617°N — 97.7452°W
            </span>
          </div>
          {/* Bottom line segment */}
          <div style={{ width: 1, flex: "0 0 18%", backgroundColor: "#1a1a1a", opacity: 0.5 }} />
        </div>
        {/* About overlay — fades in after hero elements exit */}
        <AboutOverlay />
        {/* Desktop scroll indicator */}
        <div id="hero-scroll-indicator" className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ border: "1px solid #ccc", backgroundColor: "rgb(250, 250, 250)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#999" strokeWidth="1.5" />
            </svg>
          </div>
          <span
            className="font-[Inter] text-[10px] font-normal lowercase tracking-[0.2em]"
            style={{ color: "#999" }}
          >
            scroll down
          </span>
        </div>
        {/* Mobile bouncing chevron */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 lg:hidden">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            style={{ animation: "arrow-bounce 2s ease-in-out infinite" }}
          >
            <path d="M2 2L10 10L18 2" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Featured projects + showcase wrapper — all panels stacked, pinned as a group */}
      <div id="featured-wrapper" className="relative z-10" style={{ height: "100vh", backgroundColor: "#0a0a0a" }}>
        {featuredProjects.map((f, i) => (
          <div
            key={f.id}
            id={`featured-${i}`}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: i }}
          >
            <FeaturedProject
              project={f.project}
              index={i}
              total={featuredProjects.length}
              tags={f.tags}
              bgColor={f.bgColor}
            />
          </div>
        ))}
        {/* Showcase panel — slides up after Lumon, then cycles through projects */}
        <div
          id="showcase-panel"
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: featuredProjects.length }}
        >
          <ProjectsShowcase activeIndex={showcaseIndex} />
        </div>
      </div>

      {/* Manual spacer — provides scroll distance for the pinned section */}
      <div
        id="featured-spacer"
        style={{
          height: `calc(${featuredProjects.length} * 100vh + ${(featuredProjects.length + 3) * 200}px + ${SHOWCASE_CYCLE_DISTANCE}px)`,
          backgroundColor: "#0a0a0a",
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}


function Nav() {
  return (
    <header className="w-full" style={{ height: 80 }}>
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 h-full flex items-center">
        <Link
          id="nav-logo"
          to="/"
          className="hidden sm:flex font-[Inter] text-sm font-normal no-underline items-center gap-2"
          style={{ color: "#1a1a1a" }}
        >
          chris.
        </Link>
        <nav id="nav-links" className="flex items-center gap-8 mx-auto sm:mx-0 sm:ml-auto">
          <button
            onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
            className="text-sm font-[Inter] font-normal transition-opacity hover:opacity-50 cursor-pointer"
            style={{ color: "#1a1a1a", background: "none", border: "none", padding: 0 }}
          >
            About
          </button>
          <button
            onClick={() => {
              const spacer = document.getElementById("featured-spacer");
              if (spacer) window.scrollTo({ top: spacer.offsetTop + spacer.offsetHeight - window.innerHeight * 2 });
            }}
            className="text-sm font-[Inter] font-normal transition-opacity hover:opacity-50 cursor-pointer"
            style={{ color: "#1a1a1a", background: "none", border: "none", padding: 0 }}
          >
            Projects
          </button>
          <Link
            to="/blog"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            Blog
          </Link>
          <a
            href="mailto:chris@example.com"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="w-full" style={{ marginTop: 80 }}>
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left side — name + tagline */}
          <div id="hero-left" className="flex-1 min-w-0">
            <h1
              id="hero-name"
              className="font-[Inter] font-bold leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(56px, 9vw, 120px)",
                color: "#1a1a1a",
              }}
            >
              Chris
              <br />
              Porter.
            </h1>
            <p
              id="hero-tagline"
              className="font-[Inter] font-normal mt-12"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "#1a1a1a",
                lineHeight: 1.4,
                maxWidth: 600,
              }}
            >
              Urbanist <span className="text-blue-400">x</span> Technologist <span className="text-blue-400">x</span> Builder
            </p>
          </div>

          {/* Right side — selected projects */}
          <div className="w-full lg:w-[360px] shrink-0 lg:pt-8">
            <SelectedProjectsList />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="w-full py-16 px-8 sm:px-12"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full h-px mb-12" style={{ backgroundColor: "#333" }} />
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left — name + location */}
          <div>
            <p
              className="font-[Inter] font-bold text-lg"
              style={{ color: "#fafafa" }}
            >
              Chris Porter
            </p>
            <p
              className="font-['Space_Mono'] text-xs mt-2"
              style={{ color: "#666" }}
            >
              Austin, Texas
            </p>
          </div>

          {/* Middle — social links */}
          <div className="flex flex-col gap-2">
            <p
              className="font-[Inter] text-xs uppercase tracking-widest mb-2"
              style={{ color: "#666" }}
            >
              Social
            </p>
            <a
              href="mailto:hi@chrisporter.org"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/chris-porterwa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bsxp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              GitHub
            </a>
          </div>

          {/* Right — site links */}
          <div className="flex flex-col gap-2">
            <p
              className="font-[Inter] text-xs uppercase tracking-widest mb-2"
              style={{ color: "#666" }}
            >
              Site
            </p>
            <Link
              to="/about"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              About
            </Link>
            <Link
              to="/"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#999" }}
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="w-full h-px mt-12 mb-6" style={{ backgroundColor: "#333" }} />
        <p
          className="font-['Space_Mono'] text-xs"
          style={{ color: "#444" }}
        >
          &copy; {new Date().getFullYear()} Chris Porter
        </p>
      </div>
    </footer>
  );
}

function AustinSvgMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    fetch(AustinSvg)
      .then((r) => r.text())
      .then((text) => {
        el.innerHTML = text;
        const svgEl = el.querySelector("svg");
        if (svgEl) {
          svgEl.setAttribute("width", "100%");
          svgEl.setAttribute("height", "100%");
          svgEl.style.pointerEvents = "none";
          requestAnimationFrame(() => {
            svgEl.classList.add("svg-running");
          });
        }
      });
  }, []);

  return (
    <div
      ref={containerRef}
      id="austin-svg-map"
      className="absolute pointer-events-none desktop-svg-map"
      style={{
        width: "120%",
        height: "120%",
        top: "-10%",
        left: "-15%",
      }}
    />
  );
}

