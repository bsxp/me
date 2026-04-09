import { useCallback, useState } from "react";

// Node positions for the peril sub-graph SVG
const NODES = {
  "pIn.vehSymbol": { x: 30, y: 60, label: "Vehicle\nSymbol", type: "input" },
  "pIn.driverAge": { x: 30, y: 180, label: "Driver\nAge", type: "input" },
  "collision.lk.baseRate": {
    x: 220,
    y: 60,
    label: "Base Rate\nLookup",
    type: "lookup",
  },
  "collision.lk.ageFac": {
    x: 220,
    y: 180,
    label: "Age Factor\nLookup",
    type: "lookup",
  },
  "collision.op.premium": {
    x: 410,
    y: 120,
    label: "Multiply",
    type: "operation",
  },
  "collision.pOut.premium": {
    x: 570,
    y: 120,
    label: "Collision\nPremium",
    type: "output",
  },
};

const EDGES = [
  { from: "pIn.vehSymbol", to: "collision.lk.baseRate" },
  { from: "pIn.driverAge", to: "collision.lk.ageFac" },
  { from: "collision.lk.baseRate", to: "collision.op.premium" },
  { from: "collision.lk.ageFac", to: "collision.op.premium" },
  { from: "collision.op.premium", to: "collision.pOut.premium" },
];

const NODE_W = 120;
const NODE_H = 50;

type NodeType = "input" | "lookup" | "operation" | "output";

const NODE_COLORS: Record<NodeType, { fill: string; stroke: string; activeFill: string; activeStroke: string; activeText: string }> = {
  input: { fill: "#fef9c3", stroke: "#eab308", activeFill: "#fef08a", activeStroke: "#ca8a04", activeText: "#713f12" },
  lookup: { fill: "#eff6ff", stroke: "#3b82f6", activeFill: "#bfdbfe", activeStroke: "#2563eb", activeText: "#1e3a5f" },
  operation: { fill: "#f3f4f6", stroke: "#6b7280", activeFill: "#d1d5db", activeStroke: "#374151", activeText: "#111827" },
  output: { fill: "#dcfce7", stroke: "#22c55e", activeFill: "#bbf7d0", activeStroke: "#16a34a", activeText: "#14532d" },
};

const FILTER_BUTTONS: { type: NodeType; label: string }[] = [
  { type: "input", label: "Inputs" },
  { type: "lookup", label: "Lookups" },
  { type: "operation", label: "Operations" },
  { type: "output", label: "Outputs" },
];

// Map each JSON line index to the node/edge IDs it relates to
type HighlightTarget = {
  nodes?: string[];
  edges?: string[];
};

type JsonLine = {
  text: string;
  indent: number;
  target?: HighlightTarget;
  nodeType?: NodeType; // which filter category this line belongs to
};

const JSON_LINES: JsonLine[] = [
  { text: "{", indent: 0 },
  { text: '"id": "collision",', indent: 1 },
  { text: '"nodes": [', indent: 1 },
  {
    text: '{ "type": "input", "id": "pIn.vehSymbol" }',
    indent: 2,
    target: { nodes: ["pIn.vehSymbol"] },
    nodeType: "input",
  },
  {
    text: '{ "type": "input", "id": "pIn.driverAge" }',
    indent: 2,
    target: { nodes: ["pIn.driverAge"] },
    nodeType: "input",
  },
  {
    text: '{ "type": "lookup", "id": "lk.baseRate", ... }',
    indent: 2,
    target: { nodes: ["collision.lk.baseRate"] },
    nodeType: "lookup",
  },
  {
    text: '{ "type": "lookup", "id": "lk.ageFac", ... }',
    indent: 2,
    target: { nodes: ["collision.lk.ageFac"] },
    nodeType: "lookup",
  },
  {
    text: '{ "type": "operation", "operator": "multiply" }',
    indent: 2,
    target: { nodes: ["collision.op.premium"] },
    nodeType: "operation",
  },
  {
    text: '{ "type": "output", "id": "pOut.premium" }',
    indent: 2,
    target: { nodes: ["collision.pOut.premium"] },
    nodeType: "output",
  },
  { text: "],", indent: 1 },
  { text: '"edges": [', indent: 1 },
  {
    text: '{ "from": "pIn.vehSymbol", "to": "lk.baseRate" }',
    indent: 2,
    target: {
      edges: ["pIn.vehSymbol->collision.lk.baseRate"],
      nodes: ["pIn.vehSymbol", "collision.lk.baseRate"],
    },
    nodeType: "input",
  },
  {
    text: '{ "from": "pIn.driverAge", "to": "lk.ageFac" }',
    indent: 2,
    target: {
      edges: ["pIn.driverAge->collision.lk.ageFac"],
      nodes: ["pIn.driverAge", "collision.lk.ageFac"],
    },
    nodeType: "input",
  },
  {
    text: '// lookups -> multiply -> output',
    indent: 2,
    target: {
      edges: [
        "collision.lk.baseRate->collision.op.premium",
        "collision.lk.ageFac->collision.op.premium",
        "collision.op.premium->collision.pOut.premium",
      ],
      nodes: [
        "collision.lk.baseRate", "collision.lk.ageFac",
        "collision.op.premium", "collision.pOut.premium",
      ],
    },
    nodeType: "lookup",
  },
  { text: "...", indent: 2 },
  { text: "]", indent: 1 },
  { text: "}", indent: 0 },
];

