import { Link, useParams } from "react-router-dom";
import { FAKE_ARTICLES } from "@/data/articles";

function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const article = FAKE_ARTICLES.find((a) => String(a.id) === postId);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#fafafa" }}
    >
      <h1
        className="font-[Inter] font-bold tracking-tight"
        style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#1a1a1a" }}
      >
        {article?.title ?? `Post ${postId}`}
      </h1>
      <p
        className="font-[Inter] font-normal mt-4"
        style={{ fontSize: 16, color: "#999" }}
      >
        Migrating from old site, coming soon.
      </p>
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

export { BlogPostPage };
