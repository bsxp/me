import { useState } from "react";
import { Link } from "react-router-dom";
import ChrisCoffee from "@/assets/chris-coffee.webp";
import AboutLeadenhall from "@/assets/about-leadenhall.webp";
import AboutPragueTram from "@/assets/about-prague-tram.webp";

export function AboutOverlay() {
  const [expandedImage, setExpandedImage] = useState(0);

  return (
    <div
      id="about-overlay"
      className="absolute inset-0 z-20 pointer-events-none"
      style={{ opacity: 0, padding: 16 }}
    >
      <div id="about-inner" className="pointer-events-none h-full flex flex-col">
        {/* Target row for where "chris." and nav links animate to */}
        <div className="flex items-start justify-between" style={{ marginBottom: 8 }}>
          <div id="about-logo-target" className="font-[Inter] text-sm" style={{ color: "transparent" }}>chris.</div>
          <div id="about-nav-target" className="font-[Inter] text-sm" style={{ color: "transparent" }}>Contact</div>
        </div>
        <div id="about-line-top" className="about-line w-full h-px" style={{ backgroundColor: "var(--color-line-strong)", marginBottom: 16, opacity: 0 }} />

        {/* 5-column grid filling the remaining height */}
        <div
          id="about-grid"
          className="grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] lg:grid-cols-5 lg:grid-rows-1 gap-2 flex-1 min-h-0"
        >
          {/* Mobile accordion images — sized off the viewport so the text
              below still fits on shorter phones */}
          <div className="lg:hidden flex flex-col gap-1" style={{ height: "clamp(140px, 24svh, 360px)" }}>
            {[
              { src: AboutLeadenhall, alt: "Leadenhall Market" },
              { src: ChrisCoffee, alt: "Chris at a coffee shop" },
              { src: AboutPragueTram, alt: "Prague tram" },
            ].map((img, i) => (
              <div
                key={i}
                className="about-image overflow-hidden rounded-sm cursor-pointer"
                style={{
                  flex: expandedImage === i ? 4 : 1,
                  transition: "flex 0.4s ease-in-out",
                  opacity: 0,
                  minHeight: 0,
                }}
                onClick={() => setExpandedImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop: columns 1-2 full-height image */}
          <img
            src={AboutLeadenhall}
            alt="Leadenhall Market"
            className="about-image-desktop hidden lg:block lg:col-span-2 h-full rounded-sm min-h-[200px] object-cover w-full"
            style={{ opacity: 0 }}
          />

          {/* Desktop: column 3 two stacked vertical images */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-2 min-h-[200px]">
            <img
              src={ChrisCoffee}
              alt="Chris at a coffee shop"
              className="about-image-desktop flex-1 rounded-sm object-cover min-h-0"
              style={{ opacity: 0 }}
            />
            <img
              src={AboutPragueTram}
              alt="Prague tram"
              className="about-image-desktop flex-1 rounded-sm object-cover min-h-0"
              style={{ opacity: 0 }}
            />
          </div>

          {/* Columns 4-5: text content */}
          <div
            id="about-text"
            className="lg:col-span-2 flex flex-col justify-between py-1 lg:py-2 lg:pl-6 min-h-0 overflow-y-auto lg:overflow-visible"
            style={{ opacity: 0 }}
          >
            <div />

            {/* Headline + body text at bottom */}
            <div>
              <h2
                className="font-['Bebas_Neue'] font-normal uppercase leading-[0.95] tracking-tight mb-3 sm:mb-4"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-ink)",
                }}
              >
                We can pave the future we want.
                <br />
                <span className="text-mist">I build to make dreams come alive.</span>
              </h2>
              <p
                className="font-['Space_Mono'] text-[13px] sm:text-sm font-normal leading-relaxed"
                style={{
                  color: "var(--color-ink)",
                }}
              >
                I'm an engineer, urbanist, and former entrepreneur based in Austin, TX.
                My career spans from taking startups from 0 to 1, to scaling teams and infrastructure to power multi-million dollar businesses.
                Each project I work on is a reflection of someone's vision to make the world a better place, whether that be my own or someone else's.
                <br/><br/>
                From data to design, front-end to back-end — I connect the dots between building things and understanding why they matter.
                <br /><br />
                I believe software is the most powerful vector to realize the value of good ideas; an empty file is a blank canvas on which we paint brighter futures.
              </p>
              <div className="flex flex-col gap-2 mt-5 sm:mt-8">
                {/* One row on phones to save vertical space; stacked from sm up
                    where there's room for the hover slugs */}
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 sm:flex-col">
                  <ContactLink href="/contact" label="Email" slug="hi@chrisporter.org" />
                  <ContactLink href="https://linkedin.com/in/chris-porterwa" label="LinkedIn" slug="chris-porterwa" external />
                  <ContactLink href="https://github.com/bsxp" label="GitHub" slug="bsxp" external />
                </div>
                <span
                  className="font-['Space_Mono'] text-xs"
                  style={{ color: "var(--color-faint)" }}
                >
                  X / Twitter — nope, don't have it
                </span>
                <span
                  className="font-['Space_Mono'] text-xs"
                  style={{ color: "var(--color-faint)" }}
                >
                  My Site — you're already here, silly
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="about-line w-full h-px" style={{ backgroundColor: "var(--color-line-strong)", marginTop: 16, opacity: 0 }} />
      </div>
    </div>
  );
}

function ContactLink({
  href,
  label,
  slug,
  external,
}: {
  href: string;
  label: string;
  slug: string;
  external?: boolean;
}) {
  const className =
    "group font-['Space_Mono'] text-xs no-underline transition-opacity hover:opacity-70 flex items-center gap-2";
  const content = (
    <>
      <span className="underline underline-offset-2">{label}</span>
      <span
        className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: "var(--color-faint)", textDecoration: "none" }}
      >
        — {slug}
      </span>
    </>
  );

  // Internal links go through the router so they don't trigger a full reload
  if (!external) {
    return (
      <Link to={href} className={className} style={{ color: "var(--color-ink)" }}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={{ color: "var(--color-ink)" }}>
      {content}
    </a>
  );
}
