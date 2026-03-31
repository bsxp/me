import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FAKE_ARTICLES } from "@/data/articles";
import { GRID_SPACING, BG_LIGHT, BG_DARK } from "./config";

gsap.registerPlugin(ScrollTrigger);

const recentPosts = [...FAKE_ARTICLES]
  .sort((a, b) => b.date.getTime() - a.date.getTime())
  .slice(0, 5);

function HomeBlogSection() {
  const navigate = useNavigate();

  useGSAP(() => {
    // Background crossfade: light → dark
    gsap.fromTo(
      "#root",
      { backgroundColor: BG_LIGHT },
      {
        backgroundColor: BG_DARK,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#home-blog",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // Content fade in with stagger
    gsap.fromTo(
      ".blog-stagger",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-blog",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Reverse bg color on scroll back
    ScrollTrigger.create({
      trigger: "#home-blog",
      start: "top bottom",
      onLeaveBack: () => {
        gsap.to("#root", {
          backgroundColor: BG_LIGHT,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      id="home-blog"
      className="flex justify-center items-start relative z-50"
      style={{ backgroundColor: BG_DARK, paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="border-t border-b border-white/10 pt-4 font-[Forum] flex flex-col w-full"
        style={{ maxWidth: GRID_SPACING * 12 }}
      >
        <div className="px-4 pb-2 flex items-end justify-between">
          <Typography variant="h2" className="text-white">
            Recent Writings
          </Typography>
          <Button
            variant="ghost"
            className="rounded-full text-white border-white/20"
            size="lg"
            onClick={() => navigate("/blog")}
          >
            See all <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col">
          {recentPosts.map((post) => (
            <BlogPostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPostItem({
  id,
  title,
  date,
}: {
  id: number;
  title: string;
  date: Date;
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="blog-stagger border-t border-white/10 cursor-pointer px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/blog/posts/${id}`)}
    >
      <div className="py-4 px-1 flex items-center justify-between">
        <Typography
          variant="h6"
          className="z-50 font-xl w-full ease-in-out duration-200 text-white"
          style={{ fontWeight: hovered ? "500" : "300" }}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          className="text-gray-400 shrink-0 ml-4"
        >
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
      </div>
    </div>
  );
}

export { HomeBlogSection };
