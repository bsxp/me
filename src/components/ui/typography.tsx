import { createElement } from "react";
import { cn } from "@/lib/utils";

type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "eyebrow"
  | "caption";

const validVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "div",
  "eyebrow",
  "caption",
];

const variantElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  div: "div",
  eyebrow: "span",
  caption: "p",
};

function Typography({
  variant = "p",
  className,
  children,
  ...props
}: React.ComponentProps<"p"> & { variant: TypographyVariants }) {
  if (!validVariants.includes(variant)) {
    throw new Error(`Invalid typography variant: ${variant}`);
  }

  const childrenArray = Array.isArray(children) ? children : [children];

  const baseElement = createElement(
    variantElements[variant],
    {
      className: cn(
        "inline-block w-auto",
        variant === "eyebrow" &&
          "text-xs font-medium uppercase tracking-widest",
        variant === "caption" && "text-sm text-gray-500",
        variant === "h1" && "font-[Outfit] text-6xl font-bold",
        variant === "h2" && "font-[Outfit] text-5xl font-bold",
        variant === "h3" && "font-[Outfit] text-4xl font-bold",
        variant === "h4" && "font-[Outfit] text-3xl font-bold",
        variant === "h5" && "font-[Outfit] text-2xl font-bold",
        variant === "h6" && "font-[Outfit] text-xl font-bold",
        variant === "p" && "font-[Inter] text-xl font-semibold",
        className,
      ),

      ...props,
    },
    childrenArray
  );

  return baseElement;
}

export { Typography, type TypographyVariants };
