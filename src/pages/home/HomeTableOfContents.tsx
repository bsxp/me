import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MENU_ITEMS = [
  { id: "about", label: "About", scrollTo: "home-hero" },
  { id: "projects", label: "Projects", scrollTo: "home-work" },
  { id: "blog", label: "Blog", scrollTo: "home-blog" },
] as const;

// Maps each page section to which menu item it highlights
const SECTION_MAP = [
  { trigger: "home-hero", menuId: "about" },
  { trigger: "home-work", menuId: "projects" },
  { trigger: "home-blog", menuId: "blog" },
] as const;

function HomeTableOfContents() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const prevActiveRef = useRef<string | null>(null);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    scrollTo: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(scrollTo);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useGSAP(() => {
    const triggers: ScrollTrigger[] = [];

    const activate = (menuId: string) => {
      if (prevActiveRef.current === menuId) return;
      const prev = prevActiveRef.current;
      prevActiveRef.current = menuId;

      // Collapse previous highlight
      if (prev) {
        gsap.to(`#home-toc-hl-${prev}`, {
          width: 0,
          duration: 0.2,
          ease: "power2.inOut",
        });
      }

      // Expand new highlight
      gsap.fromTo(
        `#home-toc-hl-${menuId}`,
        { width: 0 },
        { width: "100%", duration: 0.4, ease: "power2.inOut" }
      );

      setActiveId(menuId);
      setIsDark(menuId === "blog");
    };

    // Create a ScrollTrigger for each page section
    for (const section of SECTION_MAP) {
      const trigger = ScrollTrigger.create({
        trigger: `#${section.trigger}`,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => activate(section.menuId),
        onEnterBack: () => activate(section.menuId),
      });
      triggers.push(trigger);
    }

    // Show TOC after hero scrolls away (same timing as navbar)
    gsap.fromTo(
      "#home-toc",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-hero",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => triggers.forEach((tr) => tr.kill());
  }, []);

  return (
    <div
      id="home-toc"
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[999] hidden lg:block"
      style={{ visibility: "hidden" }}
    >
      <ul
        className={`space-y-3 text-sm font-semibold transition-colors duration-500 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.scrollTo}`}
              onClick={(e) => handleClick(e, item.scrollTo)}
              className={`inline-block relative transition-colors duration-300 ${
                isDark ? "hover:text-white" : "hover:text-sky-700"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <div
                id={`home-toc-hl-${item.id}`}
                className="absolute left-0.5 bottom-0 h-3 bg-amber-300/60 z-0 transition-opacity duration-150"
                style={{
                  width: 0,
                  opacity: activeId === item.id ? 1 : 0,
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { HomeTableOfContents };
