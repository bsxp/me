import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/data/projects";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { BorderLinesOverlay } from "./Overlays";

export function FeaturedProject({
  project,
  index,
  total,
  tags,
  bgColor = "#0a0a0a",
  overlay,
}: {
  project: Project;
  index: number;
  total: number;
  tags: string[];
  bgColor?: string;
  overlay?: React.ReactNode;
}) {
  const number = String(index + 1).padStart(2, "0");
  const meta = [
    { label: "Project", value: project.title },
    { label: "Role", value: project.role },
    { label: "Date", value: project.year },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));
  const totalStr = String(total).padStart(2, "0");
  const titleRef = useRef<HTMLDivElement>(null);
  const { atLeast } = useBreakpoint();
  const inset = atLeast.lg ? 64 : 16;

  // Defer loading the cover media until the panel is near the viewport. These
  // panels live below the fold, so eagerly fetching/decoding every cover (and
  // autoplaying the video) on first paint starves the hero→about animation.
  const mediaRef = useRef<HTMLDivElement>(null);
  const [mediaInView, setMediaInView] = useState(false);
  // Fade the cover in once it has decoded instead of popping in (and showing
  // a broken-image placeholder while the request is in flight)
  const [mediaLoaded, setMediaLoaded] = useState(false);
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMediaInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Set all title lines hidden initially
  useGSAP(() => {
    const lines = titleRef.current?.querySelectorAll(".title-line");
    if (!lines) return;
    gsap.set(lines, { yPercent: 100, opacity: 0 });
  }, { scope: titleRef });

  return (
    <div
      className="w-full h-screen relative"
      style={{ backgroundColor: bgColor }}
    >
      {/* Border + crosshairs on every panel */}
      <BorderLinesOverlay />
      {overlay}

      {/* Content aligned inside the border frame (64px top/bottom, 32px sides + 16px inner padding) */}
      <div
        className="absolute flex flex-col overflow-hidden z-10"
        style={{ top: inset, bottom: inset, left: inset, right: inset, padding: atLeast.lg ? "20px 24px" : "12px 8px" }}
      >
        {/* Counter — top right */}
        <div className="flex justify-start mb-8">
          <span
            className="font-[Inter] text-sm font-normal"
            style={{ color: "#fff" }}
          >
            <span className="font-medium">{number}</span>
            <span style={{ color: "#555" }}> / {totalStr}</span>
          </span>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1 min-h-0">
          {/* Left — title + meta */}
          <div className="flex-1 min-w-0 flex flex-col">
            <Link
              to={`/projects/${project.id}`}
              className="no-underline"
            >
              <div ref={titleRef} style={{ maxWidth: 700 }}>
                <div className="overflow-hidden">
                  <h2
                    className="title-line font-[Inter] font-bold leading-[1.05] tracking-tight"
                    style={{
                      fontSize: "clamp(32px, 5vw, 56px)",
                      color: "#fff",
                    }}
                  >
                    {project.title} —
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2
                    className="title-line font-[Inter] font-bold leading-[1.05] tracking-tight"
                    style={{
                      fontSize: "clamp(32px, 5vw, 56px)",
                      color: "#fff",
                    }}
                  >
                    {project.description}
                  </h2>
                </div>
              </div>
            </Link>

            {/* Project / Role / Date row */}
            <div className="mt-auto pt-12">
              <div
                className="grid gap-8 pb-3 mb-3"
                style={{ gridTemplateColumns: `repeat(${meta.length}, minmax(0, 1fr))`, borderBottom: "1px solid #333" }}
              >
                {meta.map(({ label }) => (
                  <span
                    key={label}
                    className="font-[Inter] text-xs font-normal uppercase tracking-widest"
                    style={{ color: "#555" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${meta.length}, minmax(0, 1fr))` }}>
                {meta.map(({ label, value }) => (
                  <span
                    key={label}
                    className="font-[Inter] text-sm font-normal"
                    style={{ color: "#ccc" }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — tags */}
          <div className="shrink-0 flex flex-row lg:flex-col flex-wrap gap-3 lg:items-end lg:pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-5 py-2 rounded-full font-[Inter] text-sm font-normal whitespace-nowrap"
                style={{
                  border: "1px solid #444",
                  color: "#ccc",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Preview media */}
        {(project.coverImage || project.coverVideo) && (
          <div className="mt-4 min-h-0 flex-1">
            <Link
              to={`/projects/${project.id}`}
              className="block no-underline h-full"
            >
              <div
                ref={mediaRef}
                className="w-full h-full overflow-hidden flex items-center justify-center"
                style={{ borderRadius: 4 }}
              >
                {mediaInView &&
                  (project.coverVideo ? (
                    <video
                      src={project.coverVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      onLoadedData={() => setMediaLoaded(true)}
                      className="max-w-full max-h-full object-contain pointer-events-none transition-opacity duration-700 ease-out"
                      style={{ borderRadius: 4, opacity: mediaLoaded ? 1 : 0 }}
                    />
                  ) : (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      decoding="async"
                      onLoad={() => setMediaLoaded(true)}
                      className="max-w-full max-h-full object-contain transition-opacity duration-700 ease-out"
                      style={{ borderRadius: 4, opacity: mediaLoaded ? 1 : 0 }}
                    />
                  ))}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
