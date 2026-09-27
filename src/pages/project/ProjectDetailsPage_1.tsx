import { projects } from "@/data/projects";
import { Typography } from "@/components/ui/typography";
import { Link, useParams } from "react-router-dom";
import { Github } from "lucide-react";
import { BouncingArrow } from "@/components/ui/bouncing-arrow";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { TableOfContents } from "@/pages/project/TableOfContents";
import { useRef } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { NotFoundPage } from "../NotFoundPage";

gsap.registerPlugin(ScrollTrigger);

function ProjectDetailsPage_1() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(({ id }) => id === projectId);
  usePageMeta(project?.title, project?.description);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headerLineRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // The split-screen header (pinned, image slides away) only
    // exists at lg+. Below that the header stacks and scrolls normally.
    mm.add("(min-width: 1024px)", () => {
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-projects-header",
        start: "top top",
        end: "+=300px", // change pin duration as needed
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
      },
    });

    headerTimeline.to(
      "#about-projects-header",
      {
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    // Fade out and slide right the image
    headerTimeline.fromTo(
      "#image-container",
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        width: 0,
        flex: 0,
        x: 200,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    // Fade out the scroll down arrow
    headerTimeline.fromTo(
      "#scroll-down-arrow",
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

    });

    const tableOfContentsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-projects-header",
        start: "bottom bottom",
        end: "+=100px",
        scrub: true,
      },
    });

    tableOfContentsTimeline.fromTo(
      "#table-of-contents",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "0"
    );

  }, []);

  useGSAP(() => {
    if (!headerLineRef.current) return;

    // Expands the line under the title as the user scrolls down
    const headerLineTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-projects-header",
        start: `top+=300px 300px`,
        end: `+=300px`,
        scrub: true,
      },
    });

    headerLineTimeline.fromTo("#header-line", { width: "100px" }, { width: "100%" }, "0");
  }, [headerLineRef]);

  if (!project) {
    return <NotFoundPage title="Project not found" />;
  }

  const hasContent = project.overview || project.body;

  if (!hasContent) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--color-paper)" }}
      >
        <h1
          className="font-[Inter] font-bold tracking-tight"
          style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--color-ink)" }}
        >
          {project.title}
        </h1>
        <p
          className="font-[Inter] font-normal mt-4"
          style={{ fontSize: 16, color: "var(--color-faint)" }}
        >
          The write-up for this one is still in progress.
        </p>
        <Link
          to="/"
          className="font-[Inter] text-sm font-normal no-underline mt-8 px-6 py-2.5 rounded-full transition-colors hover:bg-neutral-800 text-white"
          style={{ backgroundColor: "var(--color-ink)" }}
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <SiteHeader />
      <div className="w-full flex justify-center">
        <div
          id="about-projects-header"
          className="flex flex-col-reverse lg:flex-row w-full lg:h-svh overflow-hidden z-50"
        >
          <div className="flex-1 " id="title-container">
            <div className="flex flex-col justify-center items-center h-full">
              <div id="title-area" className="flex flex-col gap-y-2 w-full max-w-2xl px-5 sm:px-8 lg:px-4 pt-8 pb-4 lg:py-0">
                <Typography variant="h1" className="font-medium font-[Forum] text-5xl sm:text-6xl">
                  {project.title}
                </Typography>
                <div
                  id="header-line"
                  className="h-px bg-gray-400"
                  ref={headerLineRef}
                />
                <div>
                  <Typography
                    variant="h6"
                    className="font-medium text-2xl font-[Inter]"
                  >
                    <span
                      className="box-decoration-clone"
                      style={{
                        backgroundImage: "linear-gradient(to top, rgba(252,195,77,0.6) 40%, transparent 40%)",
                        padding: "0 2px",
                      }}
                    >
                      {project.description}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="div"
                    className="font-extralight text-md font-[Inter] max-w-2xl"
                  >
                    {project.overview}
                  </Typography>
                </div>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-[Inter] text-gray-700 hover:text-black w-fit"
                  >
                    <Github className="size-4" />
                    View source on GitHub
                  </a>
                )}
                <div
                  id="scroll-down-arrow"
                  className="animate-[arrow-bounce_3.2s_cubic-bezier(0.445,0.05,0.55,0.95)_infinite] w-full hidden lg:flex justify-center mt-8"
                >
                  <BouncingArrow id="about-grid-arrow" direction="down" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`relative h-[45svh] lg:h-auto flex-none lg:flex-1 ${project.coverImageBorder ? "lg:border-l border-gray-300" : ""}`}
            id="image-container"
          >
            {project.coverComponent ? (
              <div className="w-full h-full">{project.coverComponent}</div>
            ) : project.coverVideo ? (
              <video
                src={project.coverVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover z-50"
              />
            ) : project.coverImageDark ? (
              <div className="w-full h-full bg-gray-950 flex items-center justify-center p-6 lg:p-12">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="max-w-[85%] max-h-[85%] object-contain rounded-lg shadow-2xl z-50"
                />
              </div>
            ) : (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover z-50"
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl px-5 sm:px-8 lg:px-0">
          <Typography
            variant="div"
            ref={bodyRef}
            className="font-extralight text-md font-[Inter]"
            id="article-body"
          >
            {project.body}
          </Typography>
        </div>
      </div>
      <SiteFooter />

      <div id="table-of-contents" className="hidden lg:block fixed right-20 top-20 pointer-events-none">
        <TableOfContents bodyRef={bodyRef} />
      </div>
    </div>
  );
}

export { ProjectDetailsPage_1 };
