import { Typography } from "@/components/ui/typography";
// import { ShortBlogPostPreview } from "../blog/ShortPreview";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PatternImage1 from "@/assets/pattern-1.jpg";
import PatternImage2 from "@/assets/pattern-2.jpg";
import PatternImage3 from "@/assets/pattern-3.jpg";
import PatternImage4 from "@/assets/pattern-4.jpg";

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
const START_Y = 50;
const GAP_Y = 30;
const BLOG_CATEGORIES_LENGTH = BLOG_CATEGORIES.length;
const SCROLL_HEIGHT = (BLOG_CATEGORIES_FULL.length - 2) * 500; // Adjust multiplier as needed

function BlogPanel() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleVisitPage = () => {
    const tl = gsap.timeline();

    // expand the blog panel to the size of the screen
    const screenViewWidth = window.visualViewport?.width ?? window.innerWidth;
    const screenViewHeight =
      window.visualViewport?.height ?? window.innerHeight;

    // Expand to the size of the screen
    tl.to("#blog-panel", {
      width: `${screenViewWidth - 32}px`,
      height: `${screenViewHeight - 32}px`,
      duration: 0.5,
      borderRadius: CIRCLE_DIAMETER / 2,
      ease: "power2.inOut",
      z: 100,
    }).then(() => setExpanded(true));

    gsap.to("#blog-panel", {
      borderColor: "transparent",
      duration: 0.5,
      delay: 0.25,
      ease: "power2.inOut",
    });

    // Flip the background color of the whole screen
    gsap.to("#root", {
      backgroundColor: "#060610",
      duration: 0.5,
      ease: "power2.inOut",
    });
    // Instead of using css calc() expressions for GSAP's x/y, use direct pixel values.
    // Get the actual widths/heights for precise transforms.

    const introPanel = document.getElementById("intro-panel-wrapper");
    const projectsPanel = document.getElementById("projects-panel-wrapper");
    const aboutPanel = document.getElementById("about-panel-wrapper");

    if (introPanel && projectsPanel && aboutPanel) {
      // Move introPanel and projectsPanel left by 2x width + 32px gap
      const panelWidth = introPanel.offsetWidth;
      const xOffset = -(2 * panelWidth + 32);

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

      // Move aboutPanel down by its height + 16px
      const aboutPanelHeight = aboutPanel.offsetHeight;
      gsap.to(aboutPanel, {
        y: aboutPanelHeight + 16,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      id="blog-panel"
      className="absolute top-0 right-0 h-full w-full p-12 space-y-4 bg-[#060610] text-white border border-white"
      style={{
        borderRadius: `16px ${CIRCLE_DIAMETER / 2}px 16px 16px`,
      }}
      // onMouseMove={handleMouseMove}
    >
      <div className="flex justify-between items-center">
        <Typography className="z-50" variant="h2">
          BLOG
        </Typography>
        <PlusCircleButton handleClick={handleVisitPage} />
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
      <Categories />
    </div>
  );
}

function PlusCircleButton({ handleClick }: { handleClick: () => void }) {
  return (
    <div
      className="cursor-pointer rounded-full bg-transparent hover:bg-white/10 p-2 group"
      onClick={handleClick}
    >
      <Plus className="size-8 text-white duration-300 ease-in-out transform-[rotate(0deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]" />
    </div>
  );
}

function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
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
          markers: true,
          onLeave: (self) => {
            self.scroll(1);
            ScrollTrigger.update();
          },
          onLeaveBack: (self) => {
            self.scroll(ScrollTrigger.maxScroll(window) - 1);
            ScrollTrigger.update();
          },
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

  const LETTER_SPACING = "-1.75px";

  return (
    <div
      id="categories-scroller"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-80 overflow-scroll bg-red-200/50"
      style={{
        scrollbarWidth: "none",
        willChange: "transform",
        height: 300,
      }}
      ref={containerRef}
    >
      <div
        className="relative w-full bg-blue-500/20"
        id="trigger-container"
        style={{ height: SCROLL_HEIGHT }}
      >
        <div
          id="category-0"
          className="absolute left-1/2 -translate-x-1/2 h-32 w-80  rounded-full flex justify-center items-center font-medium text-3xl z-50 "
          style={{
            backgroundImage: `url(${BLOG_CATEGORIES[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: BLOG_CATEGORIES[0].textColor,
            letterSpacing: LETTER_SPACING,
          }}
        >
          {BLOG_CATEGORIES[0].label}
        </div>
        <div
          id="category-1"
          className="absolute left-1/2 -translate-x-1/2 h-32 w-80  rounded-full flex justify-center items-center font-medium text-3xl z-40"
          style={{
            backgroundImage: `url(${BLOG_CATEGORIES[1].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: BLOG_CATEGORIES[1].textColor,
            letterSpacing: LETTER_SPACING,
          }}
        >
          {BLOG_CATEGORIES[1].label}
        </div>
        <div
          id="category-2"
          className="absolute left-1/2 -translate-x-1/2 h-32 w-80 rounded-full flex justify-center items-center font-medium text-3xl z-30"
          style={{
            backgroundImage: `url(${BLOG_CATEGORIES[2].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: BLOG_CATEGORIES[2].textColor,
            letterSpacing: LETTER_SPACING,
          }}
        >
          {BLOG_CATEGORIES[2].label}
        </div>
        {BLOG_CATEGORIES_FULL.slice(3, BLOG_CATEGORIES_FULL.length).map(
          (category, index) => (
            <div
              key={index}
              id={`category-${index + 3}`}
              className={`absolute left-1/2 -translate-x-1/2 h-32 w-80 rounded-full flex justify-center items-center font-medium text-3xl`}
              style={{
                // opacity: 0,
                // transform: "scale(0.8)",
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 20 - index,
                color: category.textColor,
                letterSpacing: LETTER_SPACING,
              }}
            >
              {category.label}
            </div>
          )
        )}
        <div
          id="extra-category"
          className="absolute left-1/2 -translate-x-1/2 h-32 w-80  rounded-full flex justify-center items-center font-medium text-3xl z-0"
          style={{
            // opacity: 0,
            backgroundImage: `url(${BLOG_CATEGORIES[2].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: BLOG_CATEGORIES[2].textColor,
            letterSpacing: LETTER_SPACING,
          }}
        >
          {BLOG_CATEGORIES_FULL[2].label}
        </div>
      </div>
    </div>
  );
}

export { BlogPanel };
