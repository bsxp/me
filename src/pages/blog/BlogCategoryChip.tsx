import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CHIP_HEIGHT, CHIP_WIDTH, LETTER_SPACING, type BLOG_CATEGORIES } from "./config";
import { useRef, useState } from "react";
import gsap from "gsap";

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
  const [expanded, setExpanded] = useState<boolean>(false);

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
    console.log("Animating element expanding");
    const tl = gsap.timeline();

    // Remove border radius
    tl.to(
      chipRef.current,
      {
        borderRadius: 0,
        duration: 0.25,
        ease: "power2.inOut",
      },
      "0"
    );

    // Float the chip and expand it at the top of the screen
    tl.to(
      chipRef.current,
      {
        top: "-32px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",
        height: 140,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    // Remove margins so the image can stretch to the edges of the screen
    tl.to(
      "#main-grid",
      {
        margin: 0,
        width: "100svw",
        height: "100svh",
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    // Make the animation container fill the whole screen
    tl.to(
      "#blog-panel",
      {
        width: "100svw",
        height: "100svh",
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    tl.to(
      `#category-label-${index}`,
      {
        position: "fixed",
        fontSize: "8rem",
        top: 160,
        left: 64,
        color: "white",
        duration: 0.5,
        delay: 0.5,
        ease: "power2.inOut",
      },
      "+=0.1"
    );

    tl.to("#chris-label", {
      duration: 0.25,
      opacity: 0,
      autoAlpha: 0
    }, "0")

    tl.to("#plus-circle-button", {
      duration: 0.25,
      autoAlpha: 0,
    }, "0")

    setExpanded(true);
  };

  return (
    <div
      id={idOverride ?? `category-${index}`}
      ref={chipRef}
      className={cn(
        "rounded-full flex justify-center items-center font-medium text-3xl",
        "absolute left-1/2 -translate-x-1/2",
        !expanded && "hover:brightness-80 cursor-pointer",
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
        ...style,
      }}
      onClick={handleNavigate}
    >
      <Typography
        id={`category-label-${index}`}
        variant="h3"
        className="text-center"
      >
        {category.label}
      </Typography>
    </div>
  );
}

export { BlogCategoryChip }