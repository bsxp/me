import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const SELECTED_PROJECT_IDS = [
  "hearth",
  "foundra",
  "rater",
  "playbook",
  "Lytic",
  "lumon",
];

const selectedProjects = projects.filter((p) =>
  SELECTED_PROJECT_IDS.includes(p.id)
);

export function SelectedProjectsList() {
  return (
    <div>
      <span
        className="font-[Inter] text-xs font-normal uppercase tracking-widest block mb-6"
        style={{ color: "#999" }}
      >
        Selected Projects
      </span>
      <div>
        {selectedProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group relative block no-underline py-5"
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
              className="absolute bottom-0 left-0 w-full h-px"
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
