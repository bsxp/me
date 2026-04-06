import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { POSTS } from "./posts";

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

const COMING_SOON_COUNT = 3;

export function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <Nav />
      <Header />
      <ArticleList />
    </div>
  );
}

function Nav() {
  return (
    <header className="w-full" style={{ height: 80 }}>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12 h-full flex items-center">
        <Link
          to="/"
          className="font-[Inter] text-sm font-normal no-underline"
          style={{ color: "#1a1a1a" }}
        >
          chris.
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <Link
            to="/#about"
            className="text-xs font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            about
          </Link>
          <Link
            to="/"
            className="text-xs font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            projects
          </Link>
          <Link
            to="/blog"
            className="text-xs font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Header() {
  return (
    <section className="w-full" style={{ marginTop: 48, marginBottom: 64 }}>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12">
        <h1
          className="font-[Inter] font-normal leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 36px)", color: "#1a1a1a" }}
        >
          My corner of the internet
        </h1>
        <p
          className="font-['Space_Mono'] font-normal mt-4"
          style={{
            fontSize: 14,
            color: "#6b6b6b",
            lineHeight: 1.7,
            maxWidth: 380,
          }}
        >
          Welcome to the journal of Chris Porter. I write about my journey
          through engineering, urbanism & design.
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

        {/* Coming soon placeholders */}
        <div>
          <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />
          {Array.from({ length: COMING_SOON_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex items-center py-5"
              style={{ borderBottom: "1px solid #e5e5e5" }}
            >
              <span
                className="font-['Space_Mono'] text-sm font-normal"
                style={{ color: "#ccc" }}
              >
                Coming soon
              </span>
            </div>
          ))}
        </div>
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
    <div style={{ paddingBottom: 112 }}>
      {/* Top border */}
      <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />

      <div className="flex flex-col sm:flex-row gap-0">
        {/* Year label */}
        <div className="shrink-0 pt-6 sm:pt-0" style={{ width: 200 }}>
          <span
            className="font-['Space_Mono'] text-xs font-normal sm:leading-[72px]"
            style={{ color: "#999" }}
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
      className="group relative block no-underline"
    >
      <div
        className="flex items-center gap-4 py-5"
        style={{ borderBottom: "1px solid #e5e5e5" }}
      >
        {/* Title */}
        <span
          className="flex-1 font-['Space_Mono'] text-sm font-normal min-w-0"
          style={{ color: "#1a1a1a" }}
        >
          {article.title}
        </span>

        {/* Tag */}
        <span
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-['Space_Mono'] font-normal shrink-0"
          style={{ color: "#999" }}
        >
          {tag}
        </span>

        {/* Arrow */}
        <ArrowUpRight
          size={16}
          className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-5"
          style={{ color: "#999" }}
        />
      </div>

      {/* Black line sweep on hover */}
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
        style={{ backgroundColor: "#1a1a1a" }}
      />
    </Link>
  );
}
