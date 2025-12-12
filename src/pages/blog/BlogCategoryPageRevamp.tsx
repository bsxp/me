import { Typography } from "@/components/ui/typography";
import { FAKE_ARTICLES } from "./BlogCategoryPage";
import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BLOG_CATEGORIES, LETTER_SPACING } from "./config";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

function BlogCategoryPageRevamp() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ angle: 0 });
  const cellCount = Math.ceil(FAKE_ARTICLES.length);
  const cellHeight = 200;

  // Calculate carousel geometry
  const theta = 440 / Math.ceil(cellCount * 2.5);
  const radius = Math.round(
    cellHeight / 2 / Math.tan(Math.PI / Math.ceil(cellCount * 2.5))
  );

  // Animate carousel rotation with GSAP
  useGSAP(() => {
    if (!carouselRef.current) return;

    const targetAngle = theta * selectedIndex * -1;

    gsap.to(rotationRef.current, {
      angle: -targetAngle,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: () => {
        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateZ(${-radius}px) rotateX(${
            rotationRef.current.angle
          }deg)`;
        }
      },
    });
  }, [selectedIndex, theta, radius]);

  const handlePrevious = () => {
    if (selectedIndex === 0) return;
    setSelectedIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (selectedIndex === cellCount - 1) return;
    setSelectedIndex((prev) => prev + 1);
  };

  const handleSelectIndex = (index: number) => {
    setSelectedIndex(index);
  };

  // Handle scroll wheel navigation with debounce
  const lastScrollTime = useRef(0);
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastScrollTime.current < 300) return; // Debounce
    lastScrollTime.current = now;

    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  return (
    <div className="bg-black w-full h-full flex flex-col overflow-hidden relative">
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-16">
        <div className="grid grid-cols-14 w-full">
          <div className="col-span-4 h-[calc(100svh-129px)] flex flex-col items-end justify-center gap-y-4 ">
            <div className="flex items-end justify-end gap-x-1 w-full h-12">
              <Typography
                variant="h2"
                className="text-white"
                style={{
                  fontWeight: 700,
                  letterSpacing: LETTER_SPACING,
                }}
              >
                {
                  BLOG_CATEGORIES.find(
                    (category) => category.label === "Urbanism"
                  )?.label
                }
              </Typography>
              <img
                src={
                  BLOG_CATEGORIES.find(
                    (category) => category.label === "Urbanism"
                  )?.image
                }
                alt={
                  BLOG_CATEGORIES.find(
                    (category) => category.label === "Urbanism"
                  )?.label
                }
                className="w-3 h-3 object-cover rounded-full mb-1.5"
              />
            </div>
            <Typography
              variant="caption"
              className="text-white/60 text-right max-w-48 h-12"
            >
              {
                BLOG_CATEGORIES.find((category) => category.label === "Design")
                  ?.description
              }
            </Typography>
          </div>
          <div className="col-span-6 h-full"></div>
          <div className="col-span-4 h-full flex items-center">
            <div className="flex flex-col gap-4 items-center z-50">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-white/0 hover:bg-white/10 text-white transition-colors backdrop-blur-sm cursor-pointer"
                aria-label="Prev article"
              >
                <ChevronUp size={24} />
              </button>
              {/* Article counter */}
              <div className="">
                <Typography variant="caption" className="text-white/60">
                  {(((selectedIndex % cellCount) + cellCount) % cellCount) + 1}{" "}
                  / {cellCount}
                </Typography>
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/0 hover:bg-white/10 text-white transition-colors backdrop-blur-sm cursor-pointer"
                aria-label="Next article"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}

      {/* 3D Carousel Scene */}
      <div
        className="scene flex-1 flex items-center justify-center"
        onWheel={handleWheel}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={carouselRef}
          className="carousel relative w-full max-w-2xl"
          style={{
            height: `${cellHeight}px`,
            transformStyle: "preserve-3d",
            transform: `translateZ(${-radius}px) rotateX(0deg)`,
          }}
        >
          {FAKE_ARTICLES.map((article, index) => {
            const cellAngle = -theta * index;
            return (
              <CarouselCell
                key={article.id}
                article={article}
                index={index}
                selectedIndex={selectedIndex}
                cellCount={cellCount}
                cellAngle={cellAngle}
                cellHeight={cellHeight}
                radius={radius}
                handleClick={() => handleSelectIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CarouselCell({
  article,
  index,
  selectedIndex,
  cellCount,
  cellAngle,
  cellHeight,
  radius,
  handleClick,
}: {
  article: (typeof FAKE_ARTICLES)[number];
  index: number;
  selectedIndex: number;
  cellCount: number;
  cellAngle: number;
  cellHeight: number;
  radius: number;
  handleClick: () => void;
}) {
  const cellRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const normalizedSelected =
    ((selectedIndex % cellCount) + cellCount) % cellCount;
  const isSelected = index === normalizedSelected;
  const distanceFromSelected = Math.abs(index - normalizedSelected);

  const handlePostClick = () => {
    navigate(`/blog/posts/${article.id}`);
    handleClick();
  };

  // Animate opacity with GSAP
  useGSAP(() => {
    if (!cellRef.current) return;

    gsap.to(cellRef.current, {
      opacity: 1 - distanceFromSelected * 0.3,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isSelected]);

  return (
    <div
      ref={cellRef}
      onClick={handleClick}
      className="absolute w-full px-8 duration-300 ease-in-out cursor-pointer"
      style={{
        height: `${cellHeight}px`,
        transform: `rotateX(${cellAngle}deg) translateZ(${radius}px)`,
        backfaceVisibility: "hidden",
        opacity: 1 - distanceFromSelected * 0.3,
      }}
    >
      <BlogPostPreview
        isSelected={isSelected}
        title={article.title}
        description={article.description}
        tags={article.tags}
        date={article.date}
      />
    </div>
  );
}

function BlogPostPreview({
  isSelected,
  title,
  description,
  tags,
  date,
}: {
  isSelected: boolean;
  title: string;
  description: string;
  tags: string[];
  date: Date;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement>(null);

  // Animate title color on hover with GSAP
  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.to(titleRef.current, {
      color: hovered && isSelected ? "#38bdf8" : "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [hovered, isSelected]);

  return (
    <div
      className="flex flex-col gap-3 text-white h-full justify-center relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Typography variant="caption" className="text-white/60">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
      <div ref={titleRef}>
        <Typography variant="h6" className="font-semibold text-2xl">
          {title}
        </Typography>
      </div>
      <Typography
        variant="p"
        className="font-light text-md text-white/80 line-clamp-2"
      >
        {description}
      </Typography>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 mt-1">
          {tags.slice(0, 3).map((tag: string) => (
            <div
              key={tag}
              className="border border-white/10 rounded-full bg-white/5 px-2 py-0.5 flex items-center justify-center"
            >
              <Typography
                variant="caption"
                className="text-white/70 font-medium text-xs"
              >
                {tag}
              </Typography>
            </div>
          ))}
        </div>
        <div
          id="visit-article-button"
          className={cn(
            "duration-300 ease-in-out",
            isSelected && "opacity-100",
            !isSelected && "opacity-0 pointer-events-none"
          )}
        >
          <Button variant="ghost" size="sm">
            Read <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { BlogCategoryPageRevamp };
