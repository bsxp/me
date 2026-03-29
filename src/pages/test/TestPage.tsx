import { useEffect, useRef, useState } from "react";
import NoiseTexture from "@/assets/noise.png";

export function TestPage() {
  return (
    <div className="w-full">
      {/* 1. Dot Grid */}
      <DemoSection title="1. Dot Grid" bg="#fafafa">
        <DotGrid />
        <DemoContent />
      </DemoSection>

      {/* 2. Horizontal Scan Lines */}
      <DemoSection title="2. Scan Lines" bg="#fafafa">
        <ScanLines />
        <DemoContent />
      </DemoSection>

      {/* 3. Noise Texture */}
      <DemoSection title="3. Noise Texture" bg="#fafafa">
        <NoiseOverlay />
        <DemoContent />
      </DemoSection>

      {/* 4. Moving Gradient Orb */}
      <DemoSection title="4. Gradient Orb" bg="#fafafa">
        <GradientOrb />
        <DemoContent />
      </DemoSection>

      {/* 5. Parallax Grid Lines */}
      <DemoSection title="5. Parallax Grid Lines" bg="#fafafa">
        <ParallaxGrid />
        <DemoContent />
      </DemoSection>

      {/* 6. Cursor Spotlight */}
      <DemoSection title="6. Cursor Spotlight" bg="#fafafa">
        <CursorSpotlight />
        <DemoContent />
      </DemoSection>

      {/* 7. Border Lines */}
      <DemoSection title="7. Border Lines" bg="#fafafa">
        <BorderLines />
        <DemoContent />
      </DemoSection>

      {/* 8. Corner Crosshairs */}
      <DemoSection title="8. Corner Crosshairs" bg="#fafafa">
        <CornerCrosshairs />
        <DemoContent />
      </DemoSection>

      {/* 9. Grid Coordinates */}
      <DemoSection title="9. Grid Coordinates" bg="#fafafa">
        <GridCoordinates />
        <DemoContent />
      </DemoSection>

      {/* 10. Border Lines + Corner Crosshairs combined */}
      <DemoSection title="10. Borders + Crosshairs" bg="#f0f0f0">
        <BorderLines darker />
        <CornerCrosshairs darker />
        <DemoContent />
      </DemoSection>

      {/* 11. Borders + Crosshairs + Grid Coordinates */}
      <DemoSection title="11. Borders + Crosshairs + Grid Coords" bg="#f0f0f0">
        <BorderLines darker />
        <CornerCrosshairs darker />
        <GridCoordinates />
        <DemoContent />
      </DemoSection>
    </div>
  );
}

function DemoSection({
  title,
  bg,
  children,
}: {
  title: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: bg, height: "100vh" }}
    >
      <div className="absolute top-6 left-8 z-20">
        <span
          className="font-[Inter] text-xs font-normal uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ color: "#1a1a1a", border: "1px solid #ccc" }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function DemoContent() {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full max-w-[1400px] mx-auto px-8 sm:px-12">
      <h2
        className="font-[Inter] font-bold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#1a1a1a" }}
      >
        Hearth — Using urban data
        <br />
        to reshape cities
      </h2>
      <p
        className="font-[Inter] font-normal mt-6"
        style={{ color: "#777", fontSize: 16, maxWidth: 500 }}
      >
        Building tools at the intersection of technology and cities. Exploring
        how data and design can make urban spaces more human-centric.
      </p>
    </div>
  );
}

/* ─── 1. Dot Grid ─── */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

/* ─── 2. Scan Lines ─── */
function ScanLines() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px)",
      }}
    />
  );
}

