import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function HomeNavBar() {
  const navigate = useNavigate();

  useGSAP(() => {
    // Nav bar starts hidden, slides down once hero is scrolled past
    gsap.fromTo(
      "#home-nav-bar",
      { y: -80, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-hero",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "#home-fixed-header-line",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-hero",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Expand nav bar from 40% to 100% when featured work section hits top
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-work",
        start: "top top",
        end: "+=300",
        scrub: true,
        once: true,
      },
    });

    tl.fromTo(
      "#home-nav-bar",
      { width: "40%" },
      { width: "100%", ease: "power2.inOut", duration: 0.5 },
      0
    );

    tl.fromTo(
      "#home-nav-label",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      0.2
    );

    // Header line: expands and becomes fixed full-width
    const headerLineTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-work",
        start: "top top",
        end: "+=600",
        scrub: true,
        once: true,
      },
    });

    headerLineTl.fromTo(
      "#home-fixed-header-line",
      { width: "0px", autoAlpha: 0 },
      {
        width: "100svw",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      },
      0
    );
  }, []);

  return (
    <>
      <div
        id="home-nav-bar"
        className="fixed top-0 left-0 z-999 bg-[#e9f0f1]"
        style={{ width: "40%", visibility: "hidden" }}
      >
        <div
          className="flex items-center py-2 justify-between w-full h-16"
          style={{ padding: "0 5%" }}
        >
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
          <Button variant="ghost" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Typography variant="span" id="home-nav-label" style={{ opacity: 0 }}>
              Chris Porter
            </Typography>
          </Button>
        </div>
      </div>
      <div
        id="home-fixed-header-line"
        className="fixed top-16 h-px bg-gray-400 left-1/2 -translate-x-1/2 z-1000"
        style={{ opacity: 0, width: 0 }}
      />
    </>
  );
}

export { HomeNavBar };
