import { Link } from "react-router-dom";

export function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <Nav />
      <Header />
      <ComingSoon />
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
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            About
          </Link>
          <Link
            to="/"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-sm font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
            style={{ color: "#1a1a1a" }}
          >
            Blog
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

function ComingSoon() {
  return (
    <section className="w-full" style={{ paddingBottom: 128 }}>
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12">
        <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />
        {["Coming soon", "Coming soon", "Coming soon"].map((_, i) => (
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
    </section>
  );
}
