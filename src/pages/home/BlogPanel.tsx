import { Typography } from "@/components/ui/typography";
// import { ShortBlogPostPreview } from "../blog/ShortPreview";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CIRCLE_DIAMETER } from "../blog/config";
import { BlogCategoriesScroller } from "../blog/BlogCategoriesScroller";
import { PlusCircleButton } from "../blog/PlusCircleButton";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "@/hooks/use-breakpoint";

gsap.registerPlugin(ScrollTrigger);

function BlogPanel() {
  const navigate = useNavigate();
  const tl = gsap.timeline();
  const { atLeast } = useBreakpoint();
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

      gsap
        .to("#chris-label", {
          duration: 0.5,
          opacity: 1,
          delay: 0.25,
          ease: "power2.inOut",
        })
        .then(() => {
          navigate("/blog")
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
  };

  return (
    <div
      id="blog-panel"
      className="absolute top-0 right-0 h-full w-full p-12 bg-[#060610] text-white border border-white/10"
      style={{
        borderRadius: atLeast.md ? `16px ${CIRCLE_DIAMETER / 2}px 16px 16px` : `${CIRCLE_DIAMETER / 2}px 16px ${CIRCLE_DIAMETER / 2}px 16px`,
      }}
      // onMouseMove={handleMouseMove}
    >
      <div className="flex justify-between items-center relative w-full h-12 ">
        <Typography
          id="blog-label"
          className="z-50 absolute top-0 left-0"
          variant={atLeast.md ? "h2" : "h3"}
        >
          BLOG
        </Typography>
        <Typography
          id="chris-label"
          className="z-50 font-light absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
          variant="p"
          style={{
            letterSpacing: "-0.7px",
          }}
        >
          chris porter
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
      <BlogCategoriesScroller interactive={expanded} />
    </div>
  );
}

export { BlogPanel };