/* ─── 3. Noise Texture ─── */
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url(${NoiseTexture})`,
        backgroundRepeat: "repeat",
        opacity: 0.25,
        mixBlendMode: "soft-light",
      }}
    />
  );
}

/* ─── 4. Gradient Orb ─── */
function GradientOrb() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
          top: "20%",
          left: "10%",
          transform: `translate(${Math.sin(scroll * 0.002) * 50}px, ${Math.cos(scroll * 0.002) * 30}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0) 70%)",
          bottom: "10%",
          right: "15%",
          transform: `translate(${Math.cos(scroll * 0.003) * 40}px, ${Math.sin(scroll * 0.003) * 40}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}

/* ─── 5. Parallax Grid Lines ─── */
function ParallaxGrid() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lines = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Vertical lines */}
      {lines.map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full"
          style={{
            left: `${(i + 1) * 12.5}%`,
            width: 1,
            backgroundColor: "rgba(0,0,0,0.04)",
            transform: `translateY(${scroll * (0.02 + i * 0.005)}px)`,
          }}
        />
      ))}
      {/* Horizontal lines */}
      {lines.map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full"
          style={{
            top: `${(i + 1) * 12.5}%`,
            height: 1,
            backgroundColor: "rgba(0,0,0,0.04)",
            transform: `translateX(${scroll * (0.01 + i * 0.003)}px)`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── 6. Cursor Spotlight ─── */
function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0">
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
          left: pos.x - 250,
          top: pos.y - 250,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
}

/* ─── 7. Border Lines ─── */
function BorderLines({ darker = false }: { darker?: boolean }) {
  const lineAlpha = darker ? 0.15 : 0.06;
  const dotAlpha = darker ? 0.3 : 0.15;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Top */}
      <div
        className="absolute top-16 left-8 right-8"
        style={{ height: 1, backgroundColor: `rgba(0,0,0,${lineAlpha})` }}
      />
      {/* Bottom */}
      <div
        className="absolute bottom-16 left-8 right-8"
        style={{ height: 1, backgroundColor: `rgba(0,0,0,${lineAlpha})` }}
      />
      {/* Left */}
      <div
        className="absolute top-16 bottom-16 left-8"
        style={{ width: 1, backgroundColor: `rgba(0,0,0,${lineAlpha})` }}
      />
      {/* Right */}
      <div
        className="absolute top-16 bottom-16 right-8"
        style={{ width: 1, backgroundColor: `rgba(0,0,0,${lineAlpha})` }}
      />
      {/* Corner marks */}
      {[
        { top: 16, left: 8 },
        { top: 16, right: 8 },
        { bottom: 16, left: 8 },
        { bottom: 16, right: 8 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...Object.fromEntries(
              Object.entries(pos).map(([k, v]) => [k, `${v}px`])
            ) as React.CSSProperties,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: `rgba(0,0,0,${dotAlpha})`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── 8. Corner Crosshairs ─── */
function CornerCrosshairs({ darker = false }: { darker?: boolean }) {
  const size = 24;
  const color = darker ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.12)";
  const positions = [
    { top: 64, left: 32 },
    { top: 64, right: 32 },
    { bottom: 64, left: 32 },
    { bottom: 64, right: 32 },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...(Object.fromEntries(
              Object.entries(pos).map(([k, v]) => [k, v])
            ) as React.CSSProperties),
          }}
        >
          {/* Horizontal */}
          <div
            className="absolute top-1/2 left-1/2 -translate-y-1/2"
            style={{
              width: size,
              height: 1,
              backgroundColor: color,
              marginLeft: -size / 2,
            }}
          />
          {/* Vertical */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2"
            style={{
              width: 1,
              height: size,
              backgroundColor: color,
              marginTop: -size / 2,
            }}
          />
        </div>
      ))}
      {/* Center crosshair, larger */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute top-1/2 left-1/2 -translate-y-1/2"
          style={{
            width: 40,
            height: 1,
            backgroundColor: darker ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.06)",
            marginLeft: -20,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 40,
            backgroundColor: darker ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.06)",
            marginTop: -20,
          }}
        />
      </div>
    </div>
  );
}

/* ─── 9. Grid Coordinates ─── */
function GridCoordinates() {
  const cols = 6;
  const rows = 4;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Grid lines */}
      {Array.from({ length: cols - 1 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full"
          style={{
            left: `${((i + 1) / cols) * 100}%`,
            width: 1,
            backgroundColor: "rgba(0,0,0,0.03)",
          }}
        />
      ))}
      {Array.from({ length: rows - 1 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full"
          style={{
            top: `${((i + 1) / rows) * 100}%`,
            height: 1,
            backgroundColor: "rgba(0,0,0,0.03)",
          }}
        />
      ))}
      {/* Coordinate labels at intersections */}
      {Array.from({ length: cols - 1 }).map((_, ci) =>
        Array.from({ length: rows - 1 }).map((_, ri) => (
          <span
            key={`${ci}-${ri}`}
            className="absolute font-[Inter]"
            style={{
              left: `${((ci + 1) / cols) * 100}%`,
              top: `${((ri + 1) / rows) * 100}%`,
              fontSize: 9,
              color: "rgba(0,0,0,0.1)",
              transform: "translate(4px, -14px)",
              letterSpacing: "0.05em",
            }}
          >
            {String(ci + 1).padStart(2, "0")}:{String(ri + 1).padStart(2, "0")}
          </span>
        ))
      )}
    </div>
  );
}
