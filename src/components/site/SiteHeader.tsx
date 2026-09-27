import { Link } from "react-router-dom";

const linkClass = "text-xs font-[Inter] font-normal text-ink no-underline transition-opacity hover:opacity-50";

// The site-wide header. On the home page the logo/about/projects items scroll
// within the page (and the hero animation moves #nav-logo / #nav-links), so
// it passes handlers; everywhere else they're plain links back to home.
function SiteHeader({
  onLogoClick,
  onAbout,
  onProjects,
}: {
  onLogoClick?: () => void;
  onAbout?: () => void;
  onProjects?: () => void;
}) {
  return (
    <header className="w-full" style={{ height: 80 }}>
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 h-full flex items-center">
        {onLogoClick ? (
          <button
            id="nav-logo"
            onClick={onLogoClick}
            className="hidden sm:flex font-[Inter] text-sm font-normal text-ink items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          >
            chris.
          </button>
        ) : (
          <Link id="nav-logo" to="/" className="hidden sm:flex font-[Inter] text-sm font-normal text-ink no-underline">
            chris.
          </Link>
        )}
        <nav id="nav-links" className="flex items-center gap-8 mx-auto sm:mx-0 sm:ml-auto">
          {onAbout ? (
            <button onClick={onAbout} className={`${linkClass} cursor-pointer bg-transparent border-0 p-0`}>
              about
            </button>
          ) : (
            <Link to="/#about" className={linkClass}>
              about
            </Link>
          )}
          {onProjects ? (
            <button onClick={onProjects} className={`${linkClass} cursor-pointer bg-transparent border-0 p-0`}>
              projects
            </button>
          ) : (
            <Link to="/#projects" className={linkClass}>
              projects
            </Link>
          )}
          <Link to="/blog" className={linkClass}>
            blog
          </Link>
          <Link to="/contact" className={linkClass}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { SiteHeader };