// Precompute which nodes and edges belong to each filter type
const NODES_BY_TYPE: Record<NodeType, Set<string>> = {
  input: new Set<string>(),
  lookup: new Set<string>(),
  operation: new Set<string>(),
  output: new Set<string>(),
};
for (const [id, node] of Object.entries(NODES)) {
  NODES_BY_TYPE[node.type as NodeType].add(id);
}

// An edge is highlighted by a filter if EITHER endpoint's type is in the active filters
const EDGES_BY_TYPE: Record<NodeType, Set<string>> = {
  input: new Set<string>(),
  lookup: new Set<string>(),
  operation: new Set<string>(),
  output: new Set<string>(),
};
for (const edge of EDGES) {
  const fromType = NODES[edge.from as keyof typeof NODES].type as NodeType;
  const toType = NODES[edge.to as keyof typeof NODES].type as NodeType;
  const edgeId = `${edge.from}->${edge.to}`;
  EDGES_BY_TYPE[fromType].add(edgeId);
  EDGES_BY_TYPE[toType].add(edgeId);
}

function GraphSVG({
  hoverHighlight,
  hoverNodeType,
  filterNodeIds,
  filterEdgeIds,
}: {
  hoverHighlight: HighlightTarget | null;
  hoverNodeType: NodeType | null;
  filterNodeIds: Set<string>;
  filterEdgeIds: Set<string>;
}) {
  const hoverColors = hoverNodeType ? NODE_COLORS[hoverNodeType] : NODE_COLORS.input;
  const hoverNodes = new Set(hoverHighlight?.nodes || []);
  const hoverEdges = new Set(hoverHighlight?.edges || []);
  const hasHover = hoverNodes.size > 0 || hoverEdges.size > 0;
  const hasFilter = filterNodeIds.size > 0 || filterEdgeIds.size > 0;
  const hasAny = hasHover || hasFilter;

  return (
    <svg viewBox="0 0 700 280" className="w-full h-full">
      {/* Edges */}
      {EDGES.map((edge) => {
        const from = NODES[edge.from as keyof typeof NODES];
        const to = NODES[edge.to as keyof typeof NODES];
        const edgeId = `${edge.from}->${edge.to}`;

        const isHovered = hoverEdges.has(edgeId);
        const isFiltered = filterEdgeIds.has(edgeId);
        const isActive = isHovered || isFiltered;
        const dimmed = hasAny && !isActive;

        const x1 = from.x + NODE_W;
        const y1 = from.y + NODE_H / 2;
        const x2 = to.x;
        const y2 = to.y + NODE_H / 2;
        const cpx = (x1 + x2) / 2;

        // Use the "from" node's type color when filtered
        const fromColors = NODE_COLORS[from.type as NodeType];
        const stroke = isHovered
          ? hoverColors.activeStroke
          : isFiltered
            ? fromColors.activeStroke
            : "#94a3b8";

        return (
          <path
            key={edgeId}
            d={`M ${x1} ${y1} C ${cpx} ${y1}, ${cpx} ${y2}, ${x2} ${y2}`}
            fill="none"
            stroke={stroke}
            strokeWidth={isActive ? 2.5 : 1.5}
            opacity={dimmed ? 0.12 : 1}
            style={{ transition: "all 0.2s ease" }}
          />
        );
      })}

      {/* Nodes */}
      {Object.entries(NODES).map(([id, node]) => {
        const isHovered = hoverNodes.has(id);
        const isFiltered = filterNodeIds.has(id);
        const isActive = isHovered || isFiltered;
        const dimmed = hasAny && !isActive;
        const colors = NODE_COLORS[node.type as NodeType];
        const lines = node.label.split("\n");

        return (
          <g
            key={id}
            opacity={dimmed ? 0.12 : 1}
            style={{ transition: "all 0.2s ease" }}
          >
            <rect
              x={node.x}
              y={node.y}
              width={NODE_W}
              height={NODE_H}
              rx={6}
              fill={
                isHovered
                  ? hoverColors.activeFill
                  : isFiltered
                    ? colors.activeFill
                    : colors.fill
              }
              stroke={
                isHovered
                  ? hoverColors.activeStroke
                  : isFiltered
                    ? colors.activeStroke
                    : colors.stroke
              }
              strokeWidth={isActive ? 2.5 : 1.5}
            />
            {lines.map((line, i) => (
              <text
                key={i}
                x={node.x + NODE_W / 2}
                y={
                  node.y +
                  NODE_H / 2 +
                  (i - (lines.length - 1) / 2) * 14
                }
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11}
                fontFamily="Google Sans Code, monospace"
                fontWeight={isActive ? 600 : 400}
                fill={
                  isHovered
                    ? hoverColors.activeText
                    : isFiltered
                      ? colors.activeText
                      : "#334155"
                }
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function FilterToggle({
  type,
  label,
  active,
  onToggle,
}: {
  type: NodeType;
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  const colors = NODE_COLORS[type];
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer"
      style={{
        fontFamily: "Google Sans Code, monospace",
        backgroundColor: active ? colors.activeFill : "#f8fafc",
        border: `1.5px solid ${active ? colors.activeStroke : "#e2e8f0"}`,
        color: active ? colors.activeText : "#64748b",
      }}
    >
      {label}
    </button>
  );
}

export function InteractiveSchema() {
  const [hoverHighlight, setHoverHighlight] =
    useState<HighlightTarget | null>(null);
  const [hoverNodeType, setHoverNodeType] = useState<NodeType | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<NodeType>>(
    new Set()
  );

  const toggleFilter = useCallback((type: NodeType) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }, []);

  // Build the combined set of filtered node/edge IDs
  const filterNodeIds = new Set<string>();
  const filterEdgeIds = new Set<string>();
  for (const type of activeFilters) {
    for (const id of NODES_BY_TYPE[type]) filterNodeIds.add(id);
    for (const id of EDGES_BY_TYPE[type]) filterEdgeIds.add(id);
  }

  // Determine which JSON lines should be highlighted by filter
  const filterLineTypes = activeFilters;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Filter toggles */}
      <div className="flex items-center gap-2 justify-center">
        {FILTER_BUTTONS.map((btn) => (
          <FilterToggle
            key={btn.type}
            type={btn.type}
            label={btn.label}
            active={activeFilters.has(btn.type)}
            onToggle={() => toggleFilter(btn.type)}
          />
        ))}
      </div>

      {/* Side by side panels */}
      <div className="flex gap-6 w-full min-h-[320px] items-stretch">
        {/* JSON side */}
        <div
          className="flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-lg overflow-auto"
          style={{ fontFamily: "Google Sans Code, monospace" }}
          onMouseLeave={() => { setHoverHighlight(null); setHoverNodeType(null); }}
        >
          <div className="p-4 text-xs leading-5">
            {JSON_LINES.map((line, i) => {
              if (line.text === "") {
                return <div key={i} className="h-2" />;
              }
              const hasTarget = !!line.target;
              const isHovered = hasTarget && hoverHighlight === line.target;
              const isFiltered =
                !!line.nodeType && filterLineTypes.has(line.nodeType);
              const hasAnyFilter = filterLineTypes.size > 0;
              const hasAnyHighlight = hasAnyFilter || !!hoverHighlight;
              const dimmedLine =
                hasAnyHighlight && hasTarget && !isHovered && !isFiltered;

              // Pick background color: hover wins over filter
              let bgColor = "transparent";
              if (isHovered && line.nodeType) {
                bgColor = NODE_COLORS[line.nodeType].activeFill;
              } else if (isFiltered && line.nodeType) {
                bgColor = NODE_COLORS[line.nodeType].activeFill;
              }

              // Pick text color
              let textColor = "#334155";
              if (isHovered && line.nodeType) {
                textColor = NODE_COLORS[line.nodeType].activeText;
              } else if (isFiltered && line.nodeType) {
                textColor = NODE_COLORS[line.nodeType].activeText;
              } else if (dimmedLine) {
                textColor = "#c0c4cc";
              }

              return (
                <div
                  key={i}
                  className="rounded px-1 -mx-1"
                  style={{
                    paddingLeft: `${line.indent * 20 + 4}px`,
                    cursor: hasTarget ? "pointer" : "default",
                    backgroundColor: bgColor,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={() => {
                    if (line.target) {
                      setHoverHighlight(line.target);
                      setHoverNodeType(line.nodeType || null);
                    }
                  }}
                >
                  <span
                    style={{
                      color: textColor,
                      transition: "color 0.15s ease",
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Graph side */}
        <div className="flex-1 min-w-0 flex items-center justify-center border border-gray-200 rounded-lg bg-white p-4">
          <GraphSVG
            hoverHighlight={hoverHighlight}
            hoverNodeType={hoverNodeType}
            filterNodeIds={filterNodeIds}
            filterEdgeIds={filterEdgeIds}
          />
        </div>
      </div>
    </div>
  );
}
