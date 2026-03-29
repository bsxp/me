import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
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
  const totalStr = String(total).padStart(2, "0");

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
        style={{ top: 64, bottom: 64, left: 32, right: 32, padding: "20px 24px" }}
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
              <h2
                className="font-[Inter] font-bold leading-[1.05] tracking-tight"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  color: "#fff",
                  maxWidth: 700,
                }}
              >
                {project.title} — {project.description}
              </h2>
            </Link>

            {/* Project / Role / Date row */}
            <div className="mt-auto pt-12">
              <div
                className="grid grid-cols-3 gap-8 pb-3 mb-3"
                style={{ borderBottom: "1px solid #333" }}
              >
                <span
                  className="font-[Inter] text-xs font-normal uppercase tracking-widest"
                  style={{ color: "#555" }}
                >
                  Project
                </span>
                <span
                  className="font-[Inter] text-xs font-normal uppercase tracking-widest"
                  style={{ color: "#555" }}
                >
                  Role
                </span>
                <span
                  className="font-[Inter] text-xs font-normal uppercase tracking-widest"
                  style={{ color: "#555" }}
                >
                  Date
                </span>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <span
                  className="font-[Inter] text-sm font-normal"
                  style={{ color: "#ccc" }}
                >
                  {project.title}
                </span>
                <span
                  className="font-[Inter] text-sm font-normal"
                  style={{ color: "#ccc" }}
                >
                  Engineer & Designer
                </span>
                <span
                  className="font-[Inter] text-sm font-normal"
                  style={{ color: "#ccc" }}
                >
                  2024
                </span>
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
                className="w-full h-full overflow-hidden flex items-center justify-center"
                style={{ borderRadius: 4 }}
              >
                {project.coverVideo ? (
                  <video
                    src={project.coverVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-full max-h-full object-contain pointer-events-none"
                    style={{ borderRadius: 4 }}
                  />
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                    style={{ borderRadius: 4 }}
                  />
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
