import { useEffect, useRef } from "react";

const NODES = [
  {
    id: "collect",
    label: "Collect",
    sublabel: "Reddit API (PRAW)",
    x: 80,
    color: "#FF4500",
  },
  {
    id: "analyze",
    label: "Analyze",
    sublabel: "AWS Comprehend",
    x: 300,
    color: "#3B82F6",
  },
  {
    id: "store",
    label: "Store",
    sublabel: "PostgreSQL",
    x: 520,
    color: "#336791",
  },
];

const NODE_Y = 70;
const NODE_W = 120;
const NODE_H = 56;
const DOT_RADIUS = 4;

// Edges: from right side of one node to left side of the next
const EDGES = [
  {
    x1: NODES[0].x + NODE_W / 2,
    x2: NODES[1].x - NODE_W / 2,
    color: "#FF4500",
  },
  {
    x1: NODES[1].x + NODE_W / 2,
    x2: NODES[2].x - NODE_W / 2,
    color: "#3B82F6",
  },
];

// Details below each node
const DETAILS = [
  {
    node: 0,
    items: ["Posts & comments", "Upvotes & metadata", "Engagement snapshots"],
  },
  {
    node: 1,
    items: ["Sentiment scores", "Entity recognition", "Batched (25/request)"],
  },
  {
    node: 2,
    items: ["Append-only snapshots", "UUID-keyed tables", "Historical trends"],
  },
];

function AnimatedDot({
  x1,
  x2,
  y,
  color,
  delay,
  duration,
}: {
  x1: number;
  x2: number;
  y: number;
  color: string;
  delay: number;
  duration: number;
}) {
  const ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationId: number;
    let start: number | null = null;

    const totalCycle = duration + 1500; // duration + pause before restart

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp - delay;
      const elapsed = (timestamp - start) % totalCycle;
      const progress = Math.min(elapsed / duration, 1);

      const x = x1 + (x2 - x1) * progress;
      const opacity = progress > 0.95 ? 1 - (progress - 0.95) / 0.05 : progress < 0.05 ? progress / 0.05 : 1;

      el.setAttribute("cx", String(x));
      el.setAttribute("opacity", String(opacity));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [x1, x2, delay, duration]);

  return (
    <circle
      ref={ref}
      cx={x1}
      cy={y}
      r={DOT_RADIUS}
      fill={color}
      opacity={0}
    />
  );
}

export function TylePipelineVisual() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl my-8 overflow-hidden">
      <div className="px-6 pt-6 pb-2">
        <p className="text-lg font-semibold text-gray-900">The Pipeline</p>
        <p className="text-sm text-gray-600 mt-1">
          Data flows from Reddit through NLP analysis into timestamped storage.
        </p>
      </div>

      <div className="px-6 pb-2 flex justify-center">
        <svg
          viewBox="0 0 600 140"
          className="w-full max-w-[600px]"
          style={{ overflow: "visible" }}
        >
          {/* Edge lines */}
          {EDGES.map((edge, i) => (
            <line
              key={`edge-${i}`}
              x1={edge.x1}
              y1={NODE_Y}
              x2={edge.x2}
              y2={NODE_Y}
              stroke="#e5e7eb"
              strokeWidth={2}
            />
          ))}

          {/* Arrowheads */}
          {EDGES.map((edge, i) => (
            <polygon
              key={`arrow-${i}`}
              points={`${edge.x2},${NODE_Y} ${edge.x2 - 8},${NODE_Y - 5} ${edge.x2 - 8},${NODE_Y + 5}`}
              fill="#d1d5db"
            />
          ))}

          {/* Animated dots on each edge */}
          {EDGES.map((edge, i) =>
            [0, 1, 2].map((dotIdx) => (
              <AnimatedDot
                key={`dot-${i}-${dotIdx}`}
                x1={edge.x1}
                x2={edge.x2 - 10}
                y={NODE_Y}
                color={edge.color}
                delay={dotIdx * 2400}
                duration={6000}
              />
            ))
          )}

          {/* Nodes */}
          {NODES.map((node) => (
            <g key={node.id}>
              <rect
                x={node.x - NODE_W / 2}
                y={NODE_Y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx={10}
                fill="white"
                stroke={node.color}
                strokeWidth={2}
              />
              <text
                x={node.x}
                y={NODE_Y - 6}
                textAnchor="middle"
                fill={node.color}
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={NODE_Y + 12}
                textAnchor="middle"
                fill="#6b7280"
                style={{ fontSize: "9px", fontWeight: 400 }}
              >
                {node.sublabel}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Detail rows */}
      <div className="px-6 pb-6 grid grid-cols-3 gap-4">
        {DETAILS.map((detail, i) => (
          <div key={i} className="text-center">
            <ul className="mt-2 space-y-1">
              {detail.items.map((item, j) => (
                <li
                  key={j}
                  className="text-xs text-gray-600 flex items-center justify-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: NODES[i].color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
