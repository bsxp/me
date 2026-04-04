export const POST_META = {
  slug: "my-side-project-starter-pack",
  title: "My side project starter pack",
  description:
    "The tech stack I reach for in 2026 to go from idea to something in-hand in an afternoon — and why AI compatibility is the common thread.",
  tags: ["Engineering", "Tools", "AI"],
  date: new Date(2026, 3, 4),
};

import { TechChip } from "../components/TechChip";

export default function MySideProjectStarterPack() {
  return (
    <article>
      <p>
        It's 2026, if you're a developer and haven't at least tried to spin up a
        side project with AI... you're falling behind, bud. Let me be crisp: by
        "side project" I don't mean "my next business". What I mean, whenever I
        ask myself, "What if I could just...?", it's the thing that comes out the
        other side.
      </p>
      <ul>
        <li>
          What if I could just automatically source date ideas for my partner and
          I?
        </li>
        <li>
          What if I could just calculate the shadiest bike trails in Austin?
        </li>
        <li>
          What if I could just build an app to run a murder mystery game night
          for some friends?
        </li>
      </ul>
      <p>
        Simple questions, relatively simple answers (especially with Claude
        Code), and here's what I use to build them:
      </p>

      <h2>Frontend</h2>
      <ul>
        <li>
          <TechChip name="Vite" logo="/vite.svg" href="https://vite.dev/" />
          {" "}— fast, reliable, hot-reloading. What's not to love?
        </li>
        <li>
          <TechChip
            name="@tanstack/react-router"
            logo="/logos/tanstack-router.svg"
            href="https://www.npmjs.com/package/@tanstack/react-router"
          />
          {" "}- great documentation, AI plays very nicely, has every routing feature
          you could ever want.
        </li>
        <li>
          <TechChip
            name="Inline styles"
            logo="/logos/react.svg"
            href="https://react.dev/"
          />
          {" "}or{" "}
          <TechChip
            name="Tailwind"
            logo="/logos/tailwind.svg"
            href="https://tailwindcss.com/"
          />
          {" "}— whichever AI is feeling that day. I'm not as opinionated as I used to
          be. If you'd've asked me 3 years ago, I'd say tailwind. Now I optimize
          to stay out of AI's way, while maintaining the ability to touch code
          where AI struggles.
          <ul>
            <li>
              Often I find AI using{" "}
              <TechChip
                name="shadcn"
                logo="/logos/shadcn.svg"
                href="https://ui.shadcn.com/"
              />
              , which I approve of
            </li>
          </ul>
        </li>
        <li>
          <TechChip
            name="GSAP"
            logo="/logos/gsap.svg"
            href="https://gsap.com/"
          />
          {" "}— clean animations &amp; easy-to-use syntax.
          Conceptually, animations are difficult to grasp. GSAP doesn't get in
          your way while you learn, and gives you tools where you need them.
        </li>
      </ul>

      <h2>Backend</h2>
      <ul>
        <li>
          <TechChip
            name="Supabase"
            logo="/logos/supabase.svg"
            href="https://supabase.com/"
          />
          {" "}— For $25/mo I get essentially unlimited side projects in the same
          database, OAuth, file storage, a permissions system, collaboration,
          realtime features, AND AI plays very nicely with their SDK? 10/10.
        </li>
        <li>
          <TechChip
            name="AWS Lambda"
            logo="/logos/aws-lambda.svg"
            href="https://aws.amazon.com/pm/lambda/"
          />
          {" "}— For more sophisticated projects or projects that require secure keys.
          <ul>
            <li>
              Bonus callout: I use{" "}
              <TechChip
                name="Pulumi"
                logo="/logos/pulumi.svg"
                href="https://www.pulumi.com/"
              />
              {" "}to spin up most AWS resources for projects so I can partition them
              into easily-sunsettable stacks.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Serving it up</h2>
      <ul>
        <li>
          <TechChip
            name="AWS Amplify"
            logo="/logos/aws-amplify.png"
            href="https://aws.amazon.com/amplify/"
          />
          {" "}— Simple code-to-deployed tool that's cheap, and has built in DNS
          tooling, password protection, etc. Honestly not too differentiated from
          Vercel, Netlify, etc. for simple web hosting. For a side project as a
          solo developer who is not pushing daily updates, AWS Amplify can net
          out to &lt;$2/year for hosting per project.
        </li>
      </ul>

      <h2>Other mentions</h2>
      <ul>
        <li>
          <TechChip
            name="GitHub"
            logo="/logos/github.svg"
            href="https://github.com/"
          />
          {" "}— No brainer. Gotta put your code in the cloud somewhere, might as
          well use the most well-supported tool to do it.
        </li>
        <li>
          <TechChip
            name="Claude API"
            logo="/logos/claude.svg"
            href="https://platform.claude.com/"
          />
          {" "}— I'm partial toward Claude's API product more than ChatGPT these
          days. If I need an AI feature, this is my default. Anecdotally, I find
          that Claude's research capabilities yield higher quality results and
          the conversations feel less sycophantic (as of Opus 4.6).
        </li>
        <li>
          <TechChip
            name="Expo"
            logo="/logos/expo.svg"
            href="https://expo.dev/"
          />
          {" "}— Newcomer for me, and admittedly I don't build as many mobile apps as
          I used to. Makes developing with React Native a breeze from the brief
          tinkering I've done.
        </li>
      </ul>

      <p>
        Depending on the project I'll sprinkle in other tech, but these are the
        standard techs I'm using in 2026 to go from idea to having something
        in-hand in an afternoon. They all have one thing in common: AI plays very
        nicely with them. Because Claude Code drives much of my development these
        days, it's essential that anything on the toolbelt doesn't impede the
        little bot going brrrrr in my terminal.
      </p>
    </article>
  );
}
