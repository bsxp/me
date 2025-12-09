
import PatternImage1 from "@/assets/pattern-1.jpg";
import PatternImage2 from "@/assets/pattern-2.jpg";
import PatternImage3 from "@/assets/pattern-3.jpg";
import PatternImage4 from "@/assets/pattern-4.jpg";

const CIRCLE_DIAMETER = 120;

const BLOG_CATEGORIES = [
  {
    label: "Urbanism",
    image: PatternImage1,
    textColor: "black",
  },
  {
    label: "Travel",
    image: PatternImage2,
    textColor: "white",
  },
  {
    label: "Engineering",
    image: PatternImage3,
    textColor: "white",
  },
  {
    label: "Design",
    image: PatternImage4,
    textColor: "white",
  },
];

// Make it 3x longer
const BLOG_CATEGORIES_FULL = [
  ...new Array(2).fill(BLOG_CATEGORIES).flat(),
  BLOG_CATEGORIES[0],
  BLOG_CATEGORIES[1],
];
const START_Y = 300;
const GAP_Y = 30;
const SCROLL_HEIGHT = (BLOG_CATEGORIES_FULL.length - 2) * 500; // Adjust multiplier as needed
const CHIP_HEIGHT = 200;
const CHIP_WIDTH = 500;
const LETTER_SPACING = "-1.75px";

export { CIRCLE_DIAMETER, BLOG_CATEGORIES, BLOG_CATEGORIES_FULL, START_Y, GAP_Y, SCROLL_HEIGHT, CHIP_HEIGHT, CHIP_WIDTH, LETTER_SPACING };