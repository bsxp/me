import HearthCover from "@/assets/projects/hearth/hearth-cover.png";
import FoundryCover from "@/assets/projects/foundry/foundry-cover.png";
import LabbookCover from "@/assets/projects/labbook/labbook-cover.png";
import PlaybookCover from "@/assets/projects/playbook/playbook-cover.png";
import RaterDashboard from "@/assets/projects/rater/rater-dashboard.png";
import RaterBuilder from "@/assets/projects/rater/rater-builder.png";
import RaterGraphZoom from "@/assets/projects/rater/rater-graph-zoom.png";
import RaterTablesPanel from "@/assets/projects/rater/rater-tables-panel.png";
import RaterOutputs from "@/assets/projects/rater/rater-outputs.png";
import RaterTableEditor from "@/assets/projects/rater/rater-table-editor.png";
import RaterAddNode from "@/assets/projects/rater/rater-add-node.png";
import LumonVideo from "@/assets/projects/lumon/lumon-cover.mov";
import OneFeedVideo from "@/assets/projects/onefeed/onefeed-cover.mov";
import { Typography } from "@/components/ui/typography";
import { TechChip } from "@/pages/blog/components/TechChip";
import { InteractiveSchema } from "@/components/InteractiveSchema";
import { InteractiveDateCreator } from "@/components/InteractiveDateCreator";
import { TylePipelineVisual } from "@/components/TylePipelineVisual";
import DateDayDashboard from "@/assets/projects/dateday/dateday-dashboard.png";
import DateDayIdeasTable from "@/assets/projects/dateday/dateday-ideas-table.png";
import DateDayCalendar from "@/assets/projects/dateday/dateday-calendar.png";

import TyleDashboard from "@/assets/projects/tyle/tyle-dashboard.png";

type Project = {
  id: string;
  title: string;
  description: string;
  overview: string | React.ReactNode;
  coverImage: string;
  coverVideo?: string;
  coverImageBorder?: boolean;
  coverImageDark?: boolean;
  body: string | React.ReactNode;
  href: string;
};

