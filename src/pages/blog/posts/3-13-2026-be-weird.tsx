export const POST_META = {
  slug: "be-weird",
  title: "Be a little weird",
  description:
    "What happens when you show up to an AI conference in a lobster costume — and why leaning into whimsy makes life better.",
  tags: ["Thoughts", "Austin", "SXSW"],
  date: new Date(2026, 2, 13),
};

import { Link } from "react-router-dom";
import { TechChip } from "../components/TechChip";

const IMG = "/blog/be-weird";

export default function BeWeird() {
  return (
    <article>
      <p>
        Picture this: you're biking down South Congress in an 8-foot-tall
        inflatable lobster costume, and every single person at every stoplight is
        pulling out their phone. That was my Wednesday night during SXSW 2026.
      </p>

      <p>Let me back up.</p>

      <p>
        Every year here in Austin we do a little event called South by
        Southwest, more commonly referred to as SXSW. As a resident of Austin,
        the juxtaposition between your average weekend downtown and the energy of
        the two SXSW weekends is something of a spectacle. Our sidewalks fill up
        with lost pedestrians, the wild Lime scooters come out in full force, and
        all of our favorite restaurants and venues turn into a "house". Founder
        house, House house, Mouse house, you name it, it's probably a thing.
      </p>

      <p>And I love it.</p>

      <p>
        This year, unfortunately our time for SXSW was cut short by travel
        plans, but not before being able to attend a highly anticipated event:{" "}
        <a
          href="https://luma.com/clawconaustin?tk=mh7GG6"
          target="_blank"
          rel="noopener noreferrer"
        >
          ClawCon
        </a>
        . The OpenClaw fanbase has really leaned into the lobster theme:
      </p>
      <ul>
        <li>
          <TechChip
            name="OpenClaw"
            logo="/logos/openclaw.svg"
            href="https://openclaw.ai/"
          />{" "}
          has a core orchestration tool called "
          <a
            href="https://docs.openclaw.ai/tools/lobster"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lobster
          </a>
          "
        </li>
        <li>
          Y Combinator posted{" "}
          <a
            href="https://www.youtube.com/watch?v=Q8wVMdwhlh4"
            target="_blank"
            rel="noopener noreferrer"
          >
            an episode of Lightcone
          </a>{" "}
          where they started dressed as lobsters
        </li>
        <li>
          People started showing up to{" "}
          <a
            href="https://www.nbcnews.com/tech/tech-news/lobster-themed-event-ai-enthusiasts-exuberance-side-cocktail-sauce-rcna261892"
            target="_blank"
            rel="noopener noreferrer"
          >
            events
          </a>{" "}
          with lobster claws on their hands
        </li>
      </ul>

      <p>
        While all of this is going on, the Google search trends for "OpenClaw"
        are popping off, and even peaked three days prior to Austin's ClawCon
        event:
      </p>

      <img
        src={`${IMG}/google-trends-openclaw.png`}
        alt="Google Trends for OpenClaw showing a spike before ClawCon"
        className="w-full rounded-sm my-6"
      />

      <p>
        Last minute, right before heading to the event, I had an idea:
      </p>

      <blockquote>
        What if I took the lobster theme to the next level?
      </blockquote>

      <p>
        I knew a guy here in Austin that bought a lobster costume for the annual{" "}
        <a
          href="https://downhilltodowntown.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Domain to Downtown
        </a>{" "}
        race, and thought, "This would be perfect to wear to ClawCon".
      </p>

      <p>
        So, before heading over to ClawCon I swung by his place in East Austin,
        put on the costume, and hopped on a Lime bike to get back into downtown
        for the event.
      </p>

      <p>
        At every stoplight, people were pulling out their phones to take
        pictures. On the bike trail, everyone gave a thumbs up or waved as I
        whizzed past. I really thought "keep Austin weird" meant that people
        would have seen more lobsters on bikes... but I suppose it was novel
        enough to get everyone excited.
      </p>

      <p>
        Anyway, as I pulled up to the ClawCon event, I fully expected other
        people to be in lobster costumes! Turns out, I might have gone a little
        too far... The line to get into ClawCon was all uncostumed OpenClaw
        enthusiasts. As I walked over to the line, people started taking photos.
      </p>

      <img
        src={`${IMG}/PHOTO-2026-03-12-23-32-14.jpg`}
        alt="Arriving at ClawCon in a lobster costume"
        className="w-full rounded-sm my-6"
      />

      <p>
        While I waited in line, about a dozen people came up asking to get photos
        with "Mr. Claw", which was hilarious. My ClawCon experience started
        before I even got inside — making new friends who were far deeper
        OpenClaw enthusiasts than I am. I met a couple who runs their entire
        marketing agency on OpenClaw — talk about relationship goals. I met a
        former NYC banker who was using OpenClaw to automate everything he could
        think of in his daily life. I felt like a mall Santa with the way people
        were coming up to share their stories and ask for photos.
      </p>

      <img
        src={`${IMG}/PXL_20260312_234154293.MP.jpg`}
        alt="Meeting fellow OpenClaw enthusiasts in line"
        className="w-full rounded-sm my-6"
      />
      <p className="text-center" style={{ color: "#999", fontSize: "0.85rem", marginTop: "-1rem" }}>
        The line to get in — spot the lobster
      </p>

      <p>
        On my way in the door, the security for the event asked for selfies and
        gave me extra drink tickets (y'all are awesome, thank you!).
      </p>

      <p>
        Once inside the event, I found some friends and friendly faces,
        interrupted no less than a half dozen times in the first 10 minutes to
        get photo ops with new entrants.
      </p>

      <img
        src={`${IMG}/PXL_20260313_000252110.jpg`}
        alt="With my good friend Rick at ClawCon"
        className="w-full rounded-sm my-6"
      />
      <p className="text-center" style={{ color: "#999", fontSize: "0.85rem", marginTop: "-1rem" }}>
        (my good friend{" "}
        <a
          href="https://rickbo.one/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rick
        </a>{" "}
        and me)
      </p>

      <p>
        At the event, there was a lovely taco buffet... except there was also
        lobster on the menu, which as a lobster, I found a little insensitive
        (and delicious).
      </p>

      <p>
        Around every corner was another person excited to get a photo with "Mr.
        Claw". There's this warm and fuzzy feeling you get when you see grown
        adults get excited to take a photo with a person in a costume — a lovely
        reminder that there's still a sense of whimsy left in everyone's hearts
        that gets excited about the weird and unexpected.
      </p>

      <p>
        At some point in the evening I was pulled into an{" "}
        <a
          href="https://www.facebook.com/61575355315138/videos/we-stopped-by-clawcon-at-sxsw-to-ask-ai-optimists-about-the-future-of-ai-opencla/2396541617473230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          interview
        </a>{" "}
        to give my thoughts on the prevalence of AI and its impact on job
        displacement (for more of my thoughts on this, read{" "}
        <Link to="/blog/posts/ai-and-jobs">
          AI governance &amp; threading the needle of progress
        </Link>
        ).
      </p>

      <img
        src={`${IMG}/AE15DA5A-F421-4CC6-822F-5EFD42299A31.png`}
        alt="Being interviewed at ClawCon about AI"
        className="w-full rounded-sm my-6"
      />
      <p className="text-center" style={{ color: "#999", fontSize: "0.85rem", marginTop: "-1rem" }}>
        Mid-interview — hard to gesticulate with claws
      </p>

      <p>
        After the event, on my walk home down Brazos St. I was stopped another
        dozen times or so for more photos. Among those who asked ranged from a
        bride-to-be on a pub cycle, to a random swath of people suffering in an
        eternal line to see a SXSW movie premiere. There was also a group of
        girls on their way to go clubbing who were members of the 'Rock Lobster
        Music Club' at their university and were stoked to find their mascot in
        the wild.
      </p>

      <p>
        My exit was well-timed, because by the time I made it home the fan
        keeping the costume inflated had died. I was ready to shed my
        exoskeleton — the costume was boiling hot on the inside. It was an
        evening full of whimsy and delight, and I'm glad to have met so many
        amazing entrepreneurs, OpenClaw enthusiasts, and interesting people. It
        felt like I made the event a little brighter for everyone else as well —
        I must have had 100 people ask to take photos of the lobster throughout
        the night. If you see photos of the event out in the wild, look for the
        giant 8-foot-tall lobster in the background and you'll know it was me!
      </p>

      <p>
        Life's too short to blend in. Be a little weird.
      </p>

      <p>Other photos from the event:</p>

      <div className="grid grid-cols-3 gap-3 my-6">
        <img
          src={`${IMG}/PXL_20260313_012907302.MP.jpg`}
          alt="More photos from ClawCon"
          className="w-full h-full object-cover rounded-sm"
        />
        <img
          src={`${IMG}/IMG_4870.png`}
          alt="More photos from ClawCon"
          className="w-full h-full object-cover rounded-sm"
        />
        <img
          src={`${IMG}/PXL_20260313_005615704.MP.jpg`}
          alt="More photos from ClawCon"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
    </article>
  );
}
