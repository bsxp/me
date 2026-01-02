import { projects } from "@/data/projects";
import { Typography } from "@/components/ui/typography";
import { GRID_SPACING } from "./config";
import { ProjectListItem } from "./ProjectListItem";

function ProjectsPanel() {
  return (
    <div
      id="#projects"
      className="flex justify-center items-center mt-[2000px] relative z-101 bg-[#e9f0f1]"
    >
      <div
        id="about-projects"
        className="border-l border-r border-black/10 h-svh pt-4 font-[Outfit] flex flex-col"
        style={{
          width: GRID_SPACING * 12,
        }}
      >
        <Typography variant="h2" className="m-4">
          Projects
        </Typography>
        <div
          className="mt-8 overflow-scroll flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex flex-col"
          >
            {projects.map((project) => (
              <ProjectListItem key={project.id} {...project} />
            ))}
          </div>
          <style>
            {`
              #about-projects > div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}

export { ProjectsPanel };
