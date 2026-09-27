import type { Project } from "./projects";

// Some projects link out to a blog post instead of a project page
export function projectHref(project: Project) {
  return project.href.startsWith("/") ? project.href : `/projects/${project.id}`;
}

// Projects migrated without an overview or body yet only have a placeholder page
export function hasWriteUp(project: Project) {
  return Boolean(project.overview || project.body);
}
