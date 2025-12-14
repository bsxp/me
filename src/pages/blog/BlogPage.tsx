import { Typography } from "@/components/ui/typography";
import { PlusCircleButton } from "./PlusCircleButton";
import { BlogCategoriesScroller } from "./BlogCategoriesScroller";
import { useLocation } from "react-router-dom";
import { BLOG_CATEGORIES } from "./config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function BlogPage() {
  const location = useLocation();
  const selectedCategory = (location.state as { category?: string })?.category;

  useGSAP(() => {
    gsap.fromTo("#blog-categories-scroller-container", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="bg-black w-full h-full relative p-4">
      <div
        className="relative border border-transparent w-full p-12"
        style={{
          height: `calc(100svh - 32px)`,
        }}
      >
        <div className="grid grid-cols-14 w-full h-full">
          <div className="col-span-4 h-full"></div>
          <div
            id="blog-categories-scroller-container"
            className="col-span-6  h-full opacity-0"
          >
            <BlogCategoriesScroller
              interactive={true}
              initialOpacity={1}
              startIndex={
                selectedCategory
                  ? BLOG_CATEGORIES.findIndex(
                      (category) => category.label === selectedCategory
                    )
                  : 0
              }
            />
          </div>
          <div className="col-span-4 h-full"></div>
        </div>
        <div className="flex justify-between items-center absolute top-12 left-12 right-12 h-12">
          <Typography
            id="chris-label"
            className="z-50 font-light absolute top-1/2 -translate-y-1/2 left-0 text-white"
            variant="p"
            style={{
              letterSpacing: "-0.7px",
            }}
          >
            chris porter
          </Typography>
          <PlusCircleButton handleClick={() => {}} expanded={true} />
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
      </div>
    </div>
  );
}
