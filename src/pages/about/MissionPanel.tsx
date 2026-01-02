import { Typography } from "@/components/ui/typography";
import { GRID_SPACING } from "./config";
import { NavigationMenuItem } from "./NavigationMenuItem";

export const highlightItems = [
  {
    title: "7+",
    subtitle: "years building & leading teams in tech",
  },
  {
    title: "4",
    subtitle: "products from zero to launch",
  },
  {
    title: "A lot",
    subtitle: "of late nights building",
  },
  {
    title: "25+",
    subtitle: "projects",
  },
  {
    title: "Too many to count",
    subtitle: "Frameworks & skills I've picked up along the way",
  },
];

export const navigationItems = [
  {
    id: "projects",
    title: "Things I've built",
    secondTitle: "Projects",
    href: "/projects",
  },
  {
    id: "skills",
    title: "My toolbelt",
    secondTitle: "Skills",
    href: "/skills",
  },
  {
    id: "contact",
    title: "Reach out",
    secondTitle: "Contact",
    href: "/contact",
  },
];

function MissionPanel() {
  return (
    <div id="about-mission" className="w-full h-svh top-0 fixed left-0 z-100">
      <VerticalLines />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center h-full overflow-hidden"
        style={{
          width: GRID_SPACING * 12,
        }}
      >
        <div className="h-32">
          <Typography variant="h1" className="z-50" id="mission-title">
            SOFTWARE ENGINEER. URBANIST. CREATOR. DREAMER.
          </Typography>
        </div>
        <div
          className="grid grid-cols-4"
          style={{
            width: GRID_SPACING * 12,
          }}
        >
          <div className="col-span-2 p-1">
            <div className="h-full w-full space-y-12">
              {highlightItems.map((item, index) => (
                <div
                  className="flex flex-col gap-2"
                  id={`highlight-item-${index}`}
                >
                  <Typography
                    variant="h1"
                    className="z-50 font-xl w-full font-[Outfit]"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption">{item.subtitle}</Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2  flex flex-col">
            <Typography
              variant="p"
              className="font-medium m-1"
              id="mission-description"
            >
              I've spent my career bringing dreams from concept into reality.
              From marketplaces, to SEO, to blockchain, to insurance, I've
              cultivated the skills to help myself and others bring their ideas
              to life through the power of technology.
            </Typography>
            <div className="mt-auto last:border-b border-black/10">
              {navigationItems.map((item) => (
                <NavigationMenuItem {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalLines() {
  return (
    <div className="relative w-full h-svh">
      <div
        id={`middle-vertical-line`}
        className="absolute bg-black/10 w-[0.5px] top-0 h-full"
        style={{
          left: `calc(50%)`, // Offset by 1/2 to have overhangs on the lines
          transform: `translateX(-50%)`,
        }}
      />
      <div
        id={`left-1-vertical-line`}
        className="absolute bg-black/10 w-[0.5px] top-0 h-full"
        style={{
          left: `calc(50% - ${3 * GRID_SPACING}px)`, // Offset by 1/2 to have overhangs on the lines
          transform: `translateX(-50%)`,
        }}
      />
      <div
        id={`left-2-vertical-line`}
        className="absolute bg-black/10 w-[0.5px] top-0 h-full"
        style={{
          left: `calc(50% - ${6 * GRID_SPACING}px)`, // Offset by 1/2 to have overhangs on the lines
          transform: `translateX(-50%)`,
        }}
      />
      <div
        id={`right-1-vertical-line`}
        className="absolute bg-black/10 w-[0.5px] top-0 h-full"
        style={{
          left: `calc(50% + ${3 * GRID_SPACING}px)`, // Offset by 1/2 to have overhangs on the lines
          transform: `translateX(-50%)`,
        }}
      />
      <div
        id={`right-2-vertical-line`}
        className="absolute bg-black/10 w-[0.5px] top-0 h-full"
        style={{
          left: `calc(50% + ${6 * GRID_SPACING}px)`, // Offset by 1/2 to have overhangs on the lines
          transform: `translateX(-50%)`,
        }}
      />
    </div>
  );
}

export { MissionPanel };
