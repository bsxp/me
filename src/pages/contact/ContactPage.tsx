import { Link } from "react-router-dom";
import Conservatory from "@/assets/about-conservatory.png";
import AlleyNight from "@/assets/about-alley-night.png";
import PhoneBooths from "@/assets/about-phone-booths.png";

function ContactPage() {
  return (
    <div
      className="min-h-screen lg:h-screen w-full lg:overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Nav */}
      <header className="w-full shrink-0 z-20 relative" style={{ height: 80 }}>
        <div className="px-8 sm:px-12 h-full flex items-center">
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
              to="/#projects"
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
            <Link
              to="/contact"
              className="text-xs font-[Inter] font-normal no-underline transition-opacity hover:opacity-50"
              style={{ color: "#1a1a1a" }}
            >
              contact
            </Link>
          </nav>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />
      </header>

      {/* Body */}
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-80px)]">
        {/* Left — contact info */}
        <div className="lg:w-[40%] shrink-0 flex flex-col justify-between px-8 sm:px-12 py-10">
          <div>
            <h1
              className="font-[Inter] font-light tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1a1a1a", lineHeight: 1.05 }}
            >
              Get in touch
            </h1>

            <div className="flex flex-col gap-6 mt-10">
              <div>
                <p className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-2" style={{ color: "#999" }}>
                  general
                </p>
                <a
                  href="mailto:hi@chrisporter.org"
                  className="font-[Inter] text-base font-medium no-underline block transition-opacity hover:opacity-60"
                  style={{ color: "#1a1a1a" }}
                >
                  hi@chrisporter.org
                </a>
              </div>

              <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />

              <div>
                <p className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-2" style={{ color: "#999" }}>
                  social
                </p>
                <div className="flex gap-8">
                  <a href="https://linkedin.com/in/chris-porterwa" target="_blank" rel="noopener noreferrer" className="font-[Inter] text-base font-medium no-underline transition-opacity hover:opacity-60" style={{ color: "#1a1a1a" }}>
                    LinkedIn
                  </a>
                  <a href="https://github.com/bsxp" target="_blank" rel="noopener noreferrer" className="font-[Inter] text-base font-medium no-underline transition-opacity hover:opacity-60" style={{ color: "#1a1a1a" }}>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />

              <div>
                <p className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-2" style={{ color: "#999" }}>
                  location
                </p>
                <p className="font-[Inter] text-base font-medium" style={{ color: "#1a1a1a" }}>
                  Austin, Texas
                </p>
              </div>
            </div>
          </div>

          <p className="font-['Space_Mono'] text-xs" style={{ color: "#999" }}>
            &copy; {new Date().getFullYear()} Chris Porter
          </p>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px shrink-0" style={{ backgroundColor: "#e5e5e5" }} />

        {/* Right — image collage (desktop: absolute positioned, mobile: stacked) */}
        {/* Desktop */}
        <div className="hidden lg:block flex-1 relative min-h-0">
          <div className="absolute top-0 left-0 right-0" style={{ height: "58%" }}>
            <img src={Conservatory} alt="Conservatory" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-0 right-0" style={{ top: "58%", height: 1, backgroundColor: "#e5e5e5" }} />
          <div className="absolute left-0" style={{ top: "calc(58% + 1px)", bottom: 0, width: "55%" }}>
            <img src={AlleyNight} alt="Night alley" className="w-full h-full object-cover" />
          </div>
          <div className="absolute right-0" style={{ top: "calc(58% + 1px)", bottom: 0, left: "calc(55% + 1px)" }}>
            <img src={PhoneBooths} alt="Phone booths" className="w-full h-full object-cover" />
          </div>
          <div className="absolute" style={{ top: "58%", bottom: 0, left: "55%", width: 1, backgroundColor: "#e5e5e5" }} />
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />
          <div style={{ height: 240 }}>
            <img src={Conservatory} alt="Conservatory" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-px" style={{ backgroundColor: "#e5e5e5" }} />
          <div className="grid grid-cols-2" style={{ height: 180 }}>
            <img src={AlleyNight} alt="Night alley" className="w-full h-full object-cover" />
            <img src={PhoneBooths} alt="Phone booths" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactPage };
