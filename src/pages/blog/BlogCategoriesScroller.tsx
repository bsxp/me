import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import {
  BLOG_CATEGORIES,
  GAP_Y,
  SCROLL_HEIGHT,
  START_Y,
} from "./config";
import { BlogCategoryChip } from "./BlogCategoryChip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Rotate an array by n positions
function rotateArray<T>(arr: T[], n: number): T[] {
  const len = arr.length;
  const offset = ((n % len) + len) % len; // Handle negative indices
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

interface BlogCategoriesScrollerProps {
  interactive: boolean;
  initialOpacity?: number;
  /** Starting index in the carousel (0-based, based on BLOG_CATEGORIES order) */
  startIndex?: number;
}

function BlogCategoriesScroller({ interactive, initialOpacity = 0.0001, startIndex = 0 }: BlogCategoriesScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotate categories to start at the desired index
  const categories = useMemo(() => rotateArray(BLOG_CATEGORIES, startIndex), [startIndex]);
  const categoriesFull = useMemo(() => {
    // Rebuild BLOG_CATEGORIES_FULL with the rotated base array
    return [...new Array(2).fill(categories).flat(), categories[0], categories[1]];
  }, [categories]);

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

      for (let i = 0; i < categoriesFull.length - 2; i++) {
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
        if (i === categoriesFull.length - 3) {
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
          { opacity: 1, y: START_Y + 2 * GAP_Y, pointerEvents: "auto" },
          {
            opacity: 0,
            y: Math.max(6, i + 3) * GAP_Y + START_Y, // min (4 * gap y)
            duration: 1,
            pointerEvents: "none",
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
    { scope: containerRef?.current ?? undefined, dependencies: [categoriesFull] }
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
          category={categories[0]}
          index={0}
          style={{ zIndex: 50 }}
        />

        <BlogCategoryChip
          category={categories[1]}
          index={1}
          style={{ zIndex: 40 }}
        />

        <BlogCategoryChip
          category={categories[2]}
          index={2}
          style={{ zIndex: 30 }}
        />
        {categoriesFull.slice(3, categoriesFull.length).map(
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
          category={categories[2]}
          index={0}
          idOverride="extra-category"
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}

export { BlogCategoriesScroller };
