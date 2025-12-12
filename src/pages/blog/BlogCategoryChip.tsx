import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  CHIP_HEIGHT,
  CHIP_WIDTH,
  LETTER_SPACING,
  type BLOG_CATEGORIES,
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

  const handleNavigate = () => {
    navigate(`/blog/categories/${encodeURIComponent(category.label)}`);
    handleElementClick();
  };

  const handleElementClick = () => {
    const tl = gsap.timeline();

    // Float the chip and expand it at the top of the screen

    animateImageMove({ timeline: tl, index: index });

    animateCategoryLabelMove({ timeline: tl, index: index });

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
    )
    .then(() => {
      navigate(`/blog/categories/${encodeURIComponent(category.label)}`);
    });

    // tl.to(
    //   `#category-label-${index}`,
    //   {
    //     position: "fixed",
    //     fontSize: "8rem",
    //     top: '50%',
    //     left: '33%',
    //     transform: 'translate(0%, -50%)',
    //     color: "white",
    //     duration: 0.5,
    //     ease: "power2.inOut",
    //   },
    //   "+=0.1"
    // );

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
        className="text-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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

  const lateralMovement = targetX - currentX;

  timeline.to(
    imageElement,
    {
      x: lateralMovement,
      top: "calc(50% - 8px - 4px - 8px)",
      width: 10,
      height: 10,
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

  const elementWidthStart = labelElement?.getBoundingClientRect().width;
  const elementOffset = elementWidthStart / 2;

  const currentX = labelElement?.getBoundingClientRect().x;
  const targetElementWidth = 211;
  const offset = 12;
  const middleSegmentWidth = (window.innerWidth - 64) * 6 / 14;
  // const segmentDistanceFromRightSideOfScreen =
  //   ((window.innerWidth - 64) * 10) / 14;

  const sideSegmentWidth = (window.innerWidth - 64) * 4 / 14;
  // const lateralMovement = -(elementOffset + (sideSegmentWidth / 2) +(middleSegmentWidth / 2));

  const lateralMovement = -((middleSegmentWidth / 2) - 11 + targetElementWidth + 12)

  console.table({
    currentX,
    // targetX,
    lateralMovement,
    targetElementWidth,
    offset,
    // segmentDistanceFromRightSideOfScreen,
  })

  timeline.to(
    `#category-label-${index}`,
    {
      x: lateralMovement,
      position: "fixed",
      top: "calc(50% - 8px - 4px - 16px)",
      fontSize: "3rem",
      fontWeight: 700,
      duration: 0.5,
      color: "white",
      ease: "power2.inOut",
    },
    "0"
  );
}

export { BlogCategoryChip };
