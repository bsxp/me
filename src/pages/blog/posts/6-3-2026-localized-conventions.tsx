export const POST_META = {
  slug: "localized-conventions",
  title: "Teaching my Voice AI to say five-o-clock a dozen different ways",
  description:
    "Why voice agents need localized context to sound human, and how I built an open database to solve it.",
  tags: ["Voice AI", "Localization", "Open Source", "AI"],
  date: new Date(2026, 5, 3),
};

export default function LocalizedConventions() {
  return (
    <article>
      <p>
        A British listener hears "half eight" and thinks 8:30 PM. A German listener hearing the exact same English words thinks 7:30 PM.
      </p>

      <p>This is the problem:</p>
      <div className="bg-gray-50 border-l-4 border-gray-300 pl-4 py-3 my-6">
        <strong>today, voice agents don't intrinsically come with enough localized context to sound human.</strong>
      </div>

      <p>
        I discovered this discrepancy while tuning voice agents in four different languages: Portuguese, Spanish, English (American), English (British), and Norwegian. Each locality had its own nuanced pronunciation of sizes, currency, and even phone number rhythm.
      </p>

      <p>
        The underlying agents powering voices know grammar and can construct sentences, but they often don't know that an American says "five fifty" for $5.50 while a British person might say "five pounds and fifty pence" or "five quid." They don't know that "the third of June" is how you say June 3rd in London, while in New York you'd say "June third." They don't know that UK ground floor is US first floor. The agents are perfectly capable of making these parlance adjustments, but often need an opinionated input to get there.
      </p>

      <h2>The Same Time, A Dozen Ways</h2>

      <p>
        Take a single, boring moment on the clock—<strong>2:30 PM</strong>—and
        listen to how it actually comes out of a native speaker's mouth:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-6 space-y-2">
        <p className="m-0">
          🇺🇸{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/en/_base.yaml#L388"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>United States:</strong>
          </a>{" "}
          "two thirty"—or "half past two"
        </p>
        <p className="m-0">
          🇬🇧{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/en/en-GB.yaml#L24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>United Kingdom:</strong>
          </a>{" "}
          "half past two," and casually just "half two"
        </p>
        <p className="m-0">
          🇩🇪{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/de/_base.yaml#L360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Germany:</strong>
          </a>{" "}
          "halb drei"—literally <em>half three</em>, because German counts
          toward the <em>next</em> hour
        </p>
        <p className="m-0">
          🇲🇽{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/es/_base.yaml#L354"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Mexico:</strong>
          </a>{" "}
          "las dos y media"—literally <em>two and a half</em>
        </p>
        <p className="m-0">
          🇫🇷{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/fr/_base.yaml#L383"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>France:</strong>
          </a>{" "}
          "deux heures et demie"—literally <em>two hours and a half</em>
        </p>
        <p className="m-0">
          🇮🇹{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/it/_base.yaml#L446"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Italy:</strong>
          </a>{" "}
          "le due e mezzo"—literally <em>the two and a half</em>
        </p>
        <p className="m-0">
          🇧🇷{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/pt/_base.yaml#L329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Brazil:</strong>
          </a>{" "}
          "duas e meia"—literally <em>two and a half</em>
        </p>
        <p className="m-0">
          🇰🇷{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/ko/ko-KR.yaml#L27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>South Korea:</strong>
          </a>{" "}
          "두 시 반" (<em>du si ban</em>)—literally <em>two o'clock half</em>
        </p>
        <p className="m-0">
          🇯🇵{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/ja/_base.yaml#L400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Japan:</strong>
          </a>{" "}
          "二時三十分" (<em>ni-ji san-jū-pun</em>)—no shortcut; you say the full{" "}
          <em>two hour, thirty minutes</em>
        </p>
        <p className="m-0">
          🇨🇳{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/zh/_base.yaml#L364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>China:</strong>
          </a>{" "}
          "两点半" (<em>liǎng diǎn bàn</em>)—literally <em>two o'clock half</em>
        </p>
        <p className="m-0">
          🇳🇱{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/nl/nl-NL.yaml#L7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Netherlands:</strong>
          </a>{" "}
          "half drie"—literally <em>half three</em>, counting toward the{" "}
          <em>next</em> hour like German
        </p>
        <p className="m-0">
          🇷🇺{" "}
          <a
            href="https://github.com/bsxp/localized-conventions/blob/main/locales/ru/_base.yaml#L345"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Russia:</strong>
          </a>{" "}
          "половина третьего" (<em>polovina tret'evo</em>)—literally{" "}
          <em>half of the third</em>, also counting forward
        </p>
      </div>

      <p>
        Same instant in time. A dozen completely different sentences. And notice
        the trap in the German, Dutch, and Russian ones: "halb drei" sounds like
        it should mean 3:30 to an English speaker, but it's 2:30. That's the
        exact confusion from the top of this post—a German hearing "half eight"
        lands on 7:30, not 8:30, because "halb" points forward, not back. The
        Dutch do the same thing:{" "}
        <a
          href="https://github.com/bsxp/localized-conventions/blob/main/locales/nl/nl-NL.yaml#L7"
          target="_blank"
          rel="noopener noreferrer"
        >
          "half negen"
        </a>{" "}
        is 8:30, not 9:30.
      </p>

      <p>
        A voice agent that doesn't know this doesn't just sound a little off. It
        tells your customer the wrong time.
      </p>

      <h2>Why This Matters</h2>

      <p>
        Voice interfaces are one of the fastest-growing software interfaces. Dozens of voice-agent companies spring up every quarter, backed by venture money anywhere from seed to series. Everyone building these voice agents has to go through the same iterative process of tweaking the agents to speak the localized parlance, or make adjustments to meet the desired formality of their agent.
      </p>

      <p>
        These adjustments aren't just accents or inflections, but the fundamental conventions of how things are said. A voice agent trained on American English data will sound foreign in London. Not <em>wrong</em>, exactly—a British person will understand it—but like a non-native speaker, which ultimately erodes user trust.
      </p>

      <p>
        Discovery of the long-tail of these cases is hard—often as a result of negative feedback from customer calls. It's similar to the adage about OSHA: "The regulations are written in blood." If your agent is handling customer calls without sounding like it knows the language of your industry or region, some of the customers will be skeptical of the business' ability to deliver value. As such, every high quality voice agent has been built atop feedback loops where these minor corrections about language and convention have been finely tuned in response to negative customer signals.
      </p>

      <h2>The Solution</h2>

      <p>
        I built an open database of how things are spoken in different places. Not a translation service. Just a structured reference that documents the actual rules: in British English, £5.50 is "five fifty" (casual), "five pounds and fifty pence" (formal), or "five quid" (colloquial).
      </p>

      <p>
        It covers 13 languages and 33 regions. Originally generated by Haiku as a starting point, but I'd love for corrections and improvements to be made by people who are native to the regions and actually using it.
      </p>

      <h2>What's Next</h2>

      <p>
        The immediate roadmap: deepen existing languages, add more specialized categories (weather, navigation, finance, industry-specific conventions), and make it consumable as an npm package or API.
      </p>

      <p>
        But the bigger question is whether this model works. Do voice teams want a shared reference? Will they contribute improvements?
      </p>

      <h2>You Can Help</h2>

      <p>
        If you build voice agents, try using a locale from the repo in your system prompt. If you speak a language we're covering, review the conventions. If you speak a language we're not covering, adding a base and one region seeds the whole thing.
      </p>

      <p>
        The repo is public:{" "}
        <a
          href="https://github.com/bsxp/localized-conventions"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/bsxp/localized-conventions
        </a>
      </p>

      <p>
        Every voice interface that misses the mark on pronouncing the simple things makes people less likely to trust it. Every call that sounds native is one less barrier to adoption.
      </p>
    </article>
  );
}
