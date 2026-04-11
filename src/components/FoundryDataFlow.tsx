import { useEffect, useRef } from "react";

interface FloatingItem {
  id: string;
  content: React.ReactNode;
  x: number; // % from left
  y: number; // % from top
  size: "sm" | "md" | "lg";
  drift: { x: number; y: number }; // px drift range
  duration: number; // seconds for one float cycle
  delay: number; // animation delay
  opacity: number;
}

const ITEMS: FloatingItem[] = [
  {
    id: "deal-1",
    x: 18,
    y: 12,
    size: "md",
    drift: { x: 3, y: 5 },
    duration: 12,
    delay: 0,
    opacity: 0.9,
    content: (
      <div style={{ padding: "10px 14px", minWidth: 150 }}>
        <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>DEAL</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5" }}>Acme Corp SaaS</div>
        <div style={{ fontSize: 12, color: "#22c55e", marginTop: 4 }}>$24,000 <span style={{ color: "#6b7280", fontWeight: 400, fontSize: 11 }}>· Proposal</span></div>
      </div>
    ),
  },
  {
    id: "kpi-pipeline",
    x: 58,
    y: 8,
    size: "lg",
    drift: { x: 3, y: 4 },
    duration: 14,
    delay: 1.5,
    opacity: 1,
    content: (
      <div style={{ padding: "12px 18px" }}>
        <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: 1 }}>PIPELINE</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#f5f5f5", fontFamily: "JetBrains Mono, monospace" }}>$189.5k</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>8 active</div>
      </div>
    ),
  },
  {
    id: "contact-1",
    x: 38,
    y: 20,
    size: "sm",
    drift: { x: 4, y: 3 },
    duration: 13,
    delay: 0.8,
    opacity: 0.7,
    content: (
      <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#262626", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#9ca3af", fontWeight: 600 }}>CP</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>Chris Porter</div>
          <div style={{ fontSize: 10, color: "#6b7280" }}>Founder</div>
        </div>
      </div>
    ),
  },
  {
    id: "revenue",
    x: 62,
    y: 30,
    size: "md",
    drift: { x: 3, y: 5 },
    duration: 15,
    delay: 2.2,
    opacity: 0.85,
    content: (
      <div style={{ padding: "10px 14px" }}>
        <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: 1 }}>REVENUE</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#22c55e", fontFamily: "JetBrains Mono, monospace" }}>$52.3k</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>$35,181 net</div>
      </div>
    ),
  },
  {
    id: "ledger-row",
    x: 15,
    y: 33,
    size: "md",
    drift: { x: 4, y: 3 },
    duration: 13,
    delay: 3,
    opacity: 0.8,
    content: (
      <div style={{ padding: "8px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
          <span style={{ fontSize: 9, color: "#fff", background: "#dc2626", borderRadius: 3, padding: "1px 5px", fontWeight: 600 }}>out</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>AWS</span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>Software</span>
          <span style={{ fontSize: 12, color: "#f5f5f5", marginLeft: "auto", fontFamily: "JetBrains Mono, monospace" }}>-$847</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200, marginTop: 6, paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <span style={{ fontSize: 9, color: "#fff", background: "#16a34a", borderRadius: 3, padding: "1px 5px", fontWeight: 600 }}>in</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>HealthSync</span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>Product Revenue</span>
          <span style={{ fontSize: 12, color: "#22c55e", marginLeft: "auto", fontFamily: "JetBrains Mono, monospace" }}>+$42,000</span>
        </div>
      </div>
    ),
  },
  {
    id: "task-1",
    x: 40,
    y: 45,
    size: "md",
    drift: { x: 3, y: 4 },
    duration: 12,
    delay: 0.5,
    opacity: 0.85,
    content: (
      <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#262626" strokeWidth="2" />
          <circle cx="12" cy="12" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="38 62" strokeDashoffset="-16" strokeLinecap="round" />
          <text x="12" y="13" textAnchor="middle" fill="#9ca3af" style={{ fontSize: "7px", fontWeight: 600 }}>6/10</text>
        </svg>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>Call prospective customers</div>
          <div style={{ fontSize: 10, color: "#6b7280" }}>Sales · urgent</div>
        </div>
      </div>
    ),
  },
  {
    id: "subscription",
    x: 22,
    y: 60,
    size: "sm",
    drift: { x: 3, y: 4 },
    duration: 14,
    delay: 1.8,
    opacity: 0.7,
    content: (
      <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, minWidth: 150 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>Figma</div>
          <div style={{ fontSize: 10, color: "#6b7280" }}>Software · monthly</div>
        </div>
        <div style={{ fontSize: 12, color: "#f5f5f5", fontFamily: "JetBrains Mono, monospace" }}>$45</div>
      </div>
    ),
  },
  {
    id: "runway",
    x: 55,
    y: 58,
    size: "lg",
    drift: { x: 2, y: 4 },
    duration: 16,
    delay: 4,
    opacity: 0.9,
    content: (
      <div style={{ padding: "12px 18px" }}>
        <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: 1 }}>RUNWAY</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#f5f5f5", fontFamily: "JetBrains Mono, monospace" }}>5 <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 400 }}>months</span></div>
        <div style={{ fontSize: 11, color: "#f59e0b", marginTop: 2 }}>$27.6k/mo burn</div>
      </div>
    ),
  },
  {
    id: "deal-2",
    x: 62,
    y: 74,
    size: "sm",
    drift: { x: 4, y: 3 },
    duration: 13,
    delay: 2.5,
    opacity: 0.65,
    content: (
      <div style={{ padding: "8px 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#e5e7eb" }}>TechFlow Phase 2</div>
        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>$8,500 · Responded · 3d</div>
      </div>
    ),
  },
  {
    id: "activity",
    x: 30,
    y: 76,
    size: "sm",
    drift: { x: 3, y: 4 },
    duration: 12,
    delay: 3.5,
    opacity: 0.7,
    content: (
      <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#1d4ed8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>E</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#e5e7eb" }}>Sent pricing deck</div>
          <div style={{ fontSize: 10, color: "#6b7280" }}>Acme Corp · Mar 22</div>
        </div>
      </div>
    ),
  },
  {
    id: "cash",
    x: 48,
    y: 86,
    size: "md",
    drift: { x: 2, y: 3 },
    duration: 15,
    delay: 5,
    opacity: 0.75,
    content: (
      <div style={{ padding: "10px 14px" }}>
        <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: 1 }}>CASH</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#f5f5f5", fontFamily: "JetBrains Mono, monospace" }}>$125.4k</div>
      </div>
    ),
  },
];

function FloatingCard({ item }: { item: FloatingItem }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationId: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = (timestamp - start) / 1000;

      const xOffset = Math.sin((elapsed + item.delay) / item.duration * Math.PI * 2) * item.drift.x;
      const yOffset = Math.cos((elapsed + item.delay * 1.3) / (item.duration * 0.8) * Math.PI * 2) * item.drift.y;
      const rotation = Math.sin((elapsed + item.delay * 0.7) / (item.duration * 1.2) * Math.PI * 2) * 0.5;

      el.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [item]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${item.x}%`,
        top: `${item.y}%`,
        opacity: item.opacity,
        background: "rgba(20, 20, 20, 0.8)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: 10,
        backdropFilter: "blur(8px)",
        fontFamily: "Inter, system-ui, sans-serif",
        willChange: "transform",
      }}
    >
      {item.content}
    </div>
  );
}

export function FoundryDataFlow() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial gradient for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%, rgba(34, 197, 94, 0.03) 0%, transparent 70%)",
        }}
      />
      {ITEMS.map((item) => (
        <FloatingCard key={item.id} item={item} />
      ))}
    </div>
  );
}
