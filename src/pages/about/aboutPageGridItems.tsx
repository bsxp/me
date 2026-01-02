import AmsterdamImage from "@/assets/amsterdam.jpg";
import AustinAerialImage from "@/assets/austin-aerial.jpg";
import CodingImage from "@/assets/coding.jpg";
import UiDesignImage from "@/assets/ui-design.jpg";
import BeachImage from "@/assets/beach-small.jpg";
import BigBenImage from "@/assets/big-ben-small.jpg";
import BrusselsImage from "@/assets/brussels-small.jpg";
import EdinburghImage from "@/assets/edinburgh-small.jpg";
import LisbonImage from "@/assets/lisbon-small.jpg";
import NeuschwansteinImage from "@/assets/neuschwanstein-small.jpg";
import OregonImage from "@/assets/oregon-small.jpg";
import PragueBridge from "@/assets/prague-bridge-small.jpg";
import PragueImage from "@/assets/prague-small.jpg";
import RainierImage from "@/assets/rainier-small.jpg";
import ZurichImage from "@/assets/zurich-small.jpg";
import { GRID_SPACING } from "./config";
import { Typography } from "@/components/ui/typography";

const aboutPageGridItems = [
  {
    image: AmsterdamImage,
    top: 8 * GRID_SPACING,
    left: 6 * GRID_SPACING,
    type: "image",
  },
  {
    image: AustinAerialImage,
    top: 3 * GRID_SPACING,
    left: 7 * GRID_SPACING,
    type: "image",
  },
  {
    image: CodingImage,
    top: 5 * GRID_SPACING,
    left: 5 * GRID_SPACING,
    type: "image",
  },
  {
    image: UiDesignImage,
    top: 8 * GRID_SPACING,
    left: 2 * GRID_SPACING,
    type: "image",
  },
  {
    image: BeachImage,
    top: 3 * GRID_SPACING,
    left: 6 * GRID_SPACING,
    type: "image",
  },
  {
    image: BigBenImage,
    top: 4 * GRID_SPACING,
    left: 10 * GRID_SPACING,
    type: "image",
  },
  {
    image: BrusselsImage,
    top: 2 * GRID_SPACING,
    left: 12 * GRID_SPACING,
    type: "image",
  },
  {
    image: EdinburghImage,
    top: 4 * GRID_SPACING,
    left: 9 * GRID_SPACING,
    type: "image",
  },
  {
    image: LisbonImage,
    top: 5 * GRID_SPACING,
    left: 7 * GRID_SPACING,
    type: "image",
  },
  {
    image: NeuschwansteinImage,
    top: 6 * GRID_SPACING,
    left: 5 * GRID_SPACING,
    type: "image",
  },
  {
    image: OregonImage,
    top: 6 * GRID_SPACING,
    left: 8 * GRID_SPACING,
    type: "image",
  },
  {
    image: PragueBridge,
    top: 2 * GRID_SPACING,
    left: 10 * GRID_SPACING,
    type: "image",
  },
  {
    image: PragueImage,
    top: 7 * GRID_SPACING,
    left: 4 * GRID_SPACING,
    type: "image",
  },
  {
    image: RainierImage,
    top: 6 * GRID_SPACING,
    left: 3 * GRID_SPACING,
    type: "image",
  },
  {
    image: ZurichImage,
    top: 7 * GRID_SPACING,
    left: 7 * GRID_SPACING,
    type: "image",
  },
  {
    type: "div",
    top: 6 * GRID_SPACING,
    left: 10 * GRID_SPACING,
    content: (
      <div id="about-me-description" className="p-1 flex flex-col gap-2">
        <Typography variant="h6" className="z-50 font-xl">
          About me
        </Typography>
        <Typography
          variant="caption"
          className="z-50 text-gray-700"
          style={{ maxWidth: GRID_SPACING * 4 }}
        >
          Hidden across the world are the keys to unlocking human-centric cities. I believe that through the power of data and technology, we can reshape our urban environments to unlock happy, healthy, and wealthy societies around the world. 
        </Typography>
      </div>
    ),
  },
];



export { aboutPageGridItems };
