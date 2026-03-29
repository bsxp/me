import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SelectedProjectsList } from "./SelectedProjectsList";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURED = [
  {
    id: "hearth",
    tags: ["Urban Data", "Civic Tech", "Data Visualization", "Mapping"],
  },
  {
    id: "labbook",
    tags: ["Science", "E-Notebooks", "Cryptography", "SaaS"],
  },
  {
    id: "foundry",
    tags: ["Startups", "CRM", "Accounting", "Toolkit"],
  },
  {
    id: "playbook",
    tags: ["Events", "Coordination", "Mobile", "Logistics"],
  },
  {
    id: "Lytic",
    tags: ["LLM Analytics", "Observability", "Dashboards", "AI"],
  },
  {
    id: "lumon",
    tags: ["Terminal", "Retro UI", "Easter Egg", "Severance"],
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
      const scrollPerTransition = window.innerHeight; // 100vh per transition
      const totalPinScroll = transitions * scrollPerTransition;

      // Pin the intro so featured wrapper slides up over it
      ScrollTrigger.create({
        trigger: "#home-intro",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // Pin the featured wrapper with NO pin spacing — we use a manual spacer
      const wrapperPin = ScrollTrigger.create({
        trigger: "#featured-wrapper",
        start: "top top",
        end: `+=${totalPinScroll}`,
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

      // Animate each panel in during its scroll segment
      featuredProjects.forEach((_, i) => {
        if (i === 0) return;

        const segmentStart = (i - 1) * scrollPerTransition;
        const segmentEnd = i * scrollPerTransition;
        const pinStart = wrapperPin.start;

        gsap.to(`#featured-${i}`, {
          xPercent: 0,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#featured-wrapper",
            start: pinStart + segmentStart,
            end: pinStart + segmentEnd,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="overflow-x-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Intro section — gets pinned */}
      <div
        id="home-intro"
        className="min-h-screen relative"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Nav />
        <Hero />
      </div>

      {/* Featured projects wrapper — all panels stacked, pinned as a group */}
      <div id="featured-wrapper" className="relative z-10" style={{ height: "100vh", backgroundColor: "#0a0a0a" }}>
        {featuredProjects.map((f, i) => (
          <div
            key={f.id}
            id={`featured-${i}`}
            className="absolute inset-0 w-full h-full overflow-auto"
            style={{ zIndex: i }}
          >
            <FeaturedProject
              project={f.project}
              index={i}
              total={featuredProjects.length}
              tags={f.tags}
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
            to="/blog"
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
              I'm Chris
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
              I build software with purpose and meticulous attention to detail.
              Available for work.
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
