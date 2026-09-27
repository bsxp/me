import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";

// Used for unknown URLs (as the catch-all route), for missing posts/projects,
// and as the router's errorElement — in which case a thrown error that isn't
// a 404 gets the "something broke" copy instead.
function NotFoundPage({ title = "Page not found" }: { title?: string }) {
  const error = useRouteError();
  // useRouteError() is null outside an error boundary
  const isCrash = error != null && !(isRouteErrorResponse(error) && error.status === 404);
  const heading = isCrash ? "Something broke" : title;

  usePageMeta(heading);

  return (
    <div className="min-h-svh flex flex-col" style={{ backgroundColor: "#fafafa" }}>
      <header className="w-full" style={{ height: 80 }}>
        <div className="max-w-[1000px] mx-auto px-8 sm:px-12 h-full flex items-center">
          <Link to="/" className="font-[Inter] text-sm font-normal no-underline" style={{ color: "#1a1a1a" }}>
            chris.
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="w-full max-w-[1000px] mx-auto px-8 sm:px-12 pb-24">
          <span className="font-['Space_Mono'] text-xs uppercase tracking-widest" style={{ color: "#6b6b6b" }}>
            {isCrash ? "Error" : "404"}
          </span>
          <h1
            className="font-[Inter] font-bold leading-[0.95] tracking-tight mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "#1a1a1a" }}
          >
            {heading}.
          </h1>
          <p
            className="font-['Space_Mono'] mt-6"
            style={{ fontSize: 14, lineHeight: 1.7, color: "#6b6b6b", maxWidth: 420 }}
          >
            {isCrash
              ? "Something went wrong loading this page. Try again, or head somewhere else."
              : "Whatever was here has moved, or never existed. Here's where you can go instead."}
          </p>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
            {[
              { to: "/", label: "Home" },
              { to: "/#projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-[Inter] text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: "#1a1a1a" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}

export { NotFoundPage };
