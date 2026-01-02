import { useGSAP } from "@gsap/react";
import { forwardRef, useLayoutEffect, useState } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: string;
  title: string;
  element: Element | HTMLElement;
  contentHeight: number;
};

type TableOfContentsProps = {
  bodyRef: RefObject<HTMLDivElement | null>;
};

const TableOfContents = forwardRef<HTMLDivElement, TableOfContentsProps>(
  function TableOfContents({ bodyRef }, ref) {
    const [sections, setSections] = useState<Section[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

    useGSAP(() => {
      const lastSectionId = sections[sections.length - 1]?.id;

      // As the user scrolls through the body, we should "grow" the line below the current section
      // in accordance with how far they've scrolled
      //
      // Additionally, the section that the user is currently viewing should be made bold

      for (const section of sections) {
        const isLastSection = section.id === lastSectionId;
        // As the user scrolls into view of the section, we should "grow" the line below it in the table of contents
        const sectionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section.element,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        });

        // Expand the line as we scroll through the section
        sectionTimeline.fromTo(
          `#table-of-contents-line-${section.id}`,
          {
            width: 0,
          },
          {
            width: "100%",
            duration: section.contentHeight,
            ease: "linear",
          },
          "0"
        );

        // Fade out the section's line as we progress to the next section
        sectionTimeline.fromTo(
          `#table-of-contents-line-${section.id}`,
          {
            opacity: 1,
          },
          {
            opacity: isLastSection && activeSectionId === lastSectionId ? 1 : 0,
            ease: "power2.inout",
          },
          !isLastSection ? "bottom-=1 bottom" : "bottom 60%"
        );

        // Highlight the active section in the table of contents when the user is on it
        // When the user enters the section, animate the highlight expanding
        ScrollTrigger.create({
          trigger: section.element,
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => {
            setActiveSectionId(section.id);
            gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
              width: "100%",
              duration: 0.4,
              ease: "power2.inOut",
            });
          },
          onEnterBack: () => {
            setActiveSectionId(section.id);
            gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
              width: "100%",
              duration: 0.4,
              ease: "power2.inOut",
            });
          },
          onLeave: () => {
            if (section.id === lastSectionId) {
              setActiveSectionId(section.id);
              gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
                width: "100%",
                duration: 0.2,
                ease: "power2.inOut",
              });
            } else {
              setActiveSectionId((prev) => (prev === section.id ? null : prev));
              gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
                width: 0,
                duration: 0.2,
                ease: "power2.inOut",
              });
            }
          },
          onLeaveBack: () => {
            if (section.id === lastSectionId) {
              setActiveSectionId(section.id);
              gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
                width: "100%",
                duration: 0.2,
                ease: "power2.inOut",
              });
            } else {
              setActiveSectionId((prev) => (prev === section.id ? null : prev));
              gsap.to(`#table-of-contents-line-highlight-${section.id}`, {
                width: 0,
                duration: 0.2,
                ease: "power2.inOut",
              });
            }
          },
        });
      }
    }, [sections, activeSectionId]);

    useLayoutEffect(() => {
      const bodyEl = bodyRef.current;
      if (!bodyEl) {
        setSections([]);
        return;
      }

      // Find all top-level <section> elements inside the body (do not recurse)
      const sectionElements = Array.from(
        bodyEl.querySelectorAll(":scope > section")
      );

      // For each <section>, find its first heading and calculate the height of the whole section
      const nextSections = sectionElements.map((sectionEl, index) => {
        // Find first heading (h1-h6) directly inside section, or nested inside
        const heading = sectionEl.querySelector("h1, h2, h3, h4, h5, h6");
        const title = heading?.textContent?.trim() ?? `Untitled section`;

        // Calculate the height of the entire <section> (including content)
        const contentHeight = sectionEl.getBoundingClientRect().height;

        // Use the id of the section or generate one
        // If <section id=""> exists, use that, else fallback to index
        const id = sectionEl.id ? sectionEl.id : `section-${index}`;

        return {
          id,
          element: sectionEl,
          title,
          contentHeight,
        };
      });

      setSections(nextSections);
    }, [bodyRef]);

    return (
      <div ref={ref}>
        <p className="text-sm font-semibold text-gray-800 mb-3">
          Table of contents
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          {sections.length === 0 && (
            <li className="text-gray-500">No headings found yet.</li>
          )}
          {sections.map((section) => (
            <li key={section.id || section.title} className="relative">
              <a
                href={section.id ? `#${section.id}` : undefined}
                className="hover:text-sky-700 inline-block relative"
              >
                <span className="relative z-10">{section.title}</span>
                {activeSectionId === section.id && (
                  <div
                    className="absolute left-0.5 bottom-0 h-3 bg-amber-300/60 z-0"
                    id={`table-of-contents-line-highlight-${section.id}`}
                  />
                )}
                <div
                  className="absolute left-0 bottom-0 h-px bg-gray-400"
                  id={`table-of-contents-line-${section.id}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export { TableOfContents };
