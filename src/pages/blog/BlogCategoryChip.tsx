import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORIES_FULL,
  CHIP_HEIGHT,
  CHIP_WIDTH,
  LETTER_SPACING,
} from "./config";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleElementClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const tl = gsap.timeline();

    // Float the chip and expand it at the top of the screen

    animateImageMove({ timeline: tl, index: index });
    animateCategoryLabelMove({ timeline: tl, index: index });
    animateOtherChipsFadingOut({ timeline: tl, index: index });

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
    ).then(() => {
      navigate(`/blog/categories/${encodeURIComponent(category.label)}`);
    });

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
        color: category.textColor,
        letterSpacing: LETTER_SPACING,
        height: CHIP_HEIGHT,
        width: CHIP_WIDTH,
        ...style,
      }}
      onClick={handleElementClick}
      // onClick={handleNavigate}
    >
      <img
        id={`category-image-${index}`}
        src={category.image}
        alt={category.label}
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none rounded-full"
        draggable={false}
      />
      <Typography
        id={`category-label-${index}`}
        variant="h3"
        className="text-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Outfit]"
      >
        {category.label}
      </Typography>
    </div>
  );
}

function animateImageMove({
  timeline,
  index,
}: {
  timeline: GSAPTimeline;
  index: number;
}) {
  const imageElement = document.getElementById(`category-image-${index}`);

  if (!imageElement) return;

  const currentX = imageElement?.getBoundingClientRect().x;
  const targetElementWidth = -4;
  const widthOfTargetSegment = ((window.innerWidth - 64) * 4) / 14;

  const targetX = 32 + widthOfTargetSegment - targetElementWidth;

  const lateralMovement = targetX - currentX - 2;

  timeline.to(
    imageElement,
    {
      x: lateralMovement,
      top: "calc(50% - 8px - 4px - 8px - 4px)",
      width: 12,
      height: 12,
      duration: 0.5,
      ease: "power2.inOut",
    },
    "0"
  );
}

function animateCategoryLabelMove({
  timeline,
  index,
}: {
  timeline: GSAPTimeline;
  index: number;
}) {
  const labelElement = document.getElementById(`category-label-${index}`);

  if (!labelElement) return;

  const currentX = labelElement?.getBoundingClientRect().x;
  const targetElementWidth = 211;
  const offset = 12;
  const middleSegmentWidth = ((window.innerWidth - 64) * 6) / 14;
  // const lateralMovement = -(elementOffset + (sideSegmentWidth / 2) +(middleSegmentWidth / 2));

  const lateralMovement = -(
    middleSegmentWidth / 2 -
    2 +
    targetElementWidth / 2
  );

  console.table({
    currentX,
    // targetX,
    lateralMovement,
    targetElementWidth,
    offset,
    // segmentDistanceFromRightSideOfScreen,
  });

  timeline.to(
    `#category-label-${index}`,
    {
      x: lateralMovement,
      position: "fixed",
      top: "calc(50% - 8px - 4px - 16px - 2px)",
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: LETTER_SPACING,
      duration: 0.5,
      color: "white",
      ease: "power2.inOut",
    },
    "0"
  );

  // timeline.add((() => null), "+=10")
}

function animateOtherChipsFadingOut({
  timeline,
  index,
}: {
  timeline: GSAPTimeline;
  index: number;
}) {
  BLOG_CATEGORIES_FULL.forEach((_category: string, categoryIndex: number) => {
    if (categoryIndex === index) {
      console.log("Skipping category", categoryIndex);
      return;
    }
    console.log("Fading out category", categoryIndex);
    timeline.to(
      `#category-${categoryIndex}`,
      { filter: "brightness(0%)", duration: 0.5, ease: "power2.inOut" },
      "0"
    );
  });
}

export { BlogCategoryChip };
