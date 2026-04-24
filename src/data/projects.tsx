import HearthCover from "@/assets/projects/hearth/hearth-cover.png";
import FoundryCover from "@/assets/projects/foundry/foundry-cover.png";
import LabbookCover from "@/assets/projects/labbook/labbook-landing.png";
import LabbookDashboard from "@/assets/projects/labbook/labbook-dashboard.png";
import LabbookProtocols from "@/assets/projects/labbook/labbook-protocols.png";
import LabbookSearch from "@/assets/projects/labbook/labbook-search.png";
import LabbookSlashMenu from "@/assets/projects/labbook/labbook-slash-menu.png";
import LabbookChartEntry from "@/assets/projects/labbook/labbook-chart-entry.png";
import LabbookChartTypes from "@/assets/projects/labbook/labbook-chart-types.png";
import LabbookDataTable from "@/assets/projects/labbook/labbook-data-table.png";
import LabbookImport from "@/assets/projects/labbook/labbook-import.png";
import LabbookChartRendered from "@/assets/projects/labbook/labbook-chart-rendered.png";
import LabbookCommittedEntry from "@/assets/projects/labbook/labbook-committed-entry.png";
import LabbookActivity from "@/assets/projects/labbook/labbook-activity.png";
import LabbookFindings from "@/assets/projects/labbook/labbook-findings.png";
import PlaybookCover from "@/assets/projects/playbook/playbook-cover.png";
import RaterDashboard from "@/assets/projects/rater/rater-dashboard.png";
import RaterBuilder from "@/assets/projects/rater/rater-builder.png";
import RaterGraphZoom from "@/assets/projects/rater/rater-graph-zoom.png";
import RaterTablesPanel from "@/assets/projects/rater/rater-tables-panel.png";
import RaterOutputs from "@/assets/projects/rater/rater-outputs.png";
import RaterTableEditor from "@/assets/projects/rater/rater-table-editor.png";
import RaterAddNode from "@/assets/projects/rater/rater-add-node.png";
import LumonVideo from "@/assets/projects/lumon/lumon-cover.mp4";
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
import { FoundryDataFlow } from "@/components/FoundryDataFlow";

import FoundryDashboard from "@/assets/projects/foundry/foundry-dashboard.png";
import FoundryPipeline from "@/assets/projects/foundry/foundry-pipeline.png";
import FoundryActivity from "@/assets/projects/foundry/foundry-activity.png";
import FoundryFinancials from "@/assets/projects/foundry/foundry-financials.png";
import FoundryTasks from "@/assets/projects/foundry/foundry-tasks.png";
import FoundryTools from "@/assets/projects/foundry/foundry-tools.png";

