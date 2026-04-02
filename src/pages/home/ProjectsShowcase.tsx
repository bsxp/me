import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// All projects for the showcase list
const ALL_PROJECTS = projects;

export function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const numProjects = ALL_PROJECTS.length;

      // Pin the showcase while scrolling through projects
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${numProjects * 150 + window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const deadZone = window.innerHeight / (numProjects * 150 + window.innerHeight);
          const adjustedProgress = Math.max(0, (self.progress - deadZone) / (1 - deadZone));
          const idx = Math.max(
            0,
            Math.min(
              Math.floor(adjustedProgress * numProjects),
              numProjects - 1
            )
          );
          if (idx !== activeIndexRef.current) {
            activeIndexRef.current = idx;
            setActiveIndex(idx);
          }
        },
      });
    },
    { scope: containerRef }
  );

  const activeProject = ALL_PROJECTS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background image for active project */}
      <div className="absolute inset-0 z-0">
        {ALL_PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === activeIndex && project.coverImage ? 0.15 : 0 }}
          >
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-12 max-w-[1400px] mx-auto py-0">
        {/* Project description floating on the right */}
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4"
          style={{ maxWidth: 280 }}
        >
          <p
            className="font-[Inter] text-sm font-normal text-right leading-relaxed transition-opacity duration-300"
            style={{ color: "#888" }}
          >
            {activeProject.description}
          </p>
          <Link
            to={`/projects/${activeProject.id}`}
            className="font-[Inter] text-xs font-normal uppercase tracking-widest no-underline transition-opacity hover:opacity-70"
            style={{ color: "#555" }}
          >
            View project →
          </Link>
        </div>

        {/* Desktop: scroll down indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ border: "1px solid #333" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#555" strokeWidth="1.5" />
            </svg>
          </div>
          <span
            className="font-[Inter] text-[10px] font-normal lowercase tracking-[0.2em]"
            style={{ color: "#555" }}
          >
            scroll down
          </span>
        </div>

        {/* Mobile: progress indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 lg:hidden">
          {ALL_PROJECTS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 6 : 4,
                height: i === activeIndex ? 6 : 4,
                backgroundColor: i === activeIndex ? "#fff" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Project names list — font size scales to fit 100vh */}
        <div
          className="flex flex-col justify-center"
          style={{
            gap: 0,
            // Divide full viewport by number of lines
            fontSize: `calc(100vh / ${ALL_PROJECTS.length})`,
          }}
        >
          {ALL_PROJECTS.map((project, i) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="no-underline block transition-all duration-300"
              style={{
                opacity: i === activeIndex ? 1 : 0.15,
              }}
            >
              <span
                className="font-[Inter] font-bold uppercase tracking-tight block leading-none"
                style={{
                  fontSize: "1em",
                  color: "#fff",
                }}
              >
                {project.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
