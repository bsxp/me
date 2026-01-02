import { Typography } from "@/components/ui/typography";
import { GRID_SPACING } from "./config";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { TextScramble } from "./TextScramble";
import { highlightItems, navigationItems } from "./MissionPanel";
import { useNavigate } from "react-router-dom";

function NavigationMenuItem({
  id,
  title,
  secondTitle,
  href,
}: {
  id: string;
  title: string;
  secondTitle?: string;
  href: string;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const scramblerRef = useRef<TextScramble | null>(null);
  const hasInitializedAnimation = useRef(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (id !== "projects") {
      return;
    }

    console.log("Clicked");

    const tl = gsap.timeline();

    const element = document.getElementById(`about-navigation-menu-item-${id}`);

    tl.fromTo(
      element,
      {
        position: "fixed",
        top: element?.getBoundingClientRect().top,
        // left: element?.getBoundingClientRect().left,
        height: element?.getBoundingClientRect().height,
      },
      {
        position: "fixed",
        top: 0,
        left: `50%`,
        x: GRID_SPACING * -6,
        width: GRID_SPACING * 12,
        height: "100svh",
        duration: 1,
        ease: "power2.inOut",
        border: "1px solid transparent",
        padding: 0,
        zIndex: 1000,
      },
      "0"
    ).then(() => {
      navigate("#projects", { replace: true });
      // const projectsPanel = document.getElementById("about-projects");
      gsap.set(element, { autoAlpha: 0 });
      document.getElementById("#projects")?.scrollIntoView({
        behavior: "auto", // 👈 important
        block: "start",
      });
    });

    tl.fromTo(
      textRef.current,
      { fontSize: "20px", fontWeight: 300 },
      {
        x: 13,
        y: -9,
        fontWeight: 700,
        fontSize: "3rem",
        duration: 0.75,
        ease: "power2.inOut",
      },
      "0"
    );

    tl.to(
      "#middle-vertical-line",
      {
        x: GRID_SPACING * -6,
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      },
      "0"
    );

    tl.to(
      "#left-1-vertical-line",
      {
        x: GRID_SPACING * -3,
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      },
      "0"
    );

    // Fade out the navigation arrow with autoAlpha
    tl.fromTo(
      `#about-navigation-menu-item-arrow-${id}`,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 0.15,
      },
      "0"
    );

    for (const itemIndex in highlightItems) {
      tl.to(
        `#highlight-item-${itemIndex}`,
        {
          autoAlpha: 0,
          x: -75,
          duration: 0.2,
          delay: 0.1,
          ease: "power2.out",
        },
        "0"
      );
    }

    tl.to(
      "#mission-title",
      {
        autoAlpha: 0,
        y: -100,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      },
      "0"
    );

    tl.to(
      "#mission-description",
      {
        autoAlpha: 0,
        y: -100,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      },
      "0"
    );

    for (const itemIndex in navigationItems) {
      if (itemIndex === id) continue;
      tl.set(`#about-navigation-menu-item-${itemIndex}`, {
        autoAlpha: 0,
      });
    }
  };

  useEffect(() => {
    if (!textRef.current) return;
    scramblerRef.current = new TextScramble(textRef.current);
    textRef.current.textContent = title;
    hasInitializedAnimation.current = false;

    return () => {
      scramblerRef.current?.dispose();
    };
  }, [title]);

  useEffect(() => {
    const scrambler = scramblerRef.current;
    if (!scrambler) return;

    if (!hasInitializedAnimation.current) {
      hasInitializedAnimation.current = true;
      return;
    }

    const targetText = hovered ? secondTitle || title : title;
    scrambler.setText(targetText);
  }, [hovered, secondTitle, title]);

  return (
    <div
      id={`about-navigation-menu-item-${id}`}
      className="relative border-t border-black/10 cursor-pointer ease-in-out px-[0.5px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        minWidth: GRID_SPACING * 6,
      }}
    >
      <div className="bg-[#e9f0f1] h-full py-4 px-1">
        <Typography
          variant="h6"
          className="z-50 font-xl w-full font-[Outfit]h-full ease-in-out"
          style={{
            fontWeight: hovered ? "500" : "300",
            transition: "font-weight 0.1s linear 0.2s",
          }}
        >
          <span
            ref={textRef}
            className="inline-block text-black font-[Outfit] "
          >
            {title}
          </span>
        </Typography>
      </div>
      <ArrowRight
        id={`about-navigation-menu-item-arrow-${id}`}
        className="absolute right-4 top-1/2 -translate-y-1/2 size-4 ease-in-out duration-300"
        style={{
          transform: hovered ? "translateX(10px)" : "translateX(0px)",
          color: hovered ? "black" : "black/20",
        }}
      />
    </div>
  );
}

export { NavigationMenuItem };