type Project = {
  id: string;
  title: string;
  description: string;
  overview: string | React.ReactNode;
  coverImage: string;
  coverVideo?: string;
  coverComponent?: React.ReactNode;
  coverImageBorder?: boolean;
  coverImageDark?: boolean;
  body: string | React.ReactNode;
  href: string;
  repoUrl?: string;
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
    description: "The electronic lab notebook of the future",
    coverImage: LabbookCover,
    overview: (
      <span>
        In 2024, the NIH mandated that its entire Intramural Research
        Program move off paper and onto approved electronic lab notebooks.
        A lifelong friend, whose family and partner's family are both full
        of scientists, had been watching the space from the inside for
        years and saw the opening.
        <br />
        <br />
        Labbook.io is what came out of that conversation: an electronic lab
        notebook built around how scientists actually think and work, with
        a tamper-evident hash chain underneath so the record holds up when
        it matters.
      </span>
    ),
    body: (
      <>
        <section id="origin" className="pb-20">
          <Typography variant="h3" className="pb-4">
            A federal mandate and an open door
          </Typography>
          <br />
          In 2024, the{" "}
          <a
            href="https://oir.nih.gov/sourcebook/intramural-program-oversight/electronic-lab-notebooks/intramural-electronic-lab-notebook-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            NIH required every new research project in its Intramural
            Research Program
          </a>{" "}
          to move off paper notebooks and onto approved electronic lab
          notebooks by June 30th. Ongoing research had to be transitioned
          by the same date, and no new paper notebooks could be started
          after the cutoff. The practical effect was immediate: thousands
          of labs that had been using paper for decades suddenly had to
          pick an ELN and get everyone onto it.
          <br />
          <br />
          A lifelong friend came to me around that time with an
          observation. His family and his partner's family are both full
          of scientists, and he'd spent years listening to them talk about
          their work. He had firsthand exposure to how researchers
          actually keep notes, what workflows matter, and what gets in the
          way. What he saw was an underdeveloped space meeting a
          mandate-driven wave of new buyers, and an opportunity to build
          something that actually fit how scientists work rather than
          forcing them into a tool that didn't.
          <br />
          <br />
          The resistance to ELNs isn't irrational; paper has real
          advantages that tend to get dismissed by people who haven't
          worked at a bench. Handwriting is faster than typing for
          quick observations; a blank page is more flexible than any
          template; pen and paper don't crash, don't need a charger, and
          don't care if you spill something on them. The question we kept
          coming back to during requirements gathering was whether you
          could have both: the freedom of a blank page with the structure
          and integrity guarantees that make digital records worth the
          transition in the first place.
          <br />
          <br />
          We'd built things together before, so it wasn't a hard decision.
          We spent a few weeks gathering requirements from people in his
          network, spun up a prototype, and were off.
        </section>

        <section id="how-scientists-think" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Mirroring how research is actually organized
          </Typography>
          <br />
          The first thing we wanted to get right was the data model,
          because it's the part that either matches how a researcher
          already thinks about their work or quietly fights them every
          time they open the app. Get the shape wrong and you spend your
          time wrestling the tool into submission; get it right and the
          tool disappears into the work.
          <br />
          <br />
          Research doesn't live in a flat list. Each level of the
          hierarchy corresponds to a real organizational unit researchers
          already use when they talk about their work:
          <br />
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Organization</strong> — the lab itself, with its
              members, roles, and shared resources.
            </li>
            <li>
              <strong>Notebook</strong> — a research area or theme the lab
              is pursuing (e.g. CRISPR knockouts, single-cell RNA-seq).
            </li>
            <li>
              <strong>Project</strong> — a specific line of investigation
              inside that area, often running in parallel with others.
            </li>
            <li>
              <strong>Experiment</strong> — the unit that actually gets
              designed, run, and written up.
            </li>
            <li>
              <strong>Entry</strong> — a day-to-day note capturing what
              happened at the bench.
            </li>
          </ul>
          <br />
          It's like nested folders, but with meaning. Labbook mirrors the
          structure directly, because if the shape doesn't match how
          researchers already think, they'll spend their time fighting the
          tool instead of using it.
          <br />
          <br />
          <img
            src={LabbookDashboard}
            alt="Labbook dashboard showing the Nakamura Lab with two notebooks, projects and experiments nested underneath, and committed and draft entries at the leaves"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The Nakamura Lab dashboard. Two notebooks (single-cell RNA-seq
            and CRISPR knockouts), with projects, experiments, and committed
            vs. draft entries all visible in one tree.
          </span>
          <Typography variant="h5" className="pt-6 pb-3 block">
            Protocols
          </Typography>
          Once the structure is in place, the next thing that surfaces is
          repetition. Labs run the same procedures over and over; a Western
          blot is a Western blot, a 10x scRNA-seq library prep is eight
          hours of steps that haven't meaningfully changed in a year.
          Rewriting procedures from scratch every time is a waste, but
          copy-pasting from an old entry is how protocols drift, get
          outdated, and stop matching what the lab actually does. Labbook
          handles this with reusable protocol templates that have variable
          slots ({`{sample_name}`}, {`{concentration}`}, {`{incubation_time}`})
          filled in at the moment a new experiment starts. The lab maintains
          one canonical version of each procedure, and every instantiation
          is traceable back to the template it came from.
          <br />
          <br />
          <img
            src={LabbookProtocols}
            alt="Labbook protocols library showing reusable templates tagged by category and author"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The protocol library. Each template is authored by a lab member,
            tagged by category (sequencing, biochemistry, flow cytometry,
            molecular biology, cell culture), and scoped to either the
            individual or the whole organization.
          </span>
          <Typography variant="h5" className="pt-6 pb-3 block">
            Search
          </Typography>
          And once you have a structured hierarchy with hundreds of entries
          and protocols flowing through it, findability becomes the thing
          that makes or breaks daily use. Cmd+K opens a global search that
          spans every level of the hierarchy with full-text indexing, tag
          filtering, and faceted counts by entity type. It's the kind of
          thing you don't think about until you don't have it, at which
          point you realize you're spending twenty minutes a day clicking
          through nested folders looking for an entry you wrote last
          Tuesday.
          <br />
          <br />
          <img
            src={LabbookSearch}
            alt="Labbook Cmd+K search overlay showing faceted results across notebooks, projects, experiments, and entries"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            Cmd+K search for "crispr" returning results across notebooks,
            projects, and entries, with faceted counts for each entity type.
          </span>
        </section>

        <section id="write-draw-say" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Write it, draw it, say it
          </Typography>
          <br />
          A real lab entry is not a paragraph of text. It's notes about
          what you did, tables of numbers you measured, plots of those
          numbers, sketches of the plate layout or experimental design, a
          reference to the protocol you followed, files from the
          instrument, and maybe a voice note you recorded between samples
          because your hands were gloved and you couldn't type. If the tool
          only handles text well, the rest of the work scatters: a Google
          Doc for the notes, an Excel file for the tables, a whiteboard
          photo for the sketch, a voice memo on your phone. The notebook
          stops being a notebook and becomes a coordination problem.
          <br />
          <br />
          Labbook's editor is built around a single idea: everything
          should live inside one entry. A slash command menu exposes every
          block type the editor supports, and the set was chosen
          specifically around what researchers actually reach for at the
          bench.
          <br />
          <br />
          <img
            src={LabbookSlashMenu}
            alt="Slash command menu showing image, file, drawing, voice note, dictate, and divider block options"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6 text-center">
            The slash menu. Images, file attachments, freehand drawings,
            voice recordings, and live dictation alongside the usual text
            blocks.
          </span>
          <Typography variant="h5" className="pt-6 pb-3 block">
            Data visualization
          </Typography>
          Charts were the most involved piece to build, because scientific
          plotting is specific in a way that general-purpose tools will
          never be. We built over twenty chart types into the editor,
          ranging from the ordinary (line, bar, scatter) to the deeply
          domain-specific: Kaplan-Meier survival curves for clinical
          research, volcano plots for genomics, 96-well plate heatmaps for
          screening work, dose-response curves for pharmacology, box plots,
          violin plots, forest plots for meta-analysis. These aren't nice
          to have. A Kaplan-Meier curve is how you communicate survival
          data; a volcano plot is how you visualize differential gene
          expression. They're the native language of their respective
          fields, and if a scientist has to leave the notebook to make one,
          the analysis and the notes fall out of sync.
          <br />
          <br />
          <img
            src={LabbookChartEntry}
            alt="A draft entry with inline tables and the chart configuration drawer open on the right"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            A draft entry with the chart drawer open. Paclitaxel treatment
            capture with inline QC tables, a Python snippet for downstream
            analysis, and the chart configuration panel, all in the same
            entry.
          </span>
          <img
            src={LabbookChartTypes}
            alt="Chart selector showing Heatmap, Sankey, Kaplan-Meier, Volcano Plot, Dose-Response, Forest Plot, ROC Curve, and Plate Heatmap"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6 text-center">
            Further down the selector. Heatmaps, Sankey diagrams, and the
            biology and clinical plots: Kaplan-Meier, volcano, dose-response,
            forest, ROC, and plate heatmap.
          </span>
          Each chart has an inline data editor where the numbers that feed
          the plot live right next to it. No separate spreadsheet to
          maintain, no copy-paste step to forget. For data that already
          lives somewhere else, there's an import path for CSVs, Excel
          files, and Google Sheets directly. The Sheets connection matters
          because a lot of labs already live there for raw data capture;
          asking them to re-enter numbers into a new tool every day is a
          reliable way to ensure they stop using the new tool.
          <br />
          <br />
          <img
            src={LabbookDataTable}
            alt="Inline chart data editor showing editable rows with cells and conditions"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The inline data editor. Add rows directly, or pull data in
            from a file.
          </span>
          <img
            src={LabbookImport}
            alt="Import menu with CSV, Excel, and Google Sheets options"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6 text-center">
            CSV, Excel, and a direct Google Sheets connection.
          </span>
          <img
            src={LabbookChartRendered}
            alt="Rendered bar chart showing sample QC cellranger output with cells loaded, recovered, and mitochondrial percentage across conditions"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The rendered chart lives in the entry itself. Change the
            underlying data and the plot updates in place.
          </span>
          <Typography variant="h5" className="pt-6 pb-3 block">
            Natural language capture
          </Typography>
          A lot of scientists already lean on voice memos during bench
          work; it's the path of least resistance when your hands are
          gloved, when you're in a fume hood, or when you're in the middle
          of a timed step and can't reach for a keyboard. The problem is
          that those memos then live on a phone somewhere, disconnected
          from the experiment they belong to, and get transcribed (or
          not) later when the researcher has time. Our goal was to meet
          that habit where it already exists and make it native to the
          entry itself. A voice note block records audio directly into
          the entry; the dictation overlay transcribes speech to text in
          real time; the transcript lands as editable text alongside
          whatever else is in the entry. Same instinct, no extra
          coordination.
          <br />
          <br />
          Accuracy is the whole game here, and it's where generic
          speech-to-text tends to fall over. The browser's built-in Web
          Speech API was the obvious first stop, since it's free and
          doesn't need a vendor wired up, but after enough testing I
          couldn't get it to a place that felt usable enough to clear
          the bar I set for Labbook's recording quality. Lab dictation
          is a torrent of
          specialized vocabulary: cell lines like HEK293T and RPE-1, gene
          names like TP53 or CDKN1A, compounds like paclitaxel and
          ribonucleoprotein, concentrations read off a pipette in molar
          quantities. A transcript that turns "Cas9" into "cast nine" is
          worse than useless, because now the researcher has to stop and
          fix it instead of continuing the experiment. We use{" "}
          <a
            href="https://deepgram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Deepgram
          </a>
          's Nova-3 model for this, which handles specialized and
          technical vocabulary meaningfully better than general-purpose
          alternatives, with smart formatting and live punctuation turned
          on. For recorded voice notes we send the audio blob to the REST
          endpoint; for the live dictation overlay we stream raw PCM over
          a WebSocket with interim results on, so partial transcripts
          appear in real time and the researcher can catch and correct
          mistakes as they're speaking rather than reading the whole
          paragraph back at the end. The edge function that mints
          Deepgram tokens issues short-lived JWTs (10-120 second TTL), so
          the API key never leaves the server.
          <br />
          <br />
          Drawings are the other half of this. Plate layouts, reaction
          schemes, experimental design sketches; scientists draw
          constantly, and most ELN templates flatten that back into linear
          text boxes. A canvas-backed drawing block gives you smooth
          freehand strokes with pen and stylus input, which is
          non-negotiable for a tool that wants to compete on ergonomics.
          <br />
          <br />
          Real-time collaboration runs through all of it. Multiple people
          can work in the same entry simultaneously, with live cursors and
          presence avatars showing who's where. Labs are teams; a PI and
          three grad students touching the same experiment is the norm, not
          the exception. If the notebook doesn't handle concurrent editing
          gracefully, people fall back to emailing Word documents or
          maintaining separate copies that slowly diverge. We'll get into
          how the collaboration layer works under the hood in the stack
          section, but from a user's perspective it's straightforward:
          everyone can type at once, edits merge cleanly, and you can see
          who's there.
        </section>

        <section id="sealed-signed-provable" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Sealed, signed, and provable
          </Typography>
          <br />
          A lab notebook is a weirdly load-bearing object. On one hand
          it's somewhere to scribble; on the other it's a record that
          gets subpoenaed in patent disputes, audited during FDA
          inspections, and cited when someone tries to reproduce your
          work a decade later. If you can't prove your data wasn't
          altered after the fact, the notebook is worthless to the
          systems that need to trust it, which turns out to be most of
          the systems that matter.
          <br />
          <br />
          The FDA's taste in acronyms is unmatched. Their rubric for what
          "good" research records look like is ALCOA+: attributable,
          legible, contemporaneous, original, and accurate, plus
          complete, consistent, enduring, and available. Those nine
          words sit underneath almost every regulatory standard that
          touches lab data, from 21 CFR Part 11 in US pharma to EU GMP
          Annex 11 on the European side. None of them care how pretty
          the UI is. They care about who recorded what, when, and
          whether anyone has quietly changed it since.
          <br />
          <br />
          Every entry starts as a draft. Edit freely, save as often as
          you want, collaborate, change your mind; nothing is locked
          down. When you're ready to finalize, you commit it, and the
          word is doing real work. Under the hood, the commit:
          <br />
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>hashes the entry's content,</li>
            <li>
              verifies it slots cleanly onto the notebook's
              tamper-evident chain,
            </li>
            <li>signs the chain hash with the author's key,</li>
            <li>and writes the whole thing back atomically.</li>
          </ul>
          <br />
          Once committed, the entry is immutable. Any later tampering
          breaks the chain in a way that's detectable from any point in
          the future.
          <br />
          <br />
          <img
            src={LabbookCommittedEntry}
            alt="A committed Labbook entry showing data tables and a green Committed badge at the top with hash ID in the footer"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            A committed entry. Green "Committed" badge, hash ID in the
            footer, and the Export PDF button. Underneath, the content hash
            is linked into the notebook's chain and signed by the author.
          </span>
          Every change to every entity also gets logged to a full audit
          trail: who made the change, when, what the old value was, what
          the new value is. The activity panel surfaces this per-entry, so
          you can trace exactly when someone edited content, when the entry
          was committed, and who was present during a collaborative session.
          For a lab preparing for an inspection or filing a patent, the
          distinction matters: it's the difference between "we think we
          know what happened" and "here is a timestamped, signed,
          verifiable record of what happened."
          <br />
          <br />
          <img
            src={LabbookActivity}
            alt="Per-entry activity panel showing filtered edit events with actor and timestamp"
            className="w-80 rounded-lg border border-gray-200 my-6 block mx-auto"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6 text-center">
            The per-entry activity panel. Content edits, commits, and
            collaborative sessions with actor and timestamp, filterable by
            entity type.
          </span>
          Entries also carry tags, findings, and follow-up task lists.
          Research generates next steps constantly ("run this analysis,"
          "email Alex about those CRISPR targets," "draft Figure 5"), and
          those next steps need to stay attached to the data that
          generated them rather than drifting off into a separate project
          management tool where they lose their context.
          <br />
          <br />
          <img
            src={LabbookFindings}
            alt="Findings block below the data with a follow-up task list and tags at the bottom"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            Findings and follow-up tasks live inside the entry itself,
            right below the data that generated them.
          </span>
          For labs whose data can't live on someone else's server under
          normal terms (pre-patent research, proprietary compounds,
          patient-adjacent work), Labbook supports optional end-to-end
          encryption at the organization level. Entry content is
          encrypted client-side before it ever hits the database, with
          keys managed in a way that keeps the server unable to read the
          underlying content. The search index is maintained in encrypted
          form separately, so full-text search still works even with
          encryption enabled. It's the kind of feature where the
          complexity is almost entirely invisible to the user, but the
          absence of it would be a dealbreaker for certain customers.
          <br />
          <br />
          Regulators, collaborators, and journals all want PDFs, and the export can
          produce them at any level of the hierarchy (a single entry, a
          whole experiment, an entire notebook) with an embedded audit
          trail and chain validation baked into the document. Exports are
          content-addressed and cached, so re-exporting identical content
          is instant. Share links add visibility controls (public,
          org-only, specific users) with expiry dates and access tracking.
        </section>

        <section id="how-its-built" className="pb-20">
          <Typography variant="h3" className="pb-4">
            How it's built
          </Typography>
          <br />
          The front end is{" "}
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
          />{" "}
          on{" "}
          <TechChip name="Vite" logo="/vite.svg" href="https://vite.dev/" />,
          with{" "}
          <TechChip
            name="Tailwind"
            logo="/logos/tailwind.svg"
            href="https://tailwindcss.com/"
          />{" "}
          for styling. The editor is TipTap 3 (a ProseMirror wrapper),
          extended with custom node views for every block type described
          above: charts, drawings, voice recordings, dictation overlays,
          and the twenty-plus chart type renderers are all custom
          extensions built on top of TipTap's plugin system.
          <br />
          <br />
          Real-time collaboration is where the architecture gets
          interesting. Most collaborative editors that use Yjs (the CRDT
          library that powers Notion, Figma's FigJam, and a growing list
          of others) run a dedicated Yjs server, typically Hocuspocus, to
          relay document updates between clients. Labbook doesn't. Instead,
          it uses{" "}
          <TechChip
            name="Supabase"
            logo="/logos/supabase.svg"
            href="https://supabase.com/"
          />
          's realtime broadcast channels as the transport layer. Yjs binary
          updates get base64-encoded and shipped as broadcast events;
          the CRDT handles conflict resolution on each client
          independently. The result is one fewer service to deploy, one
          fewer bill to pay, and one fewer thing to keep running at 3 AM.
          The tradeoff is that the transport layer is doing slightly more
          work than it was designed for, but for the scale a lab actually
          operates at (a handful of people editing the same entry) it
          works cleanly and keeps the infrastructure meaningfully simpler.
          <br />
          <br />
          The backend is{" "}
          <TechChip
            name="Supabase"
            logo="/logos/supabase.svg"
            href="https://supabase.com/"
          />{" "}
          end-to-end.{" "}
          <TechChip
            name="PostgreSQL"
            logo="/logos/postgresql.svg"
            href="https://www.postgresql.org/"
          />{" "}
          for data, Auth for users and organizations, Storage for images
          and files and audio, Realtime for presence and CRDT sync, and
          Edge Functions for the handful of operations that need
          server-side trust:{" "}
          <code>commit-entry</code>, <code>verify-chain</code>,{" "}
          <code>export-audit</code>, <code>share-pdf</code>,{" "}
          <code>invite-member</code>, <code>deepgram-token</code>. There's
          no separate API layer; the client talks to Supabase directly, and
          row-level security policies enforce multi-tenancy and
          notebook-level permissions at the database layer. It's the same
          pattern I've used across several projects now, and it continues
          to hold up well for apps where the authorization model is
          expressible in SQL.
          <br />
          <br />
          The encryption layer runs entirely in the browser on top of a
          well-audited cryptography library. When E2EE is enabled, every
          content write is encrypted before it leaves the client, and
          the search index is maintained in encrypted form so queries
          still work. Voice transcription runs through Deepgram under a
          short-lived token model so the client never holds long-lived
          credentials. PDF generation uses jsPDF plus a custom
          ProseMirror-to-PDF renderer that knows how to convert every
          block type into a final document, charts included.
        </section>

        <section id="where-its-going" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Where it's going
          </Typography>
          <br />
          Labbook is in closed beta as of early 2026, with a handful of
          labs from my friend's network using it day-to-day. The things
          we've learned most from real use are the things we couldn't
          have predicted from requirements gathering alone: voice notes
          and drawings get used far more than we expected; some chart
          types barely get touched; the commit flow needs more friction
          in some places and less in others. Real users have a way of
          rearranging your assumptions about what matters.
          <br />
          <br />
          The NIH mandate is still playing out across US research
          institutions, and the window for something better in this space
          is wider than people outside it realize. The tool has to be
          genuinely good enough that people want to use it, not just
          compliant enough that administrators can check a box. That's
          the bar we're trying to clear.
          <br />
          <br />
          The roadmap from here is more of what the beta users are already
          asking for: deeper instrument integrations, better handling of
          large datasets inside entries, a more opinionated template
          library for common experimental types, and eventually the
          compliance certifications that let Labbook compete for
          regulated-industry contracts. The core (the hierarchy, the
          editor, the commit flow, the audit trail) is the part we want
          to keep stable. The edges are where we expect to spend most of
          the next year.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "foundry",
    title: "Foundry",
    description: "A complete toolkit for helping founders go from 0 to 1",
    coverImage: FoundryCover,
    coverComponent: <FoundryDataFlow />,

    overview: (
      <span>
        After working on enough projects, I noticed the same categories of
        work kept showing up: tracking finances, managing subscriptions,
        keeping tabs on the different people involved, running customer
        interviews, basic project management. Every time, I'd stitch
        together a different set of tools for the same set of problems.
        <br />
        <br />
        Foundry came out of wanting one workspace that covered all of it.
        Pipeline, books, tasks, team, all in one place and built to work
        together from the start.
      </span>
    ),
    body: (
      <>
        <section id="why-one-tool" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Why one tool
          </Typography>
          <br />
          Every project I've worked on has the same moving parts. There are
          people to keep track of: prospects, customers, collaborators,
          vendors. There's money coming in and going out, and I need to
          know where I stand. There are tasks scattered across sales,
          product, and marketing. There are subscriptions quietly charging
          my card every month. There are customer interviews to run and
          insights to capture. Every time, the same categories of work, and
          every time, a different patchwork of tools to manage them.
          <br />
          <br />
          The usual approach is to reach for what's already out there.
          HubSpot for CRM. QuickBooks for accounting. Notion or Linear for
          tasks. Google Sheets for the stuff that doesn't fit anywhere else.
          Before I know it, I'm managing a constellation of apps, each
          with its own login, its own data model, its own idea of what a
          "contact" or a "deal" is. The information I need to make a
          decision is scattered across five tabs, and the mental overhead
          of keeping it all in sync starts eating into the time I should
          be spending on the actual work.
          <br />
          <br />
          Foundry started as an answer to that. Not a jack-of-all-trades
          that does everything poorly, but a focused set of modules that
          cover the things I actually touch every day, built to work
          together from the start. The dashboard is the proof of concept
          for that idea: a single screen where pipeline value, revenue,
          expenses, cash position, budget health, and upcoming tasks are all
          visible at once, all computed in real time from the underlying data.
          <br />
          <br />
          <img
            src={FoundryDashboard}
            alt="Foundry dashboard showing pipeline value, revenue, expenses, cash position, revenue vs expenses chart, pipeline summary, budget tracking, and upcoming tasks"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The dashboard pulls from every module. Pipeline, revenue,
            expenses, and runway are all live numbers, not manually
            entered summaries.
          </span>
          None of these numbers are entered separately. Revenue comes from
          confirmed deals. Expenses come from the ledger. Burn rate and
          runway are derived from both. Budget alerts fire when actual
          spending crosses a threshold. The "Next Up" panel pulls my most
          pressing tasks by due date. Every number is a view into data that
          lives somewhere else in the system, which means it's always current
          and never a stale snapshot from last Tuesday.
        </section>
        <section id="selling" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Selling
          </Typography>
          <br />
          Foundry's CRM follows a deal through its full lifecycle. A new
          lead enters the pipeline, gets moved through stages (reached out,
          responded, demo, proposal, negotiation), and eventually lands on
          won or lost. Each deal card shows the contact, value, source, and
          how long it's been sitting in its current stage.
          <br />
          <br />
          <img
            src={FoundryPipeline}
            alt="Pipeline Kanban board showing deals across stages from New Lead through Won, with deal values and days in stage"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            Eight active deals totaling $189,500 in raw pipeline value,
            $110.8k weighted by stage probability. The orange day
            counts flag deals going stale.
          </span>
          Each stage carries a win probability, so the weighted pipeline
          number on the dashboard is a real forecast, not just a sum. A
          $55,000 deal at proposal stage (40% probability) contributes
          $22,000. Deals that sit too long get flagged as stale, both on
          the dashboard and in the pipeline view, as a nudge to follow up
          or move on.
          <br />
          <br />
          Behind the pipeline, contacts and activity work as one connected
          layer. Every person, whether a prospect, customer, investor, or
          vendor, lives in one table. Every interaction (emails, calls,
          meetings, notes) is logged to an activity feed and linked to both
          the contact and the deal, so I can trace the full history of a
          relationship from first intro to closed deal.
          <br />
          <br />
          <img
            src={FoundryActivity}
            alt="Activity feed showing emails, calls, meetings, and notes with contacts and dates"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The activity feed. Each entry is tagged by type (email, call,
            meeting, note) and linked to the contact and company.
          </span>
          The most interesting moment is when a deal moves to "won." A
          pending revenue entry is automatically created in the ledger,
          tied to the deal's contact and value. It shows up as a banner
          on the financials page with one-click confirmation. That bridge
          between CRM and accounting is the kind of thing that only works
          when the data lives in one place. In separate tools, closing a
          deal means switching apps and manually logging the revenue.
        </section>
        <section id="real-books" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Real books from day one
          </Typography>
          <br />
          I've seen the same pattern play out multiple times: either track
          finances in spreadsheets until things get complicated enough to
          justify QuickBooks (and then deal with a messy migration where
          half the data gets lost or recategorized), or overcommit to
          QuickBooks too early and waste money on software you barely use
          while the project is still finding its legs. Foundry's approach
          is to do real double-entry accounting from the start, but hide
          the complexity behind a simple interface.
          <br />
          <br />
          <img
            src={FoundryFinancials}
            alt="Financials page showing transaction ledger with pending CRM revenue banner, expense and revenue entries"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            The ledger, with a pending revenue entry from a won deal at the
            top. Recurring expenses are tagged "rec," CRM-sourced revenue
            is tagged "CRM."
          </span>
          Every transaction creates balanced debit and credit entries across
          a chart of accounts that gets seeded automatically when I create
          an organization. When I log $847 to AWS for cloud hosting, the
          system debits the Software expense account and credits Cash. I
          never see that machinery unless I want to. From the surface,
          I'm just logging transactions. But under the hood, the books
          balance, and that means the financial statements are real: P&L,
          balance sheet, and cash flow, all computed on the fly from
          transaction lines grouped by account type and month.
          <br />
          <br />
          The dashboard numbers (burn rate, runway, cash position) flow from
          the same source. There's no separate "update the financials" step.
          Log a transaction, and every derived number in the system updates
          immediately.
        </section>
        <section id="everything-else" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Everything else
          </Typography>
          <br />
          Beyond the core CRM and accounting, Foundry has a handful of
          features that round out the day-to-day.
          <br />
          <br />
          <strong>Tasks</strong> are goal-oriented rather than just
          checkboxes. "Call prospective customers" is 6 of 10 calls, with a
          progress ring and a bar that fills as I go. Each task has a
          category, priority, assignee, and due date. It's not trying to
          replace Linear for product work. It's a lightweight way to track
          the cross-functional tasks that come with building a company: sales
          calls, customer interviews, testimonials, investor updates.
          <br />
          <br />
          <img
            src={FoundryTasks}
            alt="Tasks page with progress rings, priority tags, assignees, and progress bars"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            21 of 44 units complete across 8 tasks. Progress rings give
            an at-a-glance sense of where each task stands.
          </span>
          <strong>Subscriptions</strong> track every SaaS tool and
          infrastructure cost: name, category, renewal date, price, and a
          login link for quick access. The summary breaks out monthly vs.
          yearly spend, paid vs. free tools, and total monthly burn from
          software alone. Knowing that my tooling costs $1,032/mo (and
          that $847 of that is AWS) is a more useful number than a vague
          sense that "I spend a lot on software."
          <br />
          <br />
          <strong>Tools</strong> includes an equity dilution calculator
          (model a raise with post-money cap and option pool to see the
          ownership split) and a runway projection that visualizes the
          burn trajectory month by month.
          <br />
          <br />
          <img
            src={FoundryTools}
            alt="Equity dilution calculator and runway projection side by side"
            className="w-full rounded-lg border border-gray-200 my-6"
          />
          <span className="text-sm text-gray-500 block -mt-4 mb-6">
            A $500k raise at a $5M post-money cap with a 10% option
            pool. Runway projection shows ~5 months at the current
            burn rate.
          </span>
          <strong>Modules</strong> let me toggle everything on or off.
          I didn't need every feature from day one, so the sidebar adapts
          to show only what's enabled. Dashboard is required; everything
          else is optional. The app grows with me.
        </section>
        <section id="how-its-built" className="pb-20">
          <Typography variant="h3" className="pb-4">
            How it's built
          </Typography>
          <br />
          Foundry is{" "}
          <TechChip
            name="React"
            logo="/logos/react.svg"
            href="https://react.dev/"
          />{" "}
          and{" "}
          <TechChip
            name="Vite"
            logo="/vite.svg"
            href="https://vite.dev/"
          />
          {" "}with no component library. Every button, card, table, and
          toggle is custom-built with inline styles and a Zinc-based color
          palette.
          <br />
          <br />
          The backend is entirely{" "}
          <TechChip
            name="Supabase"
            logo="/logos/supabase.svg"
            href="https://supabase.com/"
          />
          , and there is no API layer. The React client talks directly to
          Supabase's JavaScript SDK, and all authorization is enforced
          through PostgreSQL row-level security. Every table has a policy
          that checks the user's active organization, so multi-tenancy is
          enforced at the data layer, not in application code. Business
          logic that needs to be atomic (creating an org, handling signups,
          managing invites) lives in Supabase RPCs, which are just
          PostgreSQL functions called from the client.
          <br />
          <br />
          State management is vanilla React with no external libraries. A
          generic <code>useTable()</code> hook provides a reusable
          data-fetching pattern that about ten domain-specific hooks build
          on: <code>useDeals()</code>, <code>useContacts()</code>,{" "}
          <code>useTransactions()</code>, <code>useFinancials()</code>, and
          so on. The financials hook is the most interesting one: it fetches
          all transaction lines, groups them by account type and month, and
          computes the P&L, balance sheet, and cash flow on every render.
          The database is 13 migrations deep, and Supabase Edge Functions
          handle the one thing that can't live in the client: sending
          invitation emails.
        </section>
        <section id="where-its-going" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Where it's going
          </Typography>
          <br />
          Any individual module here is simpler than its standalone
          equivalent. HubSpot is a better CRM. QuickBooks is better
          accounting software. Linear is a better task tracker. But none
          of them know about each other, and that's the point. The power
          of one system is the connections: a deal closes and revenue
          appears in the ledger. Budget alerts fire from actual
          transactions, not manual entries. Runway is a real number
          derived from real books, not a guess in a spreadsheet.
          <br />
          <br />
          Foundry is still actively evolving. Fundraising and cap table
          modules are on the roadmap, and there's room to go deeper on
          reporting. But even in its current form, it's the tool I wish
          I'd had from the beginning.
        </section>
      </>
    ),
    href: "",
  },
  {
    id: "lumon",
    title: "Lumon terminal pro",
    description: "Finding the scary numbers",
    coverImage: "",
    coverVideo: LumonVideo,
    repoUrl: "https://github.com/bsxp/lumon-terminal-pro",
    overview: (
      <span>
        Severance dropped a new season, I watched it, and I couldn't stop
        thinking about how the Lumon terminals looked on screen.
        Wobbling cyan numbers, CRT scanlines, outlined typography that
        shouldn't work but does. I spent a weekend rebuilding the screen
        in the browser to see how close I could get with pure CSS.
      </span>
    ),
    body: (
      <>
        <section id="effects" className="pb-20">
          <Typography variant="h3" className="pb-4">
            The effects
          </Typography>
          <br />
          The visuals are pure CSS. No canvas, no animation libraries,
          and most of the tricks are one or two lines.
          <br />
          <br />
          <Typography variant="h5" className="pt-6 pb-3 block">
            CRT scanlines
          </Typography>
          A three-pixel horizontal-band gradient with the background
          position shifting on an infinite loop.
          <br />
          <br />
          <div className="lumon-crt-demo h-32 rounded-lg my-4 flex items-center justify-center">
            <span
              className="text-2xl"
              style={{
                fontFamily: "'Google Sans Code', monospace",
                WebkitTextStroke: "1.4px #53eafd",
                color: "transparent",
              }}
            >
              LUMON
            </span>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-6 font-mono leading-relaxed">
            <code>{`.crt {
  background: linear-gradient(to top, #000, #000, #333, #333);
  background-size: 100% 3px;
  animation: scanlines 55s linear infinite;
}
@keyframes scanlines {
  from { background-position: 0 0; }
  to   { background-position: 0 -10px; }
}`}</code>
          </pre>

          <Typography variant="h5" className="pt-6 pb-3 block">
            Outlined digits
          </Typography>
          <code>-webkit-text-stroke</code> on a transparent fill. The
          counters of each glyph stay visible, which is what gives the
          numbers that hollow-neon look the show is after. The stroke
          width bumps up across states to signal emphasis without
          filling the glyph in.
          <br />
          <br />
          <div
            className="bg-black rounded-lg my-4 p-8 grid grid-cols-4 gap-x-10 gap-y-2 place-items-center"
            style={{ fontFamily: "'Google Sans Code', monospace" }}
          >
            <span
              className="text-3xl"
              style={{
                WebkitTextStroke: "3px #53eafd",
                color: "transparent",
              }}
            >
              0
            </span>
            <span
              className="text-3xl"
              style={{
                WebkitTextStroke: "2.4px #53eafd",
                color: "transparent",
              }}
            >
              0
            </span>
            <span
              className="text-3xl"
              style={{
                WebkitTextStroke: "2px #53eafd",
                color: "transparent",
              }}
            >
              0
            </span>
            <span
              className="text-3xl"
              style={{
                WebkitTextStroke: "1.4px #53eafd",
                color: "transparent",
              }}
            >
              0
            </span>
            <span />
            <span />
            <span />
            <span className="flex flex-col items-center text-cyan-300 text-xs leading-tight">
              <span className="text-lg leading-none">↑</span>
              <span className="mt-1">1.4px stroke</span>
            </span>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-6 font-mono leading-relaxed">
            <code>{`.digit {
  -webkit-text-stroke: 1.4px #53eafd;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;
}
.digit:hover    { -webkit-text-stroke-width: 2.4px; }
.digit.selected { -webkit-text-stroke-width: 3px;   }`}</code>
          </pre>

          <Typography variant="h5" className="pt-6 pb-3 block">
            Per-digit bounce
          </Typography>
          A 12-second spring keyframe on every digit, with a random{" "}
          <code>animation-delay</code> between -6s and 0s and a per-digit{" "}
          <code>--tilt</code> variable that one in four numbers uses to
          sit at a small angle.
          <br />
          <br />
          <div
            className="bg-black rounded-lg my-4 p-6 grid grid-cols-6 gap-6 place-items-center"
            style={{ fontFamily: "'Google Sans Code', monospace" }}
          >
            {[
              { n: 3, tilt: 0, delay: -1.2 },
              { n: 7, tilt: 5, delay: -3.8 },
              { n: 1, tilt: 0, delay: -0.4 },
              { n: 9, tilt: 0, delay: -5.1 },
              { n: 4, tilt: 3, delay: -2.7 },
              { n: 6, tilt: 0, delay: -4.5 },
              { n: 2, tilt: 0, delay: -1.9 },
              { n: 8, tilt: 6, delay: -0.1 },
              { n: 5, tilt: 0, delay: -3.3 },
              { n: 0, tilt: 0, delay: -2.2 },
              { n: 1, tilt: 0, delay: -4.8 },
              { n: 7, tilt: 2, delay: -0.7 },
            ].map(({ n, tilt, delay }, i) => (
              <span
                key={i}
                className="lumon-spring-bounce text-3xl"
                style={{
                  WebkitTextStroke: "1.4px #53eafd",
                  color: "transparent",
                  ["--tilt" as never]: `${tilt}deg`,
                  animationDelay: `${delay}s`,
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-6 font-mono leading-relaxed">
            <code>{`.digit {
  --tilt: 0deg;
  animation: spring-bounce 12s ease-in-out infinite;
}
@keyframes spring-bounce {
  0%   { transform: translateY(0)    rotate(var(--tilt)); }
  20%  { transform: translateY(-3px) rotate(var(--tilt)); }
  40%  { transform: translateY(2px)  rotate(var(--tilt)); }
  60%  { transform: translateY(-1px) rotate(var(--tilt)); }
  80%  { transform: translateY(2px)  rotate(var(--tilt)); }
  100% { transform: translateY(0)    rotate(var(--tilt)); }
}`}</code>
          </pre>

          <Typography variant="h5" className="pt-6 pb-3 block">
            mix-blend-difference on the percentage bar
          </Typography>
          The label uses <code>mix-blend-mode: difference</code>. Cyan
          text over cyan fill inverts to dark; cyan text over black
          stays cyan. The label reads in both regions as the fill
          slides underneath it.
          <br />
          <br />
          <div className="bg-black rounded-lg my-4 p-8 flex items-center justify-center">
            <div className="relative w-full max-w-md h-10 border-2 border-cyan-300 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-cyan-300"
                style={{ width: "50%" }}
              />
              <div
                className="relative flex h-full w-full items-center px-3 text-xl text-cyan-300"
                style={{
                  mixBlendMode: "difference",
                  fontFamily: "'Google Sans Code', monospace",
                }}
              >
                50%
              </div>
            </div>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-6 font-mono leading-relaxed">
            <code>{`.fill  { position: absolute; inset: 0 auto 0 0; width: 50%; background: #53eafd; }
.label { mix-blend-mode: difference; color: #53eafd; }`}</code>
          </pre>

          <Typography variant="h5" className="pt-6 pb-3 block">
            Layered outline text
          </Typography>
          Two copies of the same string stacked: a back copy stroked
          with transparent fill, a front copy filled solid. The filled
          label sits inside the glowing outline.
          <br />
          <br />
          <div className="bg-black rounded-lg my-4 p-8 flex items-center justify-center">
            <div
              className="relative text-3xl"
              style={{ fontFamily: "'Google Sans Code', monospace" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  WebkitTextStroke: "5px #53eafd",
                  color: "transparent",
                }}
              >
                50% COMPLETE
              </div>
              <div className="relative text-black">50% COMPLETE</div>
            </div>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-6 font-mono leading-relaxed">
            <code>{`.back  {
  position: absolute; inset: 0;
  -webkit-text-stroke: 5px #53eafd;
  -webkit-text-fill-color: transparent;
}
.front { position: relative; color: #000; }`}</code>
          </pre>
        </section>

        <section id="closing" className="pb-20">
          <Typography variant="h3" className="pb-4">
            Just for fun
          </Typography>
          <br />
          Watched Severance, loved the way the terminal looked, built
          one. The fun was all in the CSS:{" "}
          <code>-webkit-text-stroke</code>, <code>mix-blend-mode</code>,
          a background-position that just keeps drifting. Not tools I
          reach for in day-to-day product work, which is exactly why it
          felt good to spend a weekend here.
        </section>
      </>
    ),
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
