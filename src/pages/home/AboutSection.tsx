import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ChrisCoffee from "@/assets/chris-coffee.png";
import AboutLeadenhall from "@/assets/about-leadenhall.png";
import AboutPragueTram from "@/assets/about-prague-tram.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pin the about section for extra scroll buffer
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400",
        pin: true,
        pinSpacing: true,
      });


      gsap.from(".about-line", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          once: true,
        },
      });

      gsap.from(".about-image", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          once: true,
        },
      });

      gsap.from("#about-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen"
      style={{ backgroundColor: "#fafafa", padding: 16 }}
    >
      {/* Header: "chris." + full-width line */}
      <p
        className="font-[Inter] text-sm font-normal no-underline"
        style={{ color: "#1a1a1a", marginBottom: 8 }}
      >
        chris.
      </p>
      <div className="about-line w-full h-px" style={{ backgroundColor: "#d0d0d0", marginBottom: 16 }} />

      {/* 5-column grid filling the remaining height */}
      <div
        id="about-grid"
        className="grid grid-cols-1 lg:grid-cols-5 gap-2"
        style={{ height: "calc(100% - 52px - 16px - 1px)" }}
      >
          {/* Columns 1-2: full-height image */}
          <img
            src={AboutLeadenhall}
            alt="Leadenhall Market"
            className="about-image lg:col-span-2 h-full rounded-sm min-h-[200px] object-cover w-full"
          />

          {/* Column 3: two stacked vertical images */}
          <div className="lg:col-span-1 flex flex-col gap-2 min-h-[200px]">
            <img
              src={ChrisCoffee}
              alt="Chris at a coffee shop"
              className="about-image flex-1 rounded-sm object-cover min-h-0"
            />
            <img
              src={AboutPragueTram}
              alt="Prague tram"
              className="about-image flex-1 rounded-sm object-cover min-h-0"
            />
          </div>

          {/* Columns 4-5: text content */}
          <div
            id="about-text"
            className="lg:col-span-2 flex flex-col justify-between py-2 lg:pl-6"
          >
            <div />

            {/* Headline + body text at bottom */}
            <div>
              <h2
                className="font-['Bebas_Neue'] font-normal uppercase leading-[0.95] tracking-tight mb-4"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  color: "#1a1a1a",
                }}
              >
                We can pave the future we want.
                <br />
                <span className="text-[#b9c6ca]">I build to make dreams come alive.</span>
              </h2>
              <p
                className="font-['Space_Mono'] text-sm font-normal leading-relaxed"
                style={{
                  color: "#1a1a1a",
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
              <div className="flex flex-col gap-2 mt-8">
                <ContactLink href="mailto:hi@chrisporter.org" label="Email" slug="hi@chrisporter.org" />
                <ContactLink href="https://linkedin.com/in/chris-porterwa" label="LinkedIn" slug="chris-porterwa" external />
                <ContactLink href="https://github.com/bsxp" label="GitHub" slug="bsxp" external />
                <span
                  className="font-['Space_Mono'] text-xs"
                  style={{ color: "#999" }}
                >
                  X / Twitter — nope, don't have it
                </span>
                <span
                  className="font-['Space_Mono'] text-xs"
                  style={{ color: "#999" }}
                >
                  My Site — you're already here, silly
                </span>
              </div>
            </div>
          </div>
      </div>

      {/* Bottom line */}
      <div className="about-line w-full h-px" style={{ backgroundColor: "#d0d0d0", marginTop: 16 }} />
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
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group font-['Space_Mono'] text-xs no-underline transition-opacity hover:opacity-70 flex items-center gap-2"
      style={{ color: "#1a1a1a" }}
    >
      <span className="underline underline-offset-2">{label}</span>
      <span
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: "#999", textDecoration: "none" }}
      >
        — {slug}
      </span>
    </a>
  );
}
