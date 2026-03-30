import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SelectedProjectsList } from "./SelectedProjectsList";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectsShowcase } from "./ProjectsShowcase";
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

  useGSAP(
    () => {
      const transitions = featuredProjects.length - 1; // 5 transitions between 6 panels
      const totalPinScroll = transitions * window.innerHeight;

      // Pin the intro so featured wrapper slides up over it
      ScrollTrigger.create({
        trigger: "#home-intro",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // Position all panels except the first off-screen
      featuredProjects.forEach((_, i) => {
        if (i === 0) return;
        const fromRight = i % 2 === 1;
        gsap.set(`#featured-${i}`, {
          xPercent: fromRight ? 100 : 0,
          yPercent: fromRight ? 0 : 100,
        });
      });

      // Single timeline for all transitions — no gaps, continuous scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#featured-wrapper",
          start: "top top",
          end: `+=${totalPinScroll}`,
          pin: true,
          pinSpacing: false,
          scrub: 0.5, // slight smoothing for buttery feel
        },
      });

      // Add each transition sequentially to the timeline
      featuredProjects.forEach((_, i) => {
        if (i === 0) return;

        tl.to(
          `#featured-${i}`,
          {
            xPercent: 0,
            yPercent: 0,
            duration: 1,
            ease: "none",
          },
          (i - 1) // position each transition sequentially
        );
      });
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
        {/* Austin infrastructure SVG underlay — fades out on right */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, black 40%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 70%)",
          }}
        >
          <img
            src={AustinSvg}
            alt=""
            className="absolute"
            style={{
              opacity: 0.25,
              width: "120%",
              height: "120%",
              top: "-10%",
              left: "-15%", // adjust to pan horizontally
            }}
          />
        </div>
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ border: "1px solid #ccc", backgroundColor: "rgb(250, 250, 250)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" >
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
      </div>

      {/* Featured projects wrapper — all panels stacked, pinned as a group */}
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
      </div>

      {/* Manual spacer — provides scroll distance for the pinned transitions */}
      <div
        id="featured-spacer"
        style={{
          height: `${(featuredProjects.length - 1) * 100}vh`,
          backgroundColor: "#0a0a0a",
        }}
      />

      {/* All projects showcase — follows immediately after spacer */}
      <ProjectsShowcase />
    </div>
  );
}

function Nav() {
  return (
    <header className="w-full" style={{ height: 80 }}>
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 h-full flex items-center">
        <Link
          to="/"
          className="font-[Inter] text-sm font-normal no-underline flex items-center gap-2"
          style={{ color: "#1a1a1a" }}
        >
          chris.
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <Link
            to="/about"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            About
          </Link>
          <Link
            to="/"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            Projects
          </Link>
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
          <div className="flex-1 min-w-0">
            <h1
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
