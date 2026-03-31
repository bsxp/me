import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { projects } from "@/data/projects";
import { WORK_PIN_DISTANCE } from "./config";

gsap.registerPlugin(ScrollTrigger);

const featured = projects[0]; // Hearth

function HomeWorkSection() {
  const navigate = useNavigate();
  const { atLeast } = useBreakpoint();

  useGSAP(() => {
    // Fade in from below as hero exits
    gsap.fromTo(
      "#home-work-content",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-work",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Pinned: image slides right and fades out (matches ProjectDetailsPage_1)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-work",
        start: "top top",
        end: `+=${WORK_PIN_DISTANCE}`,
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    // Image slide-out (desktop only)
    if (window.innerWidth >= 768) {
      tl.fromTo(
        "#home-work-image",
        { opacity: 1, x: 0 },
        { opacity: 0, x: 200, duration: 0.5, ease: "power2.inOut" },
        0
      );
    }

    // Fade out entire section at end of pin
    tl.to(
      "#home-work-content",
      { opacity: 0, duration: 0.3, ease: "power2.in" },
      0.5
    );
  }, []);

  return (
    <section
      id="home-work"
      className="w-full h-svh relative flex items-center justify-center overflow-hidden"
    >
      <div
        id="home-work-content"
        className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-6xl px-8 gap-12"
      >
        {/* Text side */}
        <div className="flex-1 flex flex-col gap-y-3">
          <Typography variant="eyebrow" className="text-blue-600">
            FEATURED WORK
          </Typography>

          <Typography
            variant={atLeast.md ? "h1" : "h3"}
            className="font-medium font-[Forum]"
          >
            {featured.title}
          </Typography>

          <div className="h-px bg-gray-400 w-full" />

          <Typography
            variant="h6"
            className="font-medium text-2xl font-[Google_Sans_Code] relative inline-block"
          >
            <span className="relative z-10">{featured.description}</span>
            <span
              aria-hidden
              className="absolute left-1 bottom-0 w-full h-4.5 bg-amber-300/60 z-0"
              style={{ pointerEvents: "none" }}
            />
          </Typography>

          <Typography
            variant="div"
            className="font-extralight text-md font-[Google_Sans_Code] max-w-2xl"
          >
            {featured.overview}
          </Typography>

          <div className="flex gap-x-4 mt-4">
            <Button
              variant="defaultPrimary"
              className="rounded-full bg-[#060610]"
              size="lg"
              onClick={() => navigate(`/projects/${featured.id}`)}
            >
              View Project <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="ghost"
              className="rounded-full"
              size="lg"
              onClick={() => navigate("/about#projects")}
            >
              All Projects
            </Button>
          </div>
        </div>

        {/* Image side (desktop) */}
        {featured.coverImage && (
          <div
            id="home-work-image"
            className="flex-1 relative hidden md:block"
          >
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="w-full h-[70vh] object-cover rounded-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export { HomeWorkSection };
