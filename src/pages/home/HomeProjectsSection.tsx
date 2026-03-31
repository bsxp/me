import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { projects } from "@/data/projects";
import { ProjectListItem } from "@/pages/about/ProjectListItem";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GRID_SPACING } from "./config";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_IDS = ["hearth", "foundra", "lumon", "rater", "Lytic"];
const featuredProjects = FEATURED_IDS.map((id) =>
  projects.find((p) => p.id === id)!
);

function HomeProjectsSection() {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      ".home-project-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-work",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="home-work"
      className="flex justify-center items-start relative z-50 bg-[#e9f0f1]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="border-t border-b border-black/10 pt-4 font-[Forum] flex flex-col w-full"
        style={{ maxWidth: GRID_SPACING * 12 }}
      >
        <div className="px-4 pb-2 flex items-end justify-between">
          <Typography variant="h2">Selected Work</Typography>
          <Button
            variant="ghost"
            className="rounded-full"
            size="lg"
            onClick={() => navigate("/about#projects")}
          >
            All work <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <div key={project.id} className="home-project-item">
              <ProjectListItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HomeProjectsSection };
