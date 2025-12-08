import { Typography } from "@/components/ui/typography";
// import { ShortBlogPostPreview } from "../blog/ShortPreview";
import { useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import PatternImage1 from "@/assets/pattern-1.jpg";
import PatternImage2 from "@/assets/pattern-2.jpg";
import PatternImage3 from "@/assets/pattern-3.jpg";
import PatternImage4 from "@/assets/pattern-4.jpg";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CIRCLE_DIAMETER = 120;

const BLOG_CATEGORIES = [
  {
    label: "Urbanism",
    image: PatternImage1,
    textColor: "black",
  },
  {
    label: "Travel",
    image: PatternImage2,
    textColor: "white",
  },
  {
    label: "Engineering",
    image: PatternImage3,
    textColor: "white",
  },
  {
    label: "Design",
    image: PatternImage4,
    textColor: "white",
  },
];

// Make it 3x longer
const BLOG_CATEGORIES_FULL = [
  ...new Array(2).fill(BLOG_CATEGORIES).flat(),
  BLOG_CATEGORIES[0],
  BLOG_CATEGORIES[1],
];
const START_Y = 300;
const GAP_Y = 30;
const SCROLL_HEIGHT = (BLOG_CATEGORIES_FULL.length - 2) * 500; // Adjust multiplier as needed
const CHIP_HEIGHT = 200;
const CHIP_WIDTH = 500;
const LETTER_SPACING = "-1.75px";

const SHARED_CHIP_CLASSES =
  "flex justify-center items-center font-medium text-3xl cursor-pointer hover:brightness-80";

function BlogPanel() {
  const tl = gsap.timeline();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleBlogPanel = () => {
    const screenViewWidth = window.visualViewport?.width ?? window.innerWidth;
    const screenViewHeight =
      window.visualViewport?.height ?? window.innerHeight;

    const introPanel = document.getElementById("intro-panel-wrapper");
    const projectsPanel = document.getElementById("projects-panel-wrapper");
    const aboutPanel = document.getElementById("about-panel-wrapper");

    if (!expanded) {
      // OPEN: play the animation forward
      tl.to("#blog-panel", {
        width: `${screenViewWidth - 32}px`,
        height: `${screenViewHeight - 32}px`,
        duration: 0.5,
        borderRadius: CIRCLE_DIAMETER / 2,
        ease: "power2.inOut",
        paddingTop: 16,
        z: 100,
      });

      gsap.to("#blog-panel", {
        borderColor: "transparent",
        duration: 0.5,
        delay: 0.25,
        ease: "power2.inOut",
      });

      gsap.to("#categories-scroller", {
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
        ease: "power2.inOut",
      });

      gsap.to("#blog-label", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });

      gsap.to("#chris-label", {
        duration: 0.5,
        opacity: 1,
        delay: 0.25,
        ease: "power2.inOut",
      });

      gsap.to("#root", {
        backgroundColor: "#050509",
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (introPanel && projectsPanel && aboutPanel) {
        const panelWidth = introPanel.offsetWidth;
        const xOffset = -(2 * panelWidth + 32);
        const aboutPanelHeight = aboutPanel.offsetHeight;

        gsap.to(introPanel, {
          x: xOffset,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(projectsPanel, {
          x: xOffset,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(aboutPanel, {
          y: aboutPanelHeight + 16,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }

      setExpanded(true);
    } else {
      tl.to("#blog-panel", {
        width: "100%", // <-- your original width
        height: "100%", // <-- your original height
        duration: 0.5,
        borderRadius: `16px ${CIRCLE_DIAMETER / 2}px 16px 16px`,
        ease: "power2.inOut",
        paddingTop: 32,

        z: 0,
      });

      gsap.to("#blog-panel", {
        borderColor: "#fff/10", // original color
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to("#blog-label", {
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });

      gsap.to("#chris-label", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });

      gsap.to("#categories-scroller", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to("#root", {
        backgroundColor: "#e9f0f1", // original bg
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (introPanel && projectsPanel && aboutPanel) {
        gsap.to(introPanel, { x: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(projectsPanel, { x: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(aboutPanel, { y: 0, duration: 0.5, ease: "power2.inOut" });
      }

      setExpanded(false);
    }

    // tl.progress(1).progress(0);
  };

  return (
    <div
      id="blog-panel"
      className="absolute top-0 right-0 h-full w-full p-12 space-y-4 bg-[#060610] text-white border border-white/10"
      style={{
        borderRadius: `16px ${CIRCLE_DIAMETER / 2}px 16px 16px`,
      }}
    >
      <div className="flex justify-between items-center relative w-full h-12">
        <Typography
          id="blog-label"
          className="z-50 absolute top-0 left-0"
          variant="h2"
        >
          BLOG
        </Typography>
        <Typography
          id="chris-label"
          className="z-50 font-regular absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
          variant="p"
          style={{
            letterSpacing: "-0.7px",
          }}
        >
          Chris Porter
        </Typography>
        <PlusCircleButton
          handleClick={handleToggleBlogPanel}
          expanded={expanded}
        />
      </div>
      {/* <ShortBlogPostPreview
        title="How to build a human-centric city"
        date="2025-01-01"
        tags={["Technology", "Urban Planning", "Sustainability"]}
      />
      <ShortBlogPostPreview
        title="How to build a human-centric city"
        date="2025-01-01"
        tags={["Technology", "Urban Planning", "Sustainability", "Humanity"]}
      /> */}
      <Categories interactive={expanded} />
    </div>
  );
}

function PlusCircleButton({
  handleClick,
  expanded,
}: {
  handleClick: () => void;
  expanded: boolean;
}) {
  return (
    <div
      className="cursor-pointer rounded-full bg-transparent hover:bg-white/10 p-2 group absolute top-1/2 -translate-y-1/2 right-0 z-50"
      onClick={handleClick}
    >
      <div className="relative size-8">
        <Minus
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Positioning
            "size-8 text-white rotate-90", // Styling
            "duration-300 ease-in-out", // Animation
            expanded
              ? "transform-[rotate(90deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]" // Rotation
              : "transform-[rotate(180deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]"
          )}
        />
        <Minus
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Positioning
            "size-8 text-white", // Styling
            "duration-300 ease-in-out", // Animation
            expanded
              ? "transform-[rotate(0deg)_scale(1)] group-hover:transform-[rotate(0deg)_scale(1.2)]" // Rotation
              : "transform-[rotate(180deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]"
          )}
        />
      </div>
    </div>
  );
}

function Categories({ interactive }: { interactive: boolean }) {
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
          invalidateOnRefresh: true
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
          { opacity: 1, y: START_Y + GAP_Y, scale: 0.9 },
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
            y: GAP_Y + START_Y,
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
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center overflow-y-scrol overflow-x-visible w-full h-full"
      style={{
        scrollbarWidth: "none",
        willChange: "transform, opacity",
        // height: 500,
        opacity: 0.0001, // Not 0 so the calculations for placement can run before the animation starts
        pointerEvents: interactive ? "auto" : "none",
      }}
      ref={containerRef}
    >
      <div
        className="relative w-full"
        id="trigger-container"
        style={{ height: SCROLL_HEIGHT, backgroundColor: 'blue', }}
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

function BlogCategoryChip({
  category,
  index,
  idOverride,
  className,
  style = {},
}: {
  category: (typeof BLOG_CATEGORIES)[number];
  index: number;
  idOverride?: string;
  className?: string;
  style?: React.CSSProperties;
}) {

  const chipRef = useRef<HTMLDivElement>(null);

  const handleNavigate = () => {
    console.log(`/blog?category=${encodeURIComponent(category.label)}`);
    history.pushState(
      {},
      "Blog Category",
      `/blog?category=${encodeURIComponent(category.label)}`
    );
    handleElementClick();
  };

  const handleElementClick = () => {

    console.log('Animating element expanding');
    const tl = gsap.timeline();

    tl.to("#main-grid", {
      // top: '-16px',
      marginTop: 0,
      marginBottom: 32,
      duration: 0.5,
      ease: "power2.inOut",
    }, "0")

    tl.to(chipRef.current, {
      borderRadius: `0 0 16px 16px`,
      duration: 0.25,
      ease: "power2.inOut",
    }, "0")

    tl.to(chipRef.current, {
      top: '-32px',
      left: "50%",
      transform: "translateX(-50%)",
      width: '100svw',
      height: 140,
      duration: 0.5,
      ease: "power2.inOut",
    }, "0")
  }

  return (
    <div
      id={idOverride ?? `category-${index}`}
      ref={chipRef}
      className={cn(
        SHARED_CHIP_CLASSES,
        "absolute left-1/2 -translate-x-1/2",
        className
      )}
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: category.textColor,
        letterSpacing: LETTER_SPACING,
        height: CHIP_HEIGHT,
        width: CHIP_WIDTH,
        willChange: "top, left, width, height, transform, border-radius",
        borderRadius: CHIP_HEIGHT / 2,
        ...style,
      }}
      onClick={handleNavigate}
    >
      {category.label}
    </div>
  );
}

export { BlogPanel };
