import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "@/pages/project/Footer";

gsap.registerPlugin(ScrollTrigger);

function HomeFooterSection() {
  useGSAP(() => {
    gsap.fromTo(
      "#home-footer",
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#home-blog",
          start: "bottom bottom",
          end: "+=300",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="home-footer"
      className="fixed left-1/2 -translate-x-1/2 bottom-4 z-50"
      style={{ opacity: 0 }}
    >
      <Footer />
    </div>
  );
}

export { HomeFooterSection };
