import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPostBySlug } from "./posts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? getPostBySlug(postId) : undefined;

  if (!post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "#fafafa" }}
      >
        <h1
          className="font-[Inter] font-bold tracking-tight"
          style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#1a1a1a" }}
        >
          Post not found
        </h1>
        <Link
          to="/blog"
          className="font-[Inter] text-sm font-normal no-underline mt-8 px-6 py-2.5 rounded-full transition-colors hover:bg-neutral-800 text-white"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          Back to blog
        </Link>
      </div>
    );
  }

  const { meta, Component } = post;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      "#post-header",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      "#post-body-divider",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.4 }
    );

    const blocks = containerRef.current?.querySelectorAll(".blog-post-content > *:not(style)");
    if (!blocks) return;

    const viewportBottom = window.innerHeight;
    let staggerIndex = 0;

    blocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const isInView = rect.top < viewportBottom;

      if (isInView) {
        gsap.fromTo(
          block,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.5 + staggerIndex * 0.12,
          }
        );
        staggerIndex++;
      } else {
        gsap.fromTo(
          block,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      {/* Nav */}
      <header className="w-full" style={{ height: 80 }}>
        <div className="max-w-[700px] mx-auto px-8 sm:px-12 h-full flex items-center">
          <div className="flex flex-col">
            <Link
              to="/"
              className="font-[Inter] text-sm font-normal no-underline"
              style={{ color: "#1a1a1a" }}
            >
              chris.
            </Link>
            <Link
              to="/blog"
              className="font-['Space_Mono'] text-xs no-underline transition-opacity hover:opacity-50 mt-2"
              style={{ color: "#999" }}
            >
              &larr; back to blog
            </Link>
          </div>
        </div>
      </header>

      {/* Post header */}
      <section id="post-header" className="w-full" style={{ marginTop: 48, marginBottom: 40, opacity: 0 }}>
        <div className="max-w-[700px] mx-auto px-8 sm:px-12">
          <div className="flex gap-2 mb-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Space_Mono'] text-xs font-normal px-2 py-0.5 rounded-full"
                style={{
                  color: "#6b6b6b",
                  backgroundColor: "#f0f0f0",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-[Inter] font-semibold leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#1a1a1a" }}
          >
            {meta.title}
          </h1>
          <p
            className="font-['Space_Mono'] font-normal mt-3"
            style={{ fontSize: 13, color: "#999" }}
          >
            {meta.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Post body */}
      <section id="post-body" className="w-full" style={{ paddingBottom: 64 }}>
        <div className="max-w-[700px] mx-auto px-8 sm:px-12">
          <div id="post-body-divider" className="w-full h-px mb-10" style={{ backgroundColor: "#e5e5e5", opacity: 0 }} />
            <div className="blog-post-content font-[Inter] text-base leading-relaxed" style={{ color: "#333" }}>
              <style>{`
                .blog-post-content > *:not(style) {
                  opacity: 0;
                }
                .blog-post-content p {
                  margin-bottom: 1.25rem;
                  line-height: 1.8;
                }
                .blog-post-content h2 {
                  font-size: 1.35rem;
                  font-weight: 600;
                  color: #1a1a1a;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                }
                .blog-post-content ul {
                  margin-bottom: 1.25rem;
                  padding-left: 1.5rem;
                  list-style: disc;
                }
                .blog-post-content ul ul {
                  margin-top: 0.5rem;
                  margin-bottom: 0.5rem;
                }
                .blog-post-content li {
                  margin-bottom: 0.6rem;
                  line-height: 1.7;
                }
                .blog-post-content a {
                  color: #2563eb;
                  text-decoration: none;
                  transition: opacity 0.2s;
                }
                .blog-post-content a:hover {
                  opacity: 0.7;
                }
                .blog-post-content strong {
                  font-weight: 600;
                  color: #1a1a1a;
                }
                .blog-post-content blockquote {
                  border-left: 3px solid #e5e5e5;
                  padding-left: 1.25rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: #666;
                }
                .blog-post-content img {
                  max-width: 100%;
                  height: auto;
                }
              `}</style>
              <Component />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-8 sm:px-12">
        <div className="max-w-[700px] mx-auto">
          <div className="w-full h-px mb-12" style={{ backgroundColor: "#e5e5e5" }} />
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left — name + location */}
            <div>
              <p
                className="font-[Inter] font-bold text-lg"
                style={{ color: "#1a1a1a" }}
              >
                Chris Porter
              </p>
              <p
                className="font-['Space_Mono'] text-xs mt-2"
                style={{ color: "#999" }}
              >
                Austin, Texas
              </p>
            </div>

            {/* Middle — social links */}
            <div className="flex flex-col gap-2">
              <p
                className="font-[Inter] text-xs uppercase tracking-widest mb-2"
                style={{ color: "#999" }}
              >
                Social
              </p>
              <Link
                to="/contact"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                Email
              </Link>
              <a
                href="https://linkedin.com/in/chris-porterwa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/bsxp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                GitHub
              </a>
            </div>

            {/* Right — site links */}
            <div className="flex flex-col gap-2">
              <p
                className="font-[Inter] text-xs uppercase tracking-widest mb-2"
                style={{ color: "#999" }}
              >
                Site
              </p>
              <Link
                to="/about"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                About
              </Link>
              <Link
                to="/"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="font-['Space_Mono'] text-xs no-underline hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="w-full h-px mt-12 mb-6" style={{ backgroundColor: "#e5e5e5" }} />
          <div className="flex items-center justify-between">
            <p
              className="font-['Space_Mono'] text-xs"
              style={{ color: "#999" }}
            >
              &copy; {new Date().getFullYear()} Chris Porter
            </p>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-['Space_Mono'] text-xs cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "#999", background: "none", border: "none", padding: 0 }}
              >
                Take me to the top &uarr;
              </button>
              <Link
                to="/blog"
                className="font-['Space_Mono'] text-xs no-underline transition-opacity hover:opacity-70"
                style={{ color: "#999" }}
              >
                Take me back to the blog &larr;
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { BlogPostPage };
