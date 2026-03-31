import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BLOG_CATEGORIES } from "./config";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Fake articles data
export const FAKE_ARTICLES = [
  {
    id: 1,
    title: "How to build a human-centric city",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    tags: ["Technology", "Urban Planning", "Sustainability"],
    date: new Date("2025-12-01"),
  },
  {
    id: 2,
    title: "The future of remote work in 2026",
    description:
      "Exploring how distributed teams are reshaping the modern workplace. From async communication to virtual reality meetings, discover what's next.",
    tags: ["Work", "Technology", "Culture"],
    date: new Date("2025-11-28"),
  },
  {
    id: 3,
    title: "Understanding design systems at scale",
    description:
      "A deep dive into how large organizations maintain consistency across hundreds of products and thousands of designers and developers.",
    tags: ["Design", "Systems", "Engineering"],
    date: new Date("2025-11-25"),
  },
  {
    id: 4,
    title: "Climate tech innovations worth watching",
    description:
      "From carbon capture to sustainable agriculture, these startups are tackling the climate crisis with innovative solutions.",
    tags: ["Climate", "Technology", "Startups"],
    date: new Date("2025-11-20"),
  },
  {
    id: 5,
    title: "The art of writing clean code",
    description:
      "Principles and practices that separate maintainable codebases from technical debt nightmares. Learn from real-world examples.",
    tags: ["Programming", "Best Practices", "Engineering"],
    date: new Date("2025-11-15"),
  },
  {
    id: 6,
    title: "Building accessible products from day one",
    description:
      "Why accessibility should never be an afterthought and how to integrate inclusive design into your development workflow.",
    tags: ["Accessibility", "Design", "UX"],
    date: new Date("2025-11-10"),
  },
  {
    id: 7,
    title: "The rise of AI-powered design tools",
    description:
      "How artificial intelligence is transforming the creative process and what it means for designers and developers alike.",
    tags: ["AI", "Design", "Tools"],
    date: new Date("2025-11-05"),
  },
  {
    id: 8,
    title: "Microservices vs monoliths: A practical guide",
    description:
      "Cutting through the hype to help you choose the right architecture for your team and project requirements.",
    tags: ["Architecture", "Engineering", "DevOps"],
    date: new Date("2025-10-30"),
  },
  {
    id: 9,
    title: "Building communities around open source",
    description:
      "Lessons learned from maintaining popular open source projects and fostering healthy contributor ecosystems.",
    tags: ["Open Source", "Community", "Programming"],
    date: new Date("2025-10-25"),
  },
  {
    id: 10,
    title: "The psychology of user onboarding",
    description:
      "Understanding cognitive load and motivation to create onboarding experiences that actually work.",
    tags: ["UX", "Psychology", "Product"],
    date: new Date("2025-10-20"),
  },
  {
    id: 11,
    title: "Scaling databases without losing sleep",
    description:
      "Practical strategies for handling growing data loads while maintaining performance and reliability.",
    tags: ["Databases", "Infrastructure", "Engineering"],
    date: new Date("2025-10-15"),
  },
  {
    id: 12,
    title: "The future of web animation",
    description:
      "From CSS animations to WebGL, exploring the cutting edge of motion design on the web.",
    tags: ["Animation", "CSS", "WebGL"],
    date: new Date("2025-10-10"),
  },
  {
    id: 13,
    title: "Privacy-first product development",
    description:
      "How to build products that respect user privacy while still delivering personalized experiences.",
    tags: ["Privacy", "Product", "Ethics"],
    date: new Date("2025-10-05"),
  },
  {
    id: 14,
    title: "Lessons from failed startups",
    description:
      "What we can learn from ventures that didn't make it and how to avoid common pitfalls.",
    tags: ["Startups", "Business", "Lessons"],
    date: new Date("2025-09-30"),
  },
  {
    id: 15,
    title: "The minimalist developer toolkit",
    description:
      "Sometimes less is more. Discover how simplifying your toolchain can boost productivity and reduce cognitive overhead.",
    tags: ["Tools", "Productivity", "Development"],
    date: new Date("2025-09-25"),
  },
];

const ARTICLES_PER_PAGE = 5;

function BlogCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(FAKE_ARTICLES.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = FAKE_ARTICLES.slice(startIndex, endIndex);

  // Scroll to top whenever page changes
  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-black w-full h-full flex flex-col overflow-hidden relative">
      <Typography
        id="chris-label"
        className="z-50 font-light absolute top-12 left-12 text-white"
        variant="p"
        style={{
          letterSpacing: "-0.7px",
        }}
      >
        chris porter
      </Typography>
      <div className="z-50 font-light absolute top-12 right-12 text-white hover:text-white/90">
        <NavigationMenu className="[&>div:last-child]:left-auto [&>div:last-child]:right-0">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                Blog
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Components</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Documentation</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Blocks</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator className="">
            <div className="relative top-[70%] border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white" />
          </NavigationMenuIndicator>
        </NavigationMenu>
      </div>
      <img
        src={BLOG_CATEGORIES.find((c) => c.label === category)?.image}
        className="w-full h-32 object-cover shrink-0"
      />
      {/* Fixed category header */}
      <div className="shrink-0 flex justify-center">
        <div className="w-full max-w-5xl px-6 pt-6">
          <Typography
            variant="h1"
            className="text-white mb-8"
            style={{
              fontSize: "8rem",
            }}
          >
            {category}
          </Typography>
        </div>
      </div>
      {/* Scrollable content area */}
      <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl px-6 pb-6 relative">
            {currentArticles.map((article) => (
              <BlogPostPreview
                key={article.id}
                title={article.title}
                description={article.description}
                tags={article.tags}
                date={article.date}
              />
            ))}
            <Pagination className="mt-4 mr-auto">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePrevious}
                    aria-disabled={currentPage === 1}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50 text-white"
                        : "text-white"
                    }
                  >
                    Previous
                  </PaginationPrevious>
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, idx) => (
                  <PaginationItem key={idx + 1}>
                    <Button
                      variant={currentPage === idx + 1 ? "default" : "ghost"}
                      className={
                        currentPage === idx + 1
                          ? "bg-white text-black"
                          : "text-white"
                      }
                      onClick={() => setCurrentPage(idx + 1)}
                      aria-current={
                        currentPage === idx + 1 ? "page" : undefined
                      }
                    >
                      {idx + 1}
                    </Button>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={handleNext}
                    aria-disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50 text-white"
                        : "text-white"
                    }
                  >
                    Next
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <Typography variant="caption" className="mt-24 text-white">
              Interested in working with me? Get in touch
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPostPreview({
  title,
  description,
  tags,
  date,
}: {
  title: string;
  description: string;
  tags: string[];
  date: Date;
}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col gap-4 text-white border-b-[0.5px] border-white/50 py-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Typography variant="caption">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
      <Typography
        variant="h6"
        className={cn("font-semibold text-xl", hovered && "text-sky-400")}
      >
        {title}
      </Typography>
      <Typography variant="p" className="font-light text-md">
        {description}
      </Typography>
      <div className="flex gap-1">
        {tags.map((tag: string) => (
          <div
            key={tag}
            className="border border-white/10 rounded-full bg-gray-400/10 px-3 py-0.5"
          >
            <Typography
              variant="caption"
              className="text-white font-semibold text-xs"
            >
              {tag}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogCategoryNavigationChip({
  category,
}: {
  category: (typeof BLOG_CATEGORIES)[number];
}) {
  const [hovered] = useState<boolean>(true);

  return (
    <div
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      key={category.label}
      className={cn(
        `flex justify-start items-center duration-300 ease-in-out overflow-hidden relative gap-x-2`
      )}
      style={{
        color: category.textColor,
      }}
    >
      <img
        src={category.image}
        alt={category.label}
        className="w-2 h-2 object-cover z-0 rounded-full"
        draggable={false}
      />
      <span className="relative z-10 flex items-center justify-start w-full h-full text-left pl-1">
        <Typography variant="h6" className="font-light text-md text-white">
          {hovered ? category.label : category.label.slice(0, 1)}
        </Typography>
      </span>
    </div>
  );
}

export { BlogCategoryPage, BlogCategoryNavigationChip };
