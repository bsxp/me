import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TITLE = "Hearth — Using urban data to reshape cities";
const WORDS = TITLE.split(" ");
const CHARS = TITLE.split("");

export function TestPage() {
  return (
    <div className="w-full">
      <AnimSection title="1. Fade Up (word by word)" Animation={FadeUpWords} />
      <AnimSection title="2. Fade Up (char by char)" Animation={FadeUpChars} />
      <AnimSection title="3. Slide In From Left" Animation={SlideInLeft} />
      <AnimSection title="4. Typewriter" Animation={Typewriter} />
      <AnimSection title="5. Clip Reveal (bottom to top)" Animation={ClipReveal} />
      <AnimSection title="6. Stagger Lines" Animation={StaggerLines} />
      <AnimSection title="7. Split & Converge" Animation={SplitConverge} />
      <AnimSection title="8. Rotate In" Animation={RotateIn} />
      <AnimSection title="9. Elastic Drop" Animation={ElasticDrop} />
      <AnimSection title="10. Fade Down (word by word)" Animation={FadeDownWords} />
      <AnimSection title="11. Counter Slide (alternating lines)" Animation={CounterSlide} />
      <AnimSection title="12. Mask Wipe (left to right)" Animation={MaskWipe} />
    </div>
  );
}

function AnimSection({
  title,
  Animation,
}: {
  title: string;
  Animation: React.FC;
}) {
  return (
    <div
      className="relative w-full flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a", height: "100vh" }}
    >
      <div className="absolute top-6 left-8 z-20">
        <span
          className="font-[Inter] text-xs font-normal lowercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ color: "#fff", border: "1px solid #333" }}
        >
          {title}
        </span>
      </div>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12 w-full">
        <Animation />
      </div>
    </div>
  );
}

/* ─── 1. Fade Up Words ─── */
function FadeUpWords() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.from(words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {WORDS.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 2. Fade Up Chars ─── */
function FadeUpChars() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const chars = ref.current?.querySelectorAll(".char");
    if (!chars) return;
    gsap.from(chars, {
      yPercent: 120,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {CHARS.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="char inline-block">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 3. Slide In From Left ─── */
function SlideInLeft() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.from(words, {
      xPercent: -80,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {WORDS.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 4. Typewriter ─── */
function Typewriter() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const chars = ref.current?.querySelectorAll(".char");
    if (!chars) return;
    gsap.from(chars, {
      opacity: 0,
      duration: 0.03,
      stagger: 0.04,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {CHARS.map((char, i) => (
        <span key={i} className="char">{char === " " ? "\u00A0" : char}</span>
      ))}
      <span className="inline-block w-[3px] h-[1em] bg-white/60 ml-1 animate-pulse align-baseline" />
    </h2>
  );
}

/* ─── 5. Clip Reveal (bottom to top) ─── */
function ClipReveal() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <h2
      ref={ref}
      className="font-[Inter] font-bold leading-[1.05] tracking-tight"
      style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", clipPath: "inset(0% 0% 0% 0%)" }}
    >
      {TITLE}
    </h2>
  );
}

/* ─── 6. Stagger Lines ─── */
function StaggerLines() {
  const ref = useRef<HTMLDivElement>(null);
  const line1 = "Hearth — Using urban";
  const line2 = "data to reshape cities";

  useGSAP(() => {
    const lines = ref.current?.querySelectorAll(".line");
    if (!lines) return;
    gsap.from(lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      {[line1, line2].map((line, i) => (
        <div key={i} className="overflow-hidden">
          <h2
            className="line font-[Inter] font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}
          >
            {line}
          </h2>
        </div>
      ))}
    </div>
  );
}

/* ─── 7. Split & Converge ─── */
function SplitConverge() {
  const ref = useRef<HTMLDivElement>(null);
  const line1 = "Hearth — Using urban";
  const line2 = "data to reshape cities";

  useGSAP(() => {
    const lines = ref.current?.querySelectorAll(".line");
    if (!lines || lines.length < 2) return;
    gsap.from(lines[0], {
      xPercent: -60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
    gsap.from(lines[1], {
      xPercent: 60,
      opacity: 0,
      duration: 0.9,
      delay: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      {[line1, line2].map((line, i) => (
        <div key={i} className="overflow-hidden">
          <h2
            className="line font-[Inter] font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}
          >
            {line}
          </h2>
        </div>
      ))}
    </div>
  );
}

/* ─── 8. Rotate In ─── */
function RotateIn() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.from(words, {
      rotateX: 90,
      yPercent: 50,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.07,
      transformOrigin: "bottom center",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", perspective: "800px" }}>
      {WORDS.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]" style={{ perspective: "800px" }}>
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 9. Elastic Drop ─── */
function ElasticDrop() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.from(words, {
      yPercent: -150,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)",
      stagger: 0.1,
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {WORDS.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 10. Fade Down (word by word) ─── */
function FadeDownWords() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.from(words, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <h2 ref={ref} className="font-[Inter] font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}>
      {WORDS.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* ─── 11. Counter Slide (alternating lines) ─── */
function CounterSlide() {
  const ref = useRef<HTMLDivElement>(null);
  const line1 = "Hearth — Using urban";
  const line2 = "data to reshape cities";

  useGSAP(() => {
    const lines = ref.current?.querySelectorAll(".line");
    if (!lines || lines.length < 2) return;
    gsap.from(lines[0], {
      xPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
    gsap.from(lines[1], {
      xPercent: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      {[line1, line2].map((line, i) => (
        <div key={i} className="overflow-hidden">
          <h2
            className="line font-[Inter] font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff" }}
          >
            {line}
          </h2>
        </div>
      ))}
    </div>
  );
}

/* ─── 12. Mask Wipe (left to right) ─── */
function MaskWipe() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      clipPath: "inset(0% 100% 0% 0%)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <h2
      ref={ref}
      className="font-[Inter] font-bold leading-[1.05] tracking-tight"
      style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", clipPath: "inset(0% 0% 0% 0%)" }}
    >
      {TITLE}
    </h2>
  );
}
