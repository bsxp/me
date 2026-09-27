import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { POSTS } from "./posts";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

gsap.registerPlugin(useGSAP);

interface ArticleEntry {
  id: string;
  title: string;
  tags: string[];
  date: Date;
  href: string;
}

function getAllArticles(): ArticleEntry[] {
  return POSTS.map((p) => ({
    id: p.meta.slug,
    title: p.meta.title,
    tags: p.meta.tags,
    date: p.meta.date,
    href: `/blog/posts/${p.meta.slug}`,
  })).sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Group articles by year
function groupByYear(
  articles: ArticleEntry[]
): Record<string, ArticleEntry[]> {
  const groups: Record<string, ArticleEntry[]> = {};
  for (const article of articles) {
    const year = article.date.getFullYear().toString();
    if (!groups[year]) groups[year] = [];
    groups[year].push(article);
  }
  return groups;
}

const allArticles = getAllArticles();
const grouped = groupByYear(allArticles);
const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

export function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageMeta("Blog", "Writing on engineering, urbanism & design.");

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#blog-header",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    tl.fromTo(
      ".blog-article-row",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.07 },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: "var(--color-paper)" }}>
      <SiteHeader />
      <Header />
      <ArticleList />
      <SiteFooter />
    </div>
  );
}


function Header() {
  return (
    <section id="blog-header" className="w-full" style={{ marginTop: 48, marginBottom: 64, opacity: 0 }}>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12">
        <h1
          className="font-[Inter] font-normal leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 36px)", color: "var(--color-ink)" }}
        >
          Welcome to my mind palace
        </h1>
        <p
          className="font-['Space_Mono'] font-normal mt-4"
          style={{
            fontSize: 14,
            color: "var(--color-dim)",
            lineHeight: 1.7,
            maxWidth: 380,
          }}
        >
          Share in my journey through engineering, urbanism & design.
        </p>
      </div>
    </section>
  );
}

function ArticleList() {
  return (
    <section className="w-full" style={{ paddingBottom: 128 }}>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12">
        {sortedYears.map((year) => (
          <YearGroup key={year} year={year} articles={grouped[year]} />
        ))}
      </div>
    </section>
  );
}

function YearGroup({
  year,
  articles,
}: {
  year: string;
  articles: ArticleEntry[];
}) {
  return (
    <div style={{ paddingBottom: 64 }}>
      {/* Top border */}
      <div className="w-full h-px" style={{ backgroundColor: "var(--color-line)" }} />

      <div className="flex flex-col sm:flex-row gap-0">
        {/* Year label */}
        <div className="shrink-0 pt-6 sm:pt-0" style={{ width: 200 }}>
          <span
            className="font-['Space_Mono'] text-xs font-normal sm:leading-[72px]"
            style={{ color: "var(--color-faint)" }}
          >
            {year}
          </span>
        </div>

        {/* Articles */}
        <div className="flex-1">
          {articles.map((article) => (
            <ArticleRow key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleRow({ article }: { article: ArticleEntry }) {
  const tag = article.tags[0];

  return (
    <Link
      to={article.href}
      className="blog-article-row group relative block no-underline"
      style={{ opacity: 0 }}
    >
      <div
        className="flex items-center gap-4 py-5"
        style={{ borderBottom: "1px solid var(--color-line)" }}
      >
        {/* Title */}
        <span
          className="flex-1 font-['Space_Mono'] text-sm font-normal min-w-0"
          style={{ color: "var(--color-ink)" }}
        >
          {article.title}
        </span>

        {/* Tag */}
        <span
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-['Space_Mono'] font-normal shrink-0"
          style={{ color: "var(--color-faint)" }}
        >
          {tag}
        </span>

        {/* Arrow */}
        <ArrowUpRight
          size={16}
          className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-5"
          style={{ color: "var(--color-faint)" }}
        />
      </div>

      {/* Black line sweep on hover */}
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
        style={{ backgroundColor: "var(--color-ink)" }}
      />
    </Link>
  );
}
