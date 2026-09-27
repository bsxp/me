import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPostBySlug, type Post } from "./posts";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NotFoundPage } from "../NotFoundPage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? getPostBySlug(postId) : undefined;
  usePageMeta(post?.meta.title, post?.meta.description);

  if (!post) {
    return <NotFoundPage title="Post not found" />;
  }

  // Keyed so moving between posts remounts and re-runs the entrance animation
  return <BlogPostContent key={post.meta.slug} post={post} />;
}

// Split out so its hooks always run in the same order (they used to sit
// after the "not found" early return)
function BlogPostContent({ post }: { post: Post }) {
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
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: "var(--color-paper)" }}>
      <SiteHeader />

      {/* Post header */}
      <section id="post-header" className="w-full" style={{ marginTop: 48, marginBottom: 40, opacity: 0 }}>
        <div className="max-w-[700px] mx-auto px-8 sm:px-12">
          <Link
            to="/blog"
            className="inline-block font-['Space_Mono'] text-xs text-faint no-underline transition-opacity hover:opacity-50 mb-8"
          >
            &larr; back to blog
          </Link>
          <div className="flex gap-2 mb-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Space_Mono'] text-xs font-normal px-2 py-0.5 rounded-full"
                style={{
                  color: "var(--color-dim)",
                  backgroundColor: "var(--color-wash)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-[Inter] font-semibold leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--color-ink)" }}
          >
            {meta.title}
          </h1>
          <p
            className="font-['Space_Mono'] font-normal mt-3"
            style={{ fontSize: 13, color: "var(--color-faint)" }}
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
          <div id="post-body-divider" className="w-full h-px mb-10" style={{ backgroundColor: "var(--color-line)", opacity: 0 }} />
            <div className="blog-post-content font-[Inter] text-base leading-relaxed" style={{ color: "var(--color-night-line)" }}>
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
                  color: var(--color-ink);
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
                  color: var(--color-ink);
                }
                .blog-post-content blockquote {
                  border-left: 3px solid var(--color-line);
                  padding-left: 1.25rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: var(--color-dim);
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

      <div className="max-w-[700px] mx-auto px-8 sm:px-12 pb-20">
        <Link
          to="/blog"
          className="font-['Space_Mono'] text-xs text-faint no-underline transition-opacity hover:opacity-50"
        >
          &larr; back to blog
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

export { BlogPostPage };
