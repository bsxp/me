import HearthCover from "@/assets/projects/hearth/hearth-cover.jpg";
import { Typography } from "@/components/ui/typography";

type Project = {
  id: string;
  title: string;
  description: string;
  overview: string | React.ReactNode;
  coverImage: string;
  body: string | React.ReactNode;
  href: string;
};

const projects: Project[] = [
  {
    id: "hearth",
    title: "Hearth",
    description: "Using urban data to reshape cities",
    coverImage: HearthCover,
    overview: (
      <span>
        It all started with a simple question: what makes European cities feel
        better? Is it the Architecture? Is it the accessibility and public
        transit? It is the history? Could it possibly be the culture; the
        essence of people percolating up through food, music, and art all around
        us?
        <br />
        <br />
        Hearth uses urban datasets to understand what makes our cities feel
        better, and aims to make prescriptive changes to spaces to make them
        more human-centric.
      </span>
    ),
    body: (
      <>
        <section id="introduction">
          <Typography variant="h2">Introduction</Typography>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
        </section>
        <section id="the-problem">
          <Typography variant="h2">The Problem</Typography>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
        </section>
        <section id="the-solution">
          <Typography variant="h2">The Solution</Typography>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
        </section>
        <section id="the-results">
          <Typography variant="h2">The Results</Typography>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
          ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
          tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
          massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
          inceptos himenaeos.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "foundra",
    title: "Foundra",
    description: "Using natural language to scrape urban data",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "my-site",
    title: "My Site",
    description: "My personal website",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lumon",
    title: "Lumon terminal pro",
    description: "Finding the scary numbers",
    coverImage: "",
    overview: "",
    body: "",
    href: "",
  },
  {
    id: "playbook",
    title: "Playbook",
    description: "Simplifying the process of organizing live events",
    coverImage: "",
    overview: "",
    body: "",
    href: "",
  },
  {
    id: "rater",
    title: "Rater",
    description:
      "Drag-and-drop insurance rater builder, version control, data management, and more",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "OneFeed",
    title: "OneFeed",
    description:
      "A unified feed of all notifications that a developer might need",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lunchin",
    title: "LunchIn",
    description: "Coordinate going out to lunch with coworkers",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "puzzlebyte",
    title: "Puzzlebyte",
    description: "A wordle-like daily game to guess a common english phrase",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Lytic",
    title: "Lytic",
    description: "Tracking & analyzing LLM output, utilization, and trends",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Redeem",
    title: "Redeem",
    description: "A universal rewards program on your phone",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Tyle",
    title: "Tyle",
    description: "Understanding user sentiment on Reddit using AI",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "date-day",
    title: "DateDay",
    description: "A platform for finding and tracking dates with your partner",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "bakesale",
    title: "Bakesale",
    description: "Digital tokens for small business loyalty programs",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "irpg",
    title: "iRPG",
    description:
      "Turning fitness and other real-life activities into a mobile game",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lexeau",
    title: "Lexeau",
    description: "Automated SEO for evergreen verticals",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "duelbot",
    title: "DuelBot",
    description: "A turn-based Discord game with a player-run market economy",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "popover",
    title: "PopOver",
    description: "A college student labor platform",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
];

export { projects, type Project };
