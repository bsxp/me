import { type ComponentType } from "react";
import { POST_META as graveyardMeta } from "./4-27-2026-my-engineering-tools-graveyard";
import MyEngineeringToolsGraveyard from "./4-27-2026-my-engineering-tools-graveyard";
import { POST_META as txdotBbqMeta } from "./4-20-2026-txdot-bbq";
import TxDOTBBQ from "./4-20-2026-txdot-bbq";
import { POST_META as sideProjectMeta } from "./4-4-2026-my-side-project-starter-pack";
import SideProjectStarterPack from "./4-4-2026-my-side-project-starter-pack";
import { POST_META as aiAndJobsMeta } from "./3-20-2026-ai-and-jobs";
import AiAndJobs from "./3-20-2026-ai-and-jobs";
import { POST_META as beWeirdMeta } from "./3-13-2026-be-weird";
import BeWeird from "./3-13-2026-be-weird";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
}

export interface Post {
  meta: PostMeta;
  Component: ComponentType;
}

export const POSTS: Post[] = [
  {
    meta: graveyardMeta,
    Component: MyEngineeringToolsGraveyard,
  },
  {
    meta: txdotBbqMeta,
    Component: TxDOTBBQ,
  },
  {
    meta: sideProjectMeta,
    Component: SideProjectStarterPack,
  },
  {
    meta: aiAndJobsMeta,
    Component: AiAndJobs,
  },
  {
    meta: beWeirdMeta,
    Component: BeWeird,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}
