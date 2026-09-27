import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

const linkClass = "font-['Space_Mono'] text-xs text-faint no-underline hover:opacity-70 transition-opacity";
const labelClass = "font-[Inter] text-xs text-dim uppercase tracking-widest mb-2";

// The site-wide footer. The home page passes onAbout/onProjects so those links
// scroll within the page (a same-path Link wouldn't move it); elsewhere they
// route to the home page, which scrolls to the hash on mount.
function SiteFooter({ onAbout, onProjects }: { onAbout?: () => void; onProjects?: () => void }) {
  const inPage = (handler?: () => void) =>
    handler
      ? (e: MouseEvent) => {
          e.preventDefault();
          handler();
        }
      : undefined;

  return (
    <footer className="w-full py-16 px-8 sm:px-12 bg-night">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full h-px mb-12 bg-night-line" />
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left — name + location */}
          <div>
            <p className="font-[Inter] font-bold text-lg text-paper">Chris Porter</p>
            <p className="font-['Space_Mono'] text-xs text-dim mt-2">Austin, Texas</p>
          </div>

          {/* Middle — social links */}
          <div className="flex flex-col gap-2">
            <p className={labelClass}>Social</p>
            <Link to="/contact" className={linkClass}>
              Email
            </Link>
            <a href="https://linkedin.com/in/chris-porterwa" target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
            <a href="https://github.com/bsxp" target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </div>

          {/* Right — site links */}
          <div className="flex flex-col gap-2">
            <p className={labelClass}>Site</p>
            <Link to="/#about" onClick={inPage(onAbout)} className={linkClass}>
              About
            </Link>
            <Link to="/#projects" onClick={inPage(onProjects)} className={linkClass}>
              Projects
            </Link>
            <Link to="/blog" className={linkClass}>
              Blog
            </Link>
          </div>
        </div>

        <div className="w-full h-px mt-12 mb-6 bg-night-line" />
        <div className="flex items-center justify-between">
          <p className="font-['Space_Mono'] text-xs text-night-edge">&copy; {new Date().getFullYear()} Chris Porter</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-['Space_Mono'] text-xs text-dim cursor-pointer transition-opacity hover:opacity-70 bg-transparent border-0 p-0"
          >
            Take me to the top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
