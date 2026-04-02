import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const SELECTED_PROJECT_IDS = [
  "hearth",
  "labbook",
  "foundry",
  "playbook",
  "OneFeed",
  "lumon",
];

const selectedProjects = SELECTED_PROJECT_IDS.map(
  (id) => projects.find((p) => p.id === id)!
);

export function SelectedProjectsList() {
  return (
    <div id="selected-projects-wrapper">
      <span
        id="selected-projects-header"
        className="font-[Inter] text-xs font-normal uppercase tracking-widest block mb-4 lg:mb-6"
        style={{ color: "#999" }}
      >
        Selected Projects
      </span>
      <div>
        {selectedProjects.map((project, i) => (
          <Link
            key={project.id}
            id={`selected-project-${i}`}
            to={`/projects/${project.id}`}
            className="group relative block no-underline py-3 lg:py-5"
          >
            <div className="flex items-center justify-between">
              <span
                className="font-[Inter] text-base font-normal"
                style={{ color: "#1a1a1a" }}
              >
                {project.title}
              </span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                style={{ color: "#1a1a1a" }}
              />
            </div>
            {/* Base line */}
            <span
              className={`absolute bottom-0 left-0 w-full h-px ${i === 3 ? "selected-project-collapse-line" : ""}`}
              style={{ backgroundColor: "#e5e5e5" }}
            />
            {/* Black line that sweeps LTR on hover */}
            <span
              className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
              style={{ backgroundColor: "#1a1a1a" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
