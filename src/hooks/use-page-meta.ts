import { useEffect } from "react"

const SITE_NAME = "Chris Porter"

// Captured once from index.html so pages can restore it when they unmount
const defaultDescription =
  typeof document === "undefined"
    ? ""
    : document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""

// Sets the tab title and meta description for the current page, restoring the
// site defaults on unmount. Passing no title does nothing, so a page can call
// this unconditionally while a child (e.g. the not-found page) sets its own.
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    if (!title) return
    const meta = document.querySelector('meta[name="description"]')
    document.title = `${title} — ${SITE_NAME}`
    meta?.setAttribute("content", description || defaultDescription)

    return () => {
      document.title = SITE_NAME
      meta?.setAttribute("content", defaultDescription)
    }
  }, [title, description])
}
