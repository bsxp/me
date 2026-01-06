import * as React from "react"

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl"

const BREAKPOINT_MIN_WIDTH: Record<Breakpoint, number> = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

const BREAKPOINT_ORDER: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"]

const getBreakpointFromWidth = (width: number): Breakpoint => {
  let active: Breakpoint = "base"

  for (const key of BREAKPOINT_ORDER) {
    if (width >= BREAKPOINT_MIN_WIDTH[key]) {
      active = key
    }
  }

  return active
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>("base")

  React.useEffect(() => {
    const update = () => {
      setBreakpoint(getBreakpointFromWidth(window.innerWidth))
    }

    update()
    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("resize", update)
    }
  }, [])

  const isAtLeast = React.useCallback(
    (target: Breakpoint) =>
      BREAKPOINT_ORDER.indexOf(breakpoint) >= BREAKPOINT_ORDER.indexOf(target),
    [breakpoint]
  )

  return {
    breakpoint,
    isAtLeast,
    atLeast: {
      sm: isAtLeast("sm"),
      md: isAtLeast("md"),
      lg: isAtLeast("lg"),
      xl: isAtLeast("xl"),
      "2xl": isAtLeast("2xl"),
    },
  }
}

