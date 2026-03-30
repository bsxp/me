export function BorderLinesOverlay() {
  const color = "rgba(255,255,255,0.08)";
  const dotColor = "rgba(255,255,255,0.18)";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-16 left-16 right-16" style={{ height: 1, backgroundColor: color }} />
      <div className="absolute bottom-16 left-16 right-16" style={{ height: 1, backgroundColor: color }} />
      <div className="absolute top-16 bottom-16 left-16" style={{ width: 1, backgroundColor: color }} />
      <div className="absolute top-16 bottom-16 right-16" style={{ width: 1, backgroundColor: color }} />
      {[
        { top: 64, left: 64 },
        { top: 64, right: 64 },
        { bottom: 64, left: 64 },
        { bottom: 64, right: 64 },
      ].map((pos, i) => (
        <CrosshairMark key={i} pos={pos} color={dotColor} />
      ))}
    </div>
  );
}

export function GridCoordsOverlay() {
  const cols = 6;
  const rows = 4;
  const lineColor = "rgba(255,255,255,0.04)";
  const labelColor = "rgba(255,255,255,0.1)";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: cols - 1 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full"
          style={{ left: `${((i + 1) / cols) * 100}%`, width: 1, backgroundColor: lineColor }}
        />
      ))}
      {Array.from({ length: rows - 1 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full"
          style={{ top: `${((i + 1) / rows) * 100}%`, height: 1, backgroundColor: lineColor }}
        />
      ))}
      {Array.from({ length: cols - 1 }).map((_, ci) =>
        Array.from({ length: rows - 1 }).map((_, ri) => (
          <span
            key={`${ci}-${ri}`}
            className="absolute font-[Inter]"
            style={{
              left: `${((ci + 1) / cols) * 100}%`,
              top: `${((ri + 1) / rows) * 100}%`,
              fontSize: 9,
              color: labelColor,
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

function CrosshairMark({ pos, color }: { pos: Record<string, number>; color: string }) {
  const size = 24;
  return (
    <div
      className="absolute"
      style={Object.fromEntries(Object.entries(pos).map(([k, v]) => [k, v])) as React.CSSProperties}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2"
        style={{ width: size, height: 1, backgroundColor: color, marginLeft: -size / 2 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2"
        style={{ width: 1, height: size, backgroundColor: color, marginTop: -size / 2 }}
      />
    </div>
  );
}
