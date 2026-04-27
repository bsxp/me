export const POST_META = {
  slug: "my-engineering-tools-graveyard",
  title: "My engineering tools graveyard",
  description:
    "The tools that used to live in my engineering stack but have quietly disappeared over the years, and why.",
  tags: ["Engineering", "Tools", "AI"],
  date: new Date(2026, 3, 27),
};

import { Link } from "react-router-dom";
import { TechChip } from "../components/TechChip";

export default function MyEngineeringToolsGraveyard() {
  return (
    <article>
      <p>
        I recently published an article,{" "}
        <Link to="/blog/posts/my-side-project-starter-pack">
          My side project starter pack
        </Link>
        , detailing what I use when going from 0 to 1 on a new idea.
        I've been a developer for nearly a decade at this point, and
        over the years lots of tools that I used to recommend to
        others, or that lived as defaults in my projects, have simply
        vanished from my stack for one reason or another.
      </p>

      <p>
        Tools go defunct or lose their value prop all the time,
        especially those with a free tier that choose to fully close
        their doors to hobbyists (which is totally okay, and often
        strategically the correct choice for SaaS). Here are a few
        that I've had to drop, or that have slowly disappeared from
        my stack over the years:
      </p>

      <ul>
        <li>
          <TechChip
            name="Heroku"
            logo="/logos/heroku.svg"
            href="https://www.heroku.com/"
          />
          {" "}— they used to have a very generous free tier with a
          database included. Heroku claims they discontinued their
          free plans due to{" "}
          <a
            href="https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Fraud and Abuse"
          </a>
          , and rumour had it that it was being overused by crypto
          miners during the height of the crypto bubbles. I used to
          host{" "}
          <Link to="/projects/duelbot">DuelBot</Link>{" "}
          on Heroku for $7.73 a month, which felt like a total steal
          for the reliability it provided to wee junior dev me.
        </li>

        <li>
          <TechChip
            name="Material UI"
            logo="/logos/mui.svg"
            href="https://mui.com/"
          />
          {" "}— just too opinionated of a component library for me. I
          found myself wanting more control over the user experience,
          and gradually transitioned to Tailwind/shadcn. Turns out, AI
          feels much the same way, as Claude Code often uses shadcn as
          a default under the hood.
        </li>

        <li>
          <TechChip
            name="GitHub Copilot"
            logo="/logos/github.svg"
            href="https://github.com/features/copilot"
          />
          {" "}— if you were a developer when this launched, this
          totally blew your mind. The AI can autocomplete my code? It
          can reference other files? These days I barely look at code
          except when things break and I need to dive in. Tools like
          Claude Code have eclipsed both the quantity and quality of
          output.
        </li>

        <li>
          JavaScript — I'll come clean right away and say that JS is
          never truly in the graveyard. However, ever since adopting
          TypeScript I've opted to use it over JavaScript wherever
          possible. It's just a more ergonomic developer experience,
          which leads to fewer bugs, better readability, and more
          collaborative code.
        </li>

        <li>
          <TechChip
            name="ChatGPT"
            logo="/logos/chatgpt.svg"
            href="https://chatgpt.com/"
          />
          {" "}— as of April 2026, I've cancelled my ChatGPT
          membership. I found that the sycophantic chatbot produced
          errant results with enough frequency that I began to doubt
          everything it produced. This ranged from quotes, to "search
          results", to code. At present, I've found Claude / Claude
          Code to produce higher quality results in everything that I
          do.
        </li>

        <li>
          <TechChip
            name="Firebase"
            logo="/logos/firebase.svg"
            href="https://firebase.google.com/"
          />
          {" "}— at one point Firebase underpinned one of my startups
          (
          <Link to="/projects/popover">PopOver</Link>
          ), but as NoSQL and SQL databases have slowly converged on
          capabilities (JSONB lovers, anyone?), I've found that the
          relational structure of PostgreSQL has been the most
          ergonomic for all projects I work on. Projects that used to
          get built atop Firebase have now bifurcated into two
          architectures:
          <ul>
            <li>
              <TechChip
                name="Supabase"
                logo="/logos/supabase.svg"
                href="https://supabase.com/"
              />
              {" "}backend — for when I don't want to build realtime,
              auth, etc. myself.
            </li>
            <li>
              <TechChip
                name="AWS"
                logo="/logos/aws.svg"
                href="https://aws.amazon.com/"
              />
              {" "}provisioned infra, managed by Pulumi — super
              scalable, and operates nicely with coding agents. I usually lean on this stack for heavier-duty
              projects that require tailored architectural decisions,
              or where I expect to be leaning on some of AWS' other
              products.
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}