const projects: Project[] = [
  {
    id: "hearth",
    title: "Hearth",
    description: "Using urban data to reshape cities",
    coverImage: HearthCover,
    overview: (
      <span>
        It all started with a simple question: what makes European cities feel
        better? Is it the Architecture? Is it the accessibility and public
        transit? It is the history? Could it possibly be the culture; the
        essence of people percolating up through food, music, and art all around
        us?
        <br />
        <br />
        Hearth uses vast quantities of urban data to understand what makes our cities feel
        better, and aims to make prescriptive changes to spaces to make them
        more human-centric.
      </span>
    ),
    body: (
      <>
        <section id="introduction" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Introduction
          </Typography>
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
        </section>
        <section id="the-problem" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Problem
          </Typography>
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
        </section>
        <section id="the-solution" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Solution
          </Typography>
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
        </section>
        <section id="the-results" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Results
          </Typography>
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "labbook",
    title: "Labbook.io",
    description: "The electronic lab notebook built for how scientists actually work",
    coverImage: LabbookCover,
    overview: "",
    body: "",
    href: "",
  },
  {
    id: "foundry",
    title: "Foundry",
    description: "A complete toolkit for helping founders go from 0 to 1",
    coverImage: FoundryCover,

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lumon",
    title: "Lumon terminal pro",
    description: "Finding the scary numbers",
    coverImage: "",
    coverVideo: LumonVideo,
    overview: "",
    body: "",
    href: "",
  },
  {
    id: "playbook",
    title: "Playbook",
    description: "Simplifying the process of organizing live events",
    coverImage: PlaybookCover,
    overview: "",
    body: "",
    href: "",
  },
  {
    id: "rater",
    title: "Rater",
    description:
      "Drag-and-drop insurance rater builder, version control, data management, and more",
    coverImage: RaterGraphZoom,
    coverImageBorder: true,

    overview: (
      <span>
        A conversation with a friend who builds insurance raters led to a
        realization: the entirety of a rater — its inputs, lookup tables,
        operations, and outputs — can be expressed as a graph. Nodes and edges.
        And if it can be expressed as a graph, it can be encoded as JSON,
        versioned granularly, and manipulated visually.
        <br />
        <br />
        Rater is a visual builder for insurance rating engines. It replaces
        hundred-tab spreadsheets with an interactive graph editor, giving
        actuaries a transparent, auditable language for risk models — and
        version control that actually works.
      </span>
    ),
    body: (
      <>
        <section id="the-insight" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Insight
          </Typography>
          <br />
          Insurance raters are, at their core, calculation engines. They take a
          set of inputs — driver age, vehicle type, ZIP code, claims history —
          pass them through lookup tables to find base rates and factors, apply
          mathematical operations, and produce a premium. Every rater follows
          this pattern, regardless of complexity.
          <br />
          <br />
          That pattern is a graph. Inputs flow into lookup nodes. Lookup nodes
          feed into operations. Operations produce outputs. The connections
          between them are edges. The whole thing can be serialized as JSON,
          diffed, versioned, and rendered visually. Once you see it, you can't
          unsee it.
          <br />
          <br />
          That realization was the genesis of Rater — an aha moment born out of
          a conversation with a friend who builds these systems for a living.
        </section>
        <section id="the-problem" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Problem
          </Typography>
          <br />
          Today, insurance raters are built in spreadsheets. Massive ones. A
          single rater might span tens or even hundreds of tabs in{" "}
          <TechChip name="Excel" logo="/logos/excel.svg" href="https://www.microsoft.com/en-us/microsoft-365/excel" /> —
          rate tables in one tab, model logic wired up in another, outputs
          somewhere else entirely. The relationships between tabs are implicit,
          fragile, and nearly impossible to audit at a glance.
          <br />
          <br />
          Version control is where the real pain lives. When underlying data
          changes — say a rate table updates with new risk data, or a single
          variable shifts in a subsection of the model — the entire file gets
          versioned. There's no way to isolate a change to one table or one
          variable. You can't diff a specific piece of the rater. You can't
          roll back a single factor without rolling back everything. It's
          whole-file-in, whole-file-out.
          <br />
          <br />
          For actuaries, this means an enormous amount of cognitive overhead
          just to keep track of what changed, when, and why. The tools don't
          match the granularity of the work.
        </section>
        <section id="the-builder" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Builder
          </Typography>
          <br />
          Rater replaces the spreadsheet with a visual graph editor. The
          interface is organized around a split-panel layout: inputs on the
          left, the graph canvas in the center, and rate tables and outputs on
          the right. Each rater is composed of perils — independent coverage
          types like Collision or Comprehensive — and each peril has its own
          calculation graph.
          <br />
          <br />
          <img
            src={RaterBuilder}
            alt="The Rater builder interface showing inputs, graph canvas, and workspace panels"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <br />
          Building a rater is a matter of dragging nodes onto the canvas and
          connecting them. The "Add Node" menu exposes the four core node types
          that compose every rating model:
          <br />
          <br />
          <img
            src={RaterAddNode}
            alt="Add Node dropdown showing Input, Lookup, Operation, and Output node types"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <br />
          <strong>Input nodes</strong> are the entry points — variables like
          Vehicle Symbol, Driver Age, or Territory Code. Each input has a type
          (number, text) and can be flagged as a "base value," which marks it
          as a primary rating variable rather than a modifier. Inputs defined
          at the rater level are available across all perils as proxy nodes,
          so a single Driver Age input feeds into both Collision and
          Comprehensive graphs without duplication.
          <br />
          <br />
          <strong>Lookup nodes</strong> are where rate tables enter the graph.
          A lookup node binds to a specific table, maps the table's primary key
          columns to upstream input nodes, and specifies which value column to
          return. When the graph evaluates, the lookup matches input values
          against the table's primary keys and returns the corresponding rate
          or factor. Tables support composite primary keys — a Driver Age
          Factors table might key on both age_min and age_max, and the lookup
          node maps each key independently. If a lookup can't find a match,
          its border turns red — an immediate visual signal that something
          in the model is misconfigured.
          <br />
          <br />
          <strong>Operation nodes</strong> perform the math. Four operations
          are supported: add, subtract, multiply, and divide. Each operation
          node accepts multiple inputs from connected edges and applies the
          operation across them. For non-commutative operations like subtract
          and divide, the node provides manual input reordering — arrow buttons
          let users control which value comes first, since the order of
          operands matters. Division handles zero gracefully by returning the
          numerator.
          <br />
          <br />
          <strong>Output nodes</strong> are the terminal points of each peril's
          graph — they display the final calculated premium. In the workspace,
          these values propagate up to the outputs panel, giving a clear
          summary of every peril's result side by side.
          <br />
          <br />
          Edges connect nodes and define the flow of data. The graph enforces
          connectivity rules: inputs connect to perils, perils can chain into
          other perils, and perils connect to outputs. These constraints
          prevent invalid wiring while keeping the model flexible.
        </section>
        <section id="the-graph" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Graph
          </Typography>
          <br />
          Zooming into a peril's graph reveals the full calculation flow. Here,
          a Personal Auto Core Rater evaluates two perils — Collision and
          Comprehensive — using three inputs: Vehicle Symbol, Driver Age, and
          Territory Code.
          <br />
          <br />
          <img
            src={RaterGraphZoom}
            alt="Zoomed view of the rating graph showing inputs flowing through lookups and operations to outputs"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <br />
          Each input fans out into lookup nodes that query different rate
          tables. Vehicle Symbol feeds into both the Auto Collision Base Rates
          and Comprehensive Base Rates lookups — same input, different tables,
          different base rates. Driver Age feeds into a Driver Age Factors
          lookup that returns a multiplier. Territory Code feeds into Territory
          Factors tables for each peril.
          <br />
          <br />
          The lookup results then converge into operation nodes. A base rate
          gets multiplied by a driver age factor, then by a territory factor,
          producing the final premium for each peril. The graph makes this
          chain of dependencies completely explicit — you can trace any output
          back to its source inputs and understand exactly which tables and
          operations contributed to the result.
          <br />
          <br />
          The graph isn't just a visualization — it's the source of truth. The
          underlying data model is a JSON-serializable schema that captures
          every node, edge, table, and configuration. This means the entire
          rater is portable, diffable, and machine-readable. Dagre handles
          automatic layout calculations so the graph stays organized as it
          grows.
        </section>
        <section id="the-schema" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Schema
          </Typography>
          <br />
          Under the hood, every rater is a single JSON document. The visual
          graph that users build in the canvas is a direct reflection of this
          schema — not a separate representation. This is the key architectural
          decision: the JSON <em>is</em> the rater. Everything else — the
          visual editor, the workspace simulator, the version history — reads
          from and writes to this structure.
          <br />
          <br />
          A rater schema has three layers: metadata, top-level nodes and edges,
          and peril sub-graphs.
          <br />
          <br />
          <strong>Top-level nodes</strong> define the rater's interface with the
          outside world. There are three types at this level: <code>input</code>{" "}
          nodes (the variables an actuary defines — Vehicle Symbol, Driver Age,
          Territory Code), <code>peril</code> nodes (containers for independent
          coverage calculations), and <code>output</code> nodes (the final
          premium results). Edges at this level wire inputs to perils and
          perils to outputs:
          <br />
          <br />
          <pre
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"
            style={{ fontFamily: "Google Sans Code, monospace" }}
          >
{`{
  "nodes": [
    { "id": "vehSymbol",  "type": "input",  "label": "Vehicle Symbol" },
    { "id": "driverAge",  "type": "input",  "label": "Driver Age" },
    { "id": "territory",  "type": "input",  "label": "Territory Code" },
    { "id": "collision",  "type": "peril",  "label": "Collision Coverage" },
    { "id": "comp",       "type": "peril",  "label": "Comprehensive Coverage" },
    { "id": "collPrem",   "type": "output", "label": "Collision Premium" },
    { "id": "compPrem",   "type": "output", "label": "Comprehensive Premium" }
  ],
  "edges": [
    { "from": "vehSymbol",  "to": "collision" },
    { "from": "driverAge",  "to": "collision" },
    { "from": "territory",  "to": "collision" },
    { "from": "vehSymbol",  "to": "comp" },
    { "from": "territory",  "to": "comp" },
    { "from": "collision",  "to": "collPrem" },
    { "from": "comp",       "to": "compPrem" }
  ]
}`}
          </pre>
          <br />
          <strong>Peril sub-graphs</strong> are where the actual rating logic
          lives. Each peril contains its own nodes and edges, forming a
          self-contained calculation graph. The node types inside a peril are:
          <br />
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>perilInput</code> — proxy nodes that reference a top-level
              input via <code>sourceInputId</code>, making parent inputs
              available inside the sub-graph without duplication
            </li>
            <li>
              <code>lookup</code> — binds to a specific <em>version</em> of a
              rate table via <code>tableVersionId</code>, specifies a{" "}
              <code>valueColumn</code> to return, and maps primary keys to
              upstream inputs via <code>searchInputMappings</code>
            </li>
            <li>
              <code>operation</code> — performs math (multiply, add, subtract,
              divide) on its incoming edge values
            </li>
            <li>
              <code>perilOutput</code> — bridges the sub-graph result back to a
              top-level output via <code>targetOutputId</code>
            </li>
          </ul>
          <br />
          Here's the Collision peril sub-graph. Three inputs feed three
          lookups, which chain through two multiply operations to produce the
          final premium. Hover over any line in the schema to highlight the
          corresponding node or edge in the graph:
          <br />
          <br />
          <InteractiveSchema />
          <br />
          Notice that each lookup node carries both a{" "}
          <code>tableId</code> (which table) and a{" "}
          <code>tableVersionId</code> (which version of that table). This is
          the link between the graph and the versioning system. A lookup
          doesn't just point at "Auto Collision Base Rates" — it points at{" "}
          <code>tbl-v-002</code>, a specific snapshot of that table's data.
          When an actuary updates a rate table, a new version is created with
          a new ID, but every existing rater still references the old version.
          Nothing changes silently. The actuary has to explicitly re-select
          the table in the lookup node to adopt the new data — an intentional
          opt-in that prevents upstream table changes from quietly altering a
          rater's behavior.
          <br />
          <br />
          This structure is what makes everything else possible. Because the
          graph is JSON, it can be diffed — meaning two versions of a rater
          can be compared node by node, edge by edge. It can be serialized
          and stored as a single column in{" "}
          <TechChip name="PostgreSQL" logo="/logos/postgresql.svg" href="https://www.postgresql.org/" />. It can be validated
          against connectivity rules (inputs connect to perils, perils to
          outputs — never input directly to output). And it can be rendered
          by{" "}
          <TechChip name="ReactFlow" logo="/logos/xyflow.svg" href="https://reactflow.dev/" />{" "}
          with a one-to-one mapping between schema nodes and
          visual nodes on the canvas.
          <br />
          <br />
          The naming convention is intentional too. Peril-scoped nodes use
          dot-delimited IDs like{" "}
          <code>collision.lk.baseRate</code> and{" "}
          <code>collision.op.step1</code>, making it immediately clear which
          peril owns which node when reading the raw schema. Combined with
          the connectivity rules, this creates a schema that is both
          human-readable and machine-enforceable.
        </section>
        <section id="rate-tables" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Rate Tables
          </Typography>
          <br />
          Rate tables are first-class entities in Rater, not cells buried in a
          spreadsheet tab. Each table has a name, a schema of typed columns,
          and rows of data. Columns can be individually marked as primary keys
          — indicated by a key icon in the table editor — and tables can have
          composite primary keys spanning multiple columns.
          <br />
          <br />
          <img
            src={RaterTableEditor}
            alt="Table editor showing Auto Collision Base Rates with vehicle_symbol primary key and rate values"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <br />
          The table editor supports adding rows, adding columns, renaming
          columns, toggling primary key status, and editing cell values inline.
          New columns default to string type with no primary key, and adding a
          column automatically backfills empty values across all existing rows.
          <br />
          <br />
          Tables can also be imported by dragging files directly into the
          workspace — Rater supports .xlsx, .xls, .csv, .pdf, and image files.
          Uploaded files are parsed by a backend extraction service that
          detects table structure, infers column types, and returns structured
          data. Extracted tables appear in a pending state for review before
          being saved, giving actuaries a chance to verify column names,
          primary keys, and data integrity before the table enters the model.
          <br />
          <br />
          <img
            src={RaterTablesPanel}
            alt="Tables panel showing independently versioned rate tables with file upload dropzone"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <br />
          Critically, each table is versioned independently. The tables panel
          shows Auto Collision Base Rates at v2 while Territory Factors,
          Driver Age Factors, and Comprehensive Base Rates remain at v1. This
          is the granularity that matters — updating a single rate table with
          new risk data doesn't force a version bump on the entire rater.
          <br />
          <br />
          And because lookup nodes in the graph pin to a specific table
          version by ID, updating a table doesn't silently change any rater
          that references it. The old version persists. The new version exists
          alongside it. An actuary adopts the new data only when they
          explicitly point a lookup node at the updated version — a deliberate
          decision, not an invisible side effect. This is the version control
          that spreadsheets can never offer: the ability to update data
          independently of the models that consume it, and to control exactly
          when each model picks up the change.
        </section>
        <section id="version-control" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Git for Raters
          </Typography>
          <br />
          The versioning system is perhaps the most consequential piece of the
          project. Rater uses an append-only architecture — every update
          creates a new record rather than modifying the existing one. Each
          table version gets a unique ID, an incremented version number, and a
          timestamp. The system retrieves the latest version by default but
          retains the full history, enabling complete audit trails.
          <br />
          <br />
          <img
            src={RaterDashboard}
            alt="Rater dashboard showing multiple raters with version numbers and change descriptions"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <br />
          This extends to the rater level as well. The dashboard shows each
          rater with its current version number and a description of the last
          change — "Revised experience mod caps per regulat..." for a Workers
          Comp rater at v4, "Updated territory factors for Q2 2026" for a
          Personal Auto rater at v3. These aren't just labels; they're
          pointers into a version history that can be traversed and compared.
          <br />
          <br />
          The result is version control that matches the actual granularity of
          the work. Update a single rate table? That's its own versioned
          change. Tweak a variable in one peril? Versioned independently. Add
          a column to a factor table? New version, isolated from everything
          else. Actuaries can iterate on a small piece of a model without
          worrying about side effects elsewhere. They can trace the history of
          any individual component. They can compare versions of a single
          table across time. It's git for raters.
        </section>
        <section id="workspace" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Workspace
          </Typography>
          <br />
          Beyond the builder, Rater includes a workspace simulator where users
          can test their rating engines with live inputs. The workspace renders
          the full graph on a{" "}
          <TechChip name="ReactFlow" logo="/logos/xyflow.svg" href="https://reactflow.dev/" />{" "}
          canvas, with an input panel on the
          left for entering test values and a results panel on the right.
          <br />
          <br />
          <img
            src={RaterOutputs}
            alt="Workspace showing the graph with outputs panel displaying Collision Premium at 145.00 and Comp Premium at 72.00"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <br />
          As input values change, they propagate through the graph in real
          time. A Vehicle Symbol of 2 flows into the Auto Collision Base
          Rates lookup, returning a base rate of 145. That value chains
          through operation nodes — multiplied by a Driver Age factor of 3,
          then by a Territory factor of 1.2 — producing a final Collision
          Premium of 145.00 and a Comp Premium of 72.00. Every intermediate
          value is visible on the graph itself, not hidden in a cell reference.
          <br />
          <br />
          This makes the logic of a rater not just visible but interactive.
          An actuary can trace exactly how a change in one input ripples
          through the entire model. The graph becomes both a building tool
          and an auditing tool — a transparent, visual language for something
          that was previously locked inside opaque spreadsheets.
        </section>
        <section id="the-stack" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Stack
          </Typography>
          <br />
          Rater is built with{" "}
          <TechChip
            name="React"
            logo="/logos/react.svg"
            href="https://react.dev/"
          />{" "}
          and{" "}
          <TechChip
            name="TypeScript"
            logo="/logos/typescript.svg"
            href="https://www.typescriptlang.org/"
          />
          , using{" "}
          <TechChip
            name="Vite"
            logo="/vite.svg"
            href="https://vite.dev/"
          />{" "}
          for the build toolchain and{" "}
          <TechChip
            name="Tailwind"
            logo="/logos/tailwind.svg"
            href="https://tailwindcss.com/"
          />{" "}
          for styling. The graph editor is powered by{" "}
          <TechChip
            name="XYFlow"
            logo="/logos/xyflow.svg"
            href="https://www.xyflow.com/"
          />{" "}
          (ReactFlow) with Dagre for automatic layout calculations.
          Drag-and-drop interactions use{" "}
          <TechChip
            name="dnd-kit"
            logo="/logos/dndkit.svg"
            href="https://dndkit.com/"
          />
          . The UI layer is built on{" "}
          <TechChip
            name="shadcn"
            logo="/logos/shadcn.svg"
            href="https://ui.shadcn.com/"
          />{" "}
          and Radix primitives.
          <br />
          <br />
          State management leans on React Context, with six dedicated providers
          covering raters, inputs, factors, perils, tables, and graphs. Each
          domain has its own context, keeping concerns cleanly separated
          without introducing external state management overhead. The graph
          provider manages node and edge state per peril, while the table
          provider handles independent table versioning and history retrieval.
          <br />
          <br />
          The backend is{" "}
          <TechChip
            name="Supabase"
            logo="/logos/supabase.svg"
            href="https://supabase.com/"
          />{" "}
          — PostgreSQL for persistence, with an API layer that supports the
          append-only versioning strategy. Rate tables and rater schemas live
          in separate database tables, enabling independent versioning of each
          component. Table imports are handled by a backend extraction service
          that parses uploaded files into structured column-and-row data.
        </section>
        <section id="reflection" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Reflection
          </Typography>
          <br />
          Rater is a sunset project — it never made it to market — but it
          validated something important. When my friend saw the prototype, his
          reaction was immediate: "holy shit, it doesn't have to be this bad."
          That kind of response, from someone who lives in the problem space
          every day, told me the insight was right even if the timing wasn't.
          <br />
          <br />
          The core idea — that raters are graphs, and graphs deserve real
          tooling — still holds. The codebase is available for anyone
          interested in exploring it further.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "OneFeed",
    title: "OneFeed",
    description:
      "A unified feed of all notifications that a developer might need",
    coverImage: "",
    coverVideo: OneFeedVideo,

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lunchin",
    title: "LunchIn",
    description: "Coordinate going out to lunch with coworkers",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "puzzlebyte",
    title: "Puzzlebyte",
    description: "A wordle-like daily game to guess a common english phrase",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Lytic",
    title: "Lytic",
    description: "Tracking & analyzing LLM output, utilization, and trends",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Redeem",
    title: "Redeem",
    description: "A universal rewards program on your phone",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "Tyle",
    title: "Tyle",
    description: "Understanding user sentiment on Reddit using AI",
    coverImage: TyleDashboard,
    coverImageDark: true,

    overview: (
      <span>
        I was between projects and looking for something to tinker with. I had
        been wanting to play with AWS Comprehend and some NLP tooling, and
        Reddit's API was free at the time, so I had a massive firehose of text
        data to work with. The question was simple: can I build a pipeline
        that scrapes Reddit, analyzes the sentiment of every comment, and
        correlates it with market data?
        <br />
        <br />
        Tyle was the result. A "can I do this? can I learn this?" project
        above all else.
      </span>
    ),
    body: (
      <>
        <section id="the-pipeline" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Pipeline
          </Typography>
          <br />
          Tyle's backend is essentially a data pipeline that runs in three
          stages: collect, analyze, store.
          <br />
          <br />
          <strong>Collect</strong> uses{" "}
          <TechChip
            name="PRAW"
            logo="/logos/reddit.svg"
            href="https://praw.readthedocs.io/"
          />{" "}
          (Python Reddit API Wrapper) to pull posts and comments from a given
          subreddit. Each post gets its metadata (title, content, author,
          timestamp) and each comment gets captured alongside it. The scraper
          also takes snapshots of upvotes, downvotes, and comment counts at
          the time of collection, so you can track how engagement changes
          over time rather than just seeing the final numbers.
          <br />
          <br />
          <strong>Analyze</strong> is where it gets interesting. Every comment
          gets sent through{" "}
          <TechChip
            name="AWS Comprehend"
            logo="/logos/aws-lambda.svg"
            href="https://aws.amazon.com/comprehend/"
          />
          , Amazon's NLP service, which returns two things:
          <br />
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sentiment scoring</strong> — four scores for positive,
              negative, neutral, and mixed, each between 0 and 1. A comment
              like "this stock is going to the moon" might come back 0.85
              positive, 0.05 negative, 0.08 neutral, 0.02 mixed.
            </li>
            <li>
              <strong>Named entity recognition (NER)</strong> — pulls out the
              people, organizations, locations, and concepts mentioned in
              each comment.
            </li>
          </ul>
          <br />
          Comments are batched in groups of 25 (Comprehend's limit per
          request) and run through{" "}
          <a href="https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectSentiment.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">BatchDetectSentiment</a>
          {" "}and{" "}
          <a href="https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectEntities.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">BatchDetectEntities</a>
          {" "}to keep the API calls efficient.
          <br />
          <br />
          <strong>Store</strong> puts everything into{" "}
          <TechChip
            name="PostgreSQL"
            logo="/logos/postgresql.svg"
            href="https://www.postgresql.org/"
          />
          . Posts, comments, sentiment scores, entities, and engagement
          snapshots all live in normalized tables with UUID keys and timestamp
          tracking. The schema uses an append-only snapshot pattern: rather
          than updating a comment's sentiment score, you add a new snapshot
          row with the current timestamp. This means you can look back and see
          how sentiment around a specific post or entity evolved over hours
          or days.
          <TylePipelineVisual />
        </section>
        <section id="connecting-the-dots" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Connecting the Dots
          </Typography>
          <br />
          The other half of Tyle is market data. A separate Lambda function
          pulls intraday OHLCV (open, high, low, close, volume) data from
          AlphaVantage for any ticker symbol, storing it as timestamped
          snapshots in the same database.
          <br />
          <br />
          The idea is that you can look at a subreddit like r/wallstreetbets,
          see that sentiment around "GME" spiked positive at 2pm, and then
          check whether the price moved in the hours that followed. Tyle
          doesn't try to draw the causal line for you. It just puts the two
          datasets side by side and lets you see the correlation (or lack of
          it) for yourself.
          <br />
          <br />
          The frontend shows this as a combination of sentiment cards and
          candlestick charts. Each subreddit gets a card showing its most
          frequently mentioned entities (people, organizations, tickers),
          recent posts with their dominant sentiment, and the raw sentiment
          scores for each comment.
          <br />
          <br />
          <img
            src={TyleDashboard}
            alt="Tyle dashboard showing subreddit search bar and sentiment cards for r/superstonk, r/politics, and r/wallstreetbets with popular subjects and post sentiments"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
        </section>
        <section id="what-surfaces" className="pb-20">
          <Typography variant="h3" className="pb-4">
            What Surfaces
          </Typography>
          <br />
          The entity recognition turned out to be the most interesting part.
          When you aggregate entities across hundreds of comments in a
          subreddit, you start to see what a community is actually focused on,
          not just what the post titles say. A subreddit might have a post
          about one topic, but the comments reveal that people are really
          talking about three or four adjacent things. Tyle surfaces those
          as subject chips grouped by type: organizations, people, locations,
          events.
          <br />
          <br />
          Sentiment scoring at the individual comment level is also more
          revealing than you'd expect. A post with 500 comments and a title
          that reads bullish might actually have deeply mixed sentiment in
          the discussion. The aggregate sentiment of the comments tells a
          different story than the headline, and that gap is often where the
          interesting information lives.
        </section>
        <section id="tyle-stack" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Stack
          </Typography>
          <br />
          The frontend is{" "}
          <TechChip
            name="React"
            logo="/logos/react.svg"
            href="https://react.dev/"
          />{" "}
          with{" "}
          <TechChip
            name="TypeScript"
            logo="/logos/typescript.svg"
            href="https://www.typescriptlang.org/"
          />{" "}
          and{" "}
          <TechChip
            name="MUI"
            logo="/logos/mui.svg"
            href="https://mui.com/"
          />
          . Charts are rendered with ApexCharts for the candlestick
          financial data. State management uses Redux with thunks, though
          honestly for the size of this app Context would have been fine.
          <br />
          <br />
          The backend is entirely serverless, built on{" "}
          <TechChip
            name="AWS Lambda"
            logo="/logos/aws-lambda.svg"
            href="https://aws.amazon.com/lambda/"
          />{" "}
          with the Serverless Application Model (SAM) for infrastructure.
          Four Lambda functions handle the different data operations: two
          for Reddit data (collection and serving), two for ticker data
          (collection and serving). Each function connects to a shared{" "}
          <TechChip
            name="PostgreSQL"
            logo="/logos/postgresql.svg"
            href="https://www.postgresql.org/"
          />{" "}
          instance on RDS. The Reddit integration uses PRAW, sentiment
          analysis and entity recognition run through AWS Comprehend, and
          market data comes from the AlphaVantage API.
        </section>
        <section id="tyle-reflection" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Where It Landed
          </Typography>
          <br />
          Tyle was built during a specific moment in time, when Reddit was
          genuinely moving markets and the idea of social sentiment as a
          leading indicator felt electric. The pipeline worked, the data was
          real, and the correlations were sometimes genuinely surprising.
          <br />
          <br />
          Then, in April 2023, Reddit announced it would start charging for
          API access, a feature that had been free since 2008. The new pricing
          came in at $0.24 per 1,000 requests, or about $12,000 per 50
          million calls. To put that in perspective, Apollo (one of the most
          popular Reddit clients) was making around 7 billion requests per
          month, which would have cost roughly $2 million monthly. By July
          2023, Apollo, Reddit Is Fun, BaconReader, and a wave of other
          third-party apps had shut down entirely. Thousands of subreddits
          went dark in protest.
          <br />
          <br />
          Tyle was a casualty of the same shift. The entire premise depended
          on being able to scrape subreddits at volume, and the new pricing
          made that untenable for a side project. PRAW still works, but the
          economics of pulling thousands of comments per hour across multiple
          subreddits went from "free" to "real money, fast."
          <br />
          <br />
          I think the most valuable thing I took from building Tyle was
          learning how to think about NLP as a data pipeline problem rather
          than a modeling problem. You don't need to build your own sentiment
          model. You need to figure out how to get the right text to an
          existing model, store the results in a way that's queryable over
          time, and present them in a way that's actually useful. The
          interesting engineering is in the plumbing, not the AI. It's also
          a good reminder that building on top of someone else's platform
          means your project lives and dies by their decisions, and
          sometimes those decisions come out of left field.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "date-day",
    title: "DateDay",
    description: "A platform for finding and tracking dates with your partner",
    coverImage: DateDayDashboard,
    coverImageDark: true,

    overview: (
      <span>
        My girlfriend and I have been doing a date every Sunday since we started
        dating. After a while, we wanted a way to keep track of where we've
        been, plan upcoming dates, and pull from a bucket of ideas based on what
        we're feeling for budget, travel time, vibe, all of that.
        <br />
        <br />
        DateDay is a little app to capture, schedule, and rate your dates.
        A shared backlog for your relationship, so every "oh we should try that"
        moment doesn't evaporate by Sunday morning.
      </span>
    ),
    body: (
      <>
        <section id="the-routine" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Routine
          </Typography>
          <br />
          Since my girlfriend and I started dating, we've done a date every
          Sunday. Sometimes it's a full day trip, sometimes it's just trying a
          new restaurant down the street, but every week we do something
          together.
          <br />
          <br />
          After a while we started running into the same few problems. We'd
          hear about a great spot and forget about it by the weekend. We'd
          accidentally go back to the place that was just okay because neither
          of us remembered we'd already been. And every Sunday morning we'd
          have the same conversation: "What do you want to do?" "I don't know,
          what do you want to do?" followed by ten minutes of scrolling Yelp
          before defaulting to somewhere safe.
          <br />
          <br />
          What we actually wanted was a bucket of ideas to pull from, something
          where we could filter by mood. How far do we want to travel, what's
          the budget, are we feeling active or low-key? And a way to keep track
          of the dates we've been on, so we could look back and say "remember
          that place? That was a five-star Sunday."
          <br />
          <br />
          So I built DateDay over a weekend. The whole thing follows one idea:
          a date has a lifecycle, and each stage of that lifecycle deserves a
          little bit of structure. You hear about a spot, you capture it, you
          schedule it, you go, you remember how it went.
          <br />
          <br />
          <img
            src={DateDayDashboard}
            alt="DateDay home dashboard showing upcoming dates carousel, date ideas list with ratings, and April calendar with activity dots"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
        </section>
        <section id="capture" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Capture
          </Typography>
          <br />
          The moment a date idea exists, it needs to be captured fast enough
          that you'll actually do it. You're walking past a cool-looking bar,
          a friend texts you a recommendation, you overhear someone raving
          about a new place. If it takes more than a minute to log, you're
          just going to say "I'll remember" and you won't.
          <br />
          <br />
          DateDay's creation flow is a five-step wizard: name it, pick a type,
          search for the location, estimate the duration, and set a cost tier.
          Thirty seconds, tops. Each step captures just enough to be useful
          later without turning it into a chore.
          <br />
          <br />
          I recreated the actual flow below so you can walk through the five
          steps and see how it feels:
          <br />
          <InteractiveDateCreator />
          <br />
          <br />
          The data model behind this is intentionally coarse. A date idea is a
          template, a reusable thing you might do more than once. It carries a
          name, a location pulled from Google Places, and three dimensions that
          I think of as "mood filters":
          <br />
          <br />
          <strong>Type</strong> is one of three buckets: adventure, dining, or
          entertainment. Adventure is anything active or outdoorsy (hiking,
          kayaking, exploring a new neighborhood). Dining is self-explanatory.
          Entertainment is everything else: movies, concerts, mini golf, comedy
          shows. I could have made this a freeform tag system or a list of 30
          categories, but the question you're actually answering when you pick
          a date is "what kind of vibe are we going for?" and three buckets
          answers that without overthinking it.
          <br />
          <br />
          <strong>Cost</strong> is an ordinal tier, not a dollar amount: Free,
          $1–29, $30–59, $60–79, $80+, stored as an integer 0 through 4.
          When you're planning a date, you know your budget roughly, not
          precisely. "Let's do something cheap this weekend" maps to a filter,
          not a spreadsheet cell. Storing it as an ordinal makes filtering and
          sorting trivial without having to parse currency strings or worry
          about whether someone typed "$30" or "30 dollars."
          <br />
          <br />
          <strong>Duration</strong> is stored in minutes. The display layer
          converts it to human-readable chunks like "2h 30m" or "45m," but
          under the hood it's just an integer. Minutes are the right base unit
          here because dates span a wide range (a 30-minute coffee run vs. a
          full-day road trip) and you want to sort and compare them without
          unit conversion headaches.
          <br />
          <br />
          The key design decision is the separation between a date{" "}
          <em>idea</em> and a date <em>event</em>. A date idea is the template:
          "that ramen place on South Lamar." A date event is an instance of it:
          "we went there last Saturday at 7pm." This separation means you can
          schedule the same idea multiple times, rate each instance, and the
          template sticks around in your backlog for next time. It doesn't get
          consumed; it's reusable.
        </section>
        <section id="schedule" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Schedule
          </Typography>
          <br />
          A backlog of date ideas is only useful if you actually pull from it.
          DateDay has a calendar, just a simple month view with little activity
          dots on days that have something planned. It's not trying to replace
          Google Calendar; it's a dedicated lens on just your dates.
          <br />
          <br />
          <img
            src={DateDayCalendar}
            alt="DateDay calendar view showing April with colored activity dots on scheduled dates and Zilker Botanical Garden details"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <br />
          Scheduling a date idea creates an event record that points back to
          the original template. You pick a day, pick a time slot from
          15-minute intervals, and attach notes. The notes are the underrated
          part: "make a reservation," "bring the picnic blanket," "they close
          early on Sundays." The kind of context that makes the difference
          between a smooth evening and a "wait, I thought you were going to
          call ahead" situation.
          <br />
          <br />
          Under the hood, scheduled times are Unix timestamps in seconds. The
          frontend converts your local date and time selection to UTC before
          sending it to the API, the backend stores it as a PostgreSQL
          datetime, and on the way back out it gets converted back to a
          timestamp. It's a boring solution to a boring problem, which is
          exactly what you want from time handling. Anything clever with dates
          and times will eventually bite you.
          <br />
          <br />
          The calendar groups events by day using a simple string key
          (year-month-day) which gives you O(1) lookups when rendering the
          month view. Click a day, see its dates. Navigate between months with
          a slide transition. The home dashboard shows your upcoming dates
          front and center so you can glance at what's next without digging
          through a calendar.
        </section>
        <section id="remember" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Remember
          </Typography>
          <br />
          After the date, you rate it. Five stars, that's it.
          <br />
          <br />
          <img
            src={DateDayIdeasTable}
            alt="Date Ideas table showing 14 date ideas across Austin and Eugene with star ratings, durations, costs, and locations"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <br />
          The ideas table is where the history lives. Every date idea is a row,
          sortable by name, rating, cost, duration, location, and type. The
          ratings column is what transforms it from a backlog into a sort of
          recommendation engine for yourselves. "We need a date this Sunday and
          don't want to think too hard about it" becomes: sort by rating, pick
          something from the top five.
          <br />
          <br />
          Over time you build up this curated record. The five-star places
          float to the top, the duds sink, and you stop accidentally revisiting
          the place that gave you food poisoning because you can see right
          there that it got one star. There's something oddly satisfying about
          scrolling through a list of dates you've been on together, with
          ratings and locations and little notes attached. It's a weird,
          data-driven scrapbook, but it's <em>your</em> scrapbook.
          <br />
          <br />
          The rating itself is just a numeric score stored against the date
          template and the user who rated it. No elaborate review system, no
          written critiques (though you can attach a note if you want). The
          constraint is intentional: if rating a date takes effort, you won't
          do it. A quick star tap right after dinner is the whole interaction.
        </section>
        <section id="the-wiring" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Wiring
          </Typography>
          <br />
          DateDay is built with{" "}
          <TechChip
            name="React"
            logo="/logos/react.svg"
            href="https://react.dev/"
          />{" "}
          and{" "}
          <TechChip
            name="TypeScript"
            logo="/logos/typescript.svg"
            href="https://www.typescriptlang.org/"
          />
          , using{" "}
          <TechChip
            name="MUI"
            logo="/logos/mui.svg"
            href="https://mui.com/"
          />{" "}
          for the component library. Google does a lot of heavy lifting here:
          OAuth for sign-in, Places API for location search, Maps for
          rendering locations. State lives in two React Context providers, one
          for auth and one for everything date-related. For an app this size,
          that's the right call. Two providers cover the entire domain without
          reaching for Redux.
          <br />
          <br />
          The backend is{" "}
          <TechChip
            name="AWS Lambda"
            logo="/logos/aws-lambda.svg"
            href="https://aws.amazon.com/lambda/"
          />{" "}
          with Python handlers behind API Gateway, talking to{" "}
          <TechChip
            name="PostgreSQL"
            logo="/logos/postgresql.svg"
            href="https://www.postgresql.org/"
          />
          . Four tables: users, date ideas, scheduled events, and ratings.
          The API is thin. Create, read, and delete for ideas; create and read
          for scheduled events; create for ratings and users. Serverless was
          the obvious choice here because the traffic pattern is two people
          hitting the app a few times a week, and I'm not paying for an
          always-on server for that.
          <br />
          <br />
          One pattern I like in this codebase is the endpoint abstraction. Each
          API resource is declared as an Endpoint instance with flags for which
          operations it supports (create, get, delete) and the class wraps
          Axios calls with consistent error handling and auth headers. It's a
          small thing, but it keeps the API layer clean and makes adding new
          endpoints a one-liner.
        </section>
        <section id="the-point" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The Point
          </Typography>
          <br />
          DateDay has been sunset. After a couple years of using it, we got
          good enough at organically planning our Sundays that we didn't really
          need the app anymore, which I think is kind of the best outcome for
          something like this. It served a really useful purpose while we were
          building the rhythm, and once the rhythm was second nature, the
          scaffolding could come down.
          <br />
          <br />
          I think the best side projects are like that. You build something
          small because there's a little friction in your life that you want to
          smooth out, it does its job for a while, and eventually you outgrow
          it. Our Sunday mornings went from "I don't know, what do you want to
          do?" to just knowing what we're feeling, and that feels like a good
          trade for a weekend of building.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "bakesale",
    title: "Bakesale",
    description: "Digital tokens for small business loyalty programs",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "irpg",
    title: "iRPG",
    description:
      "Turning fitness and other real-life activities into a mobile game",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "lexeau",
    title: "Lexeau",
    description: "Automated SEO for evergreen verticals",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "duelbot",
    title: "DuelBot",
    description: "A turn-based Discord game with a player-run market economy",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
  {
    id: "popover",
    title: "PopOver",
    description: "A college student labor platform",
    coverImage: "",

    overview: "",
    body: "",
    href: "",
  },
];

export { projects, type Project };
