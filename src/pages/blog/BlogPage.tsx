import { Typography } from "@/components/ui/typography";
import { PlusCircleButton } from "./PlusCircleButton";
import { BlogCategoriesScroller } from "./BlogCategoriesScroller";

export function BlogPage() {
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
          <div className="col-span-6  h-full">
            <BlogCategoriesScroller interactive={true} initialOpacity={1} />
          </div>
          <div className="col-span-4  h-full"></div>
        </div>
        {/* <div className="flex justify-between items-center relative w-full h-12 ">
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
        </div> */}
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
