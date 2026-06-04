import { useEffect, useRef, useState } from "react";

/**
 * Lightweight on-screen FPS meter for diagnosing scroll jank on real devices.
 * Render only when the URL contains ?perf (e.g. chrisporter.org/?perf), so it
 * never shows in normal use. Watch the "min" value while doing the slow scroll
 * — that's the dip we're chasing. Dependency-free; uses requestAnimationFrame.
 */
export function PerfOverlay() {
  const enabled =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("perf");

  const [fps, setFps] = useState(0);
  const [min, setMin] = useState(60);
  const frames = useRef<number[]>([]);
  const minWindow = useRef<{ t: number; v: number }[]>([]);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const tick = (now: number) => {
      const times = frames.current;
      times.push(now);
      // keep ~1s of frame timestamps
      while (times.length > 0 && times[0] <= now - 1000) times.shift();
      const current = times.length;
      setFps(current);

      // rolling min over the last 3s so a brief dip stays visible
      const mw = minWindow.current;
      mw.push({ t: now, v: current });
      while (mw.length > 0 && mw[0].t <= now - 3000) mw.shift();
      setMin(Math.min(...mw.map((m) => m.v)));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;

  const color = fps >= 50 ? "#22c55e" : fps >= 30 ? "#eab308" : "#ef4444";

  return (
    <div
      style={{
        position: "fixed",
        top: 8,
        left: 8,
        zIndex: 999999,
        padding: "6px 10px",
        borderRadius: 8,
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        font: "600 12px/1.3 ui-monospace, monospace",
        pointerEvents: "none",
        textAlign: "left",
      }}
    >
      <div style={{ color }}>{fps} fps</div>
      <div style={{ opacity: 0.7 }}>min {min}</div>
    </div>
  );
}
