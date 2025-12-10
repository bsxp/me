import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORIES_FULL,
  GAP_Y,
  SCROLL_HEIGHT,
  START_Y,
} from "./config";
import { BlogCategoryChip } from "./BlogCategoryChip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function BlogCategoriesScroller({ interactive, initialOpacity = 0.0001 }: { interactive: boolean; initialOpacity?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      ScrollTrigger.normalizeScroll({
        target: "#categories-scroller",
        allowNestedScroll: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          // Use the actual scrollable container as the scroller
          scroller: "#categories-scroller",
          trigger: "#trigger-container",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          toggleActions: "play none none reverse",
          scrub: true,
          snap: "labelsDirectional",
          onLeave: (self) => {
            self.scroll(1);
            ScrollTrigger.update();
          },
          onLeaveBack: (self) => {
            self.scroll(ScrollTrigger.maxScroll(window) - 1);
            ScrollTrigger.update();
          },
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < BLOG_CATEGORIES_FULL.length - 2; i++) {
        if (i > 0) {
          // Move the previous last category up to the top for reuse
          tl.fromTo(
            `#category-${i - 1}`,
            {
              y: Math.max(6, i + 3) * GAP_Y, // min (4 * gap y)
            },
            {
              y: 0,
            }
          );
        }

        // on the last iteration, fade in a third just to help smooth the reset
        if (i === BLOG_CATEGORIES_FULL.length - 3) {
          tl.fromTo(
            `#extra-category`,
            { opacity: 0, scale: 0.7, y: START_Y },
            {
              opacity: 1,
              duration: 1,
              scale: 0.8,
            },
            `label-${i}`
          );
        }

        // Animate +0 furthest down fading out
        tl.fromTo(
          `#category-${i}`,
          { opacity: 1, y: START_Y + 2 * GAP_Y },
          {
            opacity: 0,
            y: Math.max(6, i + 3) * GAP_Y + START_Y, // min (4 * gap y)
            duration: 1,
          },
          `label-${i}`
        );

        // Animate +1, +2 following two coming down, growing
        // +1
        tl.fromTo(
          `#category-${i + 1}`,
          { opacity: 1, y: START_Y + GAP_Y - 2, scale: 0.9 },
          {
            opacity: 1,
            y: Math.min(2, i + 2) * GAP_Y + START_Y,
            scale: 1.0,
            duration: 1,
          },
          `label-${i}`
        );

        // +2
        tl.fromTo(
          `#category-${i + 2}`,
          { y: START_Y, scale: 0.8 },
          {
            y: GAP_Y + START_Y - 2,
            scale: 0.9,
            duration: 1,
          },
          `label-${i}`
        );

        // Animate +3 fading in where +2 was
        tl.fromTo(
          `#category-${i + 3}`,
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            duration: 1,
            scale: 0.8,
          },
          `label-${i}`
        )

          .add(`label-${i + 1}`)
          .add(() => {}, "+=1");
      }
    },
    { scope: containerRef?.current ?? undefined }
  );

  return (
    <div
      id="categories-scroller"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center overflow-scroll w-full h-full"
      style={{
        scrollbarWidth: "none",
        willChange: "transform, opacity",
        // height: 500,
        opacity: initialOpacity, // Not 0 so the calculations for placement can run before the animation starts
        pointerEvents: interactive ? "auto" : "none",
      }}
      ref={containerRef}
    >
      <div
        className="relative w-full"
        id="trigger-container"
        style={{ height: SCROLL_HEIGHT }}
      >
        <BlogCategoryChip
          category={BLOG_CATEGORIES[0]}
          index={0}
          style={{ zIndex: 50 }}
        />

        <BlogCategoryChip
          category={BLOG_CATEGORIES[1]}
          index={1}
          style={{ zIndex: 40 }}
        />

        <BlogCategoryChip
          category={BLOG_CATEGORIES[2]}
          index={2}
          style={{ zIndex: 30 }}
        />
        {BLOG_CATEGORIES_FULL.slice(3, BLOG_CATEGORIES_FULL.length).map(
          (category, index) => (
            <BlogCategoryChip
              key={index}
              category={category}
              index={index + 3}
              style={{ zIndex: 20 - index }}
            />
          )
        )}
        <BlogCategoryChip
          category={BLOG_CATEGORIES[2]}
          index={0}
          idOverride="extra-category"
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}

export { BlogCategoriesScroller };
