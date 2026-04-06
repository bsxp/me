import { lazy, type ComponentType } from "react";
import { POST_META as sideProjectMeta } from "./4-4-2026-my-side-project-starter-pack";
import { POST_META as beWeirdMeta } from "./3-13-2026-be-weird";
import { POST_META as aiAndJobsMeta } from "./3-20-2026-ai-and-jobs";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
}

export interface Post {
  meta: PostMeta;
  Component: React.LazyExoticComponent<ComponentType>;
}

export const POSTS: Post[] = [
  {
    meta: sideProjectMeta,
    Component: lazy(() => import("./4-4-2026-my-side-project-starter-pack")),
  },
  {
    meta: beWeirdMeta,
    Component: lazy(() => import("./3-13-2026-be-weird")),
  },
  {
    meta: aiAndJobsMeta,
    Component: lazy(() => import("./3-20-2026-ai-and-jobs")),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}
