import { Typography } from "@/components/ui/typography";
import TransitNight from "@/assets/transit-night.jpg";
import { IntroPanel } from "./IntroPanel";
import { BlogPanel } from "./BlogPanel";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { PlusCircleButton } from "../blog/PlusCircleButton";

const CIRCLE_DIAMETER = 120;
const GUTTER_SIZE = 16;

export function HomePage() {
  return (
    <div
      id="main-grid"
      className="grid w-[calc(100svw-32px)] h-[calc(100svh-32px)] grid-cols-12 grid-rows-12 gap-4 m-4 sm:min-w-[640px] 2xl:min-w-[1280px]"
    >
      <div
        id="intro-panel-wrapper"
        className="col-span-12 md:col-span-4 row-span-30 md:row-span-12"
      >
        <IntroPanel />
      </div>
      <div
        id="projects-panel-wrapper"
        className="col-span-12 md:col-span-4 row-span-10 md:row-span-12"
      >
        <ProjectsPanel />
      </div>
      <div
        id="blog-panel-wrapper"
        className="col-span-12 md:col-span-4 row-span-10 md:row-span-7 relative"
      >
        <BlogPanel />
      </div>
      <div
        id="about-panel-wrapper"
        className="col-span-12 md:col-span-4 row-span-18 md:row-span-5 relative pb-4 md:pb-0"
      >
        <AboutPanel />
      </div>
    </div>
  );
}

function ProjectsPanel() {
  const { atLeast } = useBreakpoint();

  const handleNavigateToProjects = () => {};

  return (
    <div
      className="bg-white w-full h-full overflow-hidden relative p-12 space-y-4 flex"
      style={{
        borderRadius: atLeast.md
          ? `16px 16px 16px ${CIRCLE_DIAMETER / 2}px`
          : `16px ${CIRCLE_DIAMETER / 2}px 16px ${CIRCLE_DIAMETER / 2}px`,
      }}
    >
      <img
        id="hearth-background-austin"
        alt="Austin map"
        src={TransitNight}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-10 brightness-75"
      />
      <Typography
        className="z-50 text-white relative mb-0"
        variant={atLeast.md ? "h2" : "h3"}
      >
        PROJECTS
      </Typography>
      <PlusCircleButton
        className={cn("mr-12", atLeast.md && "top-18")}
        handleClick={handleNavigateToProjects}
        expanded={false}
      />
    </div>
  );
}

function AboutPanel() {

  const { atLeast } = useBreakpoint();

  return (
    <div className="relative w-full h-full">
      <AnimatedButton />
      <div
        className="absolute bottom-0 right-0 bg-blue-700"
        style={{
          width: CIRCLE_DIAMETER + GUTTER_SIZE,
          height: CIRCLE_DIAMETER + GUTTER_SIZE,
        }}
      />
      <div
        id="profile-circle-cutout"
        className="absolute bottom-0 right-0 bg-[#e9f0f1] z-1"
        style={{
          width: CIRCLE_DIAMETER + GUTTER_SIZE,
          height: CIRCLE_DIAMETER + GUTTER_SIZE,
          borderRadius: `${CIRCLE_DIAMETER / 1.5}px 0 0 0`,
        }}
      />
      <div
        id="bottom-panel"
        className="absolute bg-blue-700"
        style={{
          bottom: 0,
          left: 0,
          width: `calc(100% - (${CIRCLE_DIAMETER + GUTTER_SIZE}px))`,
          height: `${CIRCLE_DIAMETER + GUTTER_SIZE}px`,
          borderRadius: `0 0 ${CIRCLE_DIAMETER / 2}px 16PX`,
        }}
      />
      <div
        id="main-panel"
        className="absolute bg-blue-700 p-12 space-y-4 flex flex-col text-white"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: `calc(100% - (${CIRCLE_DIAMETER + GUTTER_SIZE}px))`,
          borderRadius: `16px 16px ${CIRCLE_DIAMETER / 2}px 0`,
        }}
      >
        <Typography variant={atLeast.md ? "h2" : "h3"}>ABOUT ME</Typography>
      </div>
    </div>
  );
}
