import { Typography } from "@/components/ui/typography";
import { ProfileClock } from "./ProfileClock";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NoiseBackground from "@/assets/noise.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "@/hooks/use-breakpoint";

const CIRCLE_DIAMETER = 120;
const GUTTER_SIZE = 16;

const BLOB_INTERVAL_MS = 2000;

const BLOB1_BASE_ANGLE = 175;
const BLOB2_BASE_ANGLE = 40;

const VALUE_CHANGE_PROBABILITY = 0.3; // 30% chance to change, 70% chance to stay the same
const BORDER_RADIUS_MIN = 20;
const BORDER_RADIUS_MAX = 80;

const INITIAL_BLOB_RADII: [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
] = [24, 76, 35, 65, 27, 36, 64, 73];

type GradientStops = [number, number, number, number];

type ColorQuad = [string, string, string, string];

// Fixed 4-color palettes per blob (do not rotate colors, only stop positions)
const BLOB1_COLORS: ColorQuad = [
  "var(--color-amber-200)",
  "transparent",
  "var(--color-rose-300)",
  "var(--color-sky-500)",
];

const BLOB2_COLORS: ColorQuad = [
  "var(--color-blue-300)",
  "var(--color-rose-300)",
  "transparent",
  "var(--color-amber-400)",
];

// A few preset stop configurations so we can fade between them.
// Each roughly respects 0–25%, 25–50%, 50–75%, 75–100% segment ordering.
const BLOB1_GRADIENT_PRESETS: GradientStops[] = [
  [15, 35, 65, 100],
  [10, 40, 70, 100],
  [20, 50, 75, 100],
];

const BLOB2_GRADIENT_PRESETS: GradientStops[] = [
  [18, 40, 68, 100],
  [22, 46, 72, 100],
  [28, 52, 78, 100],
];

function maybeMutateValue(
  current: number,
  min: number,
  max: number,
  changeProbability: number
): number {
  if (Math.random() > changeProbability) {
    return current;
  }

  const clampedMin = Math.min(min, max);
  const clampedMax = Math.max(min, max);
  return clampedMin + Math.random() * (clampedMax - clampedMin);
}

function mutateBorderRadii(
  current: [number, number, number, number, number, number, number, number]
): [number, number, number, number, number, number, number, number] {
  return current.map((value) =>
    maybeMutateValue(
      value,
      BORDER_RADIUS_MIN,
      BORDER_RADIUS_MAX,
      VALUE_CHANGE_PROBABILITY
    )
  ) as [number, number, number, number, number, number, number, number];
}

function radiiToBorderRadiusCss(
  radii: [number, number, number, number, number, number, number, number]
): string {
  const [r1, r2, r3, r4, r5, r6, r7, r8] = radii;
  // Maintain the "1 2 3 4 / 5 6 7 8" border-radius syntax
  return `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;
}

function getNextPresetIndex(currentIndex: number, total: number): number {
  if (total <= 1) return 0;
  let next = currentIndex;
  while (next === currentIndex) {
    next = Math.floor(Math.random() * total);
  }
  return next;
}

function buildLinearGradient(
  angleDeg: number,
  colors: [string, string, string, string],
  stops: GradientStops
): string {
  const [stop1, stop2, stop3, stop4] = stops;
  const [color1, color2, color3, color4] = colors;

  return `linear-gradient(${angleDeg}deg, ${color1} ${stop1}%, ${color2} ${stop2}%, ${color3} ${stop3}%, ${color4} ${stop4}%)`;
}

function jitterAngle(baseAngle: number, maxDelta: number = 15): number {
  const delta = (Math.random() * 2 - 1) * maxDelta; // -maxDelta to +maxDelta
  return baseAngle + delta;
}

const glassMorphism = {
  // Glassmorphism effect
  background: "rgba(255, 255, 255, 0.3)",
};

function IntroPanel() {
  const { atLeast } = useBreakpoint();
  const navigate = useNavigate();
  const [blob1Radii, setBlob1Radii] =
    useState<[number, number, number, number, number, number, number, number]>(
      INITIAL_BLOB_RADII
    );
  const [blob2Radii, setBlob2Radii] =
    useState<[number, number, number, number, number, number, number, number]>(
      INITIAL_BLOB_RADII
    );

  const [blob1PresetIndex, setBlob1PresetIndex] = useState(0);
  const [blob2PresetIndex, setBlob2PresetIndex] = useState(0);

  const [blob1Angle, setBlob1Angle] = useState<number>(BLOB1_BASE_ANGLE);
  const [blob2Angle, setBlob2Angle] = useState<number>(BLOB2_BASE_ANGLE);

  useEffect(() => {
    // Kick off the first animation step.

    const id = window.setInterval(() => {
      // Animate blob border-radii (shape)
      setBlob1Radii((current) => mutateBorderRadii(current));
      setBlob2Radii((current) => mutateBorderRadii(current));

      // Step through preset gradients by changing which tri-color layer is visible
      setBlob1PresetIndex((current) =>
        getNextPresetIndex(current, BLOB1_GRADIENT_PRESETS.length)
      );
      setBlob2PresetIndex((current) =>
        getNextPresetIndex(current, BLOB2_GRADIENT_PRESETS.length)
      );

      // Slightly jitter the gradient angles each tick within ±30°
      setBlob1Angle(() => jitterAngle(BLOB1_BASE_ANGLE));
      setBlob2Angle(() => jitterAngle(BLOB2_BASE_ANGLE));
    }, BLOB_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full">
      <ProfileClock />
      <div
        className="absolute w-full h-full blur-3xl overflow-hidden transition-[border-radius] duration-2000 ease-in-out"
        style={{
          borderRadius: radiiToBorderRadiusCss(blob1Radii),
          animation: "blob1Opacity 10s ease-in-out infinite",
          // mixBlendMode: "color-dodge"
        }}
      >
        {BLOB1_GRADIENT_PRESETS.map((stops, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: blob1PresetIndex === index ? 0.6 : 0,
              background: buildLinearGradient(blob1Angle, BLOB1_COLORS, stops),
            }}
          />
        ))}
      </div>
      <div
        className="absolute w-full h-full blur-3xl opacity-20 overflow-hidden transition-[border-radius] duration-2000 ease-in-out"
        style={{
          borderRadius: radiiToBorderRadiusCss(blob2Radii),
          animation: "blob2Opacity 10s ease-in-out infinite",
          // mixBlendMode: "color-dodge"
        }}
      >
        {BLOB2_GRADIENT_PRESETS.map((stops, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: blob2PresetIndex === index ? 0.6 : 0,
              background: buildLinearGradient(blob2Angle, BLOB2_COLORS, stops),
            }}
          />
        ))}
      </div>
      <div
        id="under-profile-shape"
        className="absolute left-0 top-0 z-10 bg-green-500/0"
        style={{
          width: CIRCLE_DIAMETER + GUTTER_SIZE,
          height: CIRCLE_DIAMETER + GUTTER_SIZE,
          borderRadius: `${CIRCLE_DIAMETER / 1.5}px`,
          // ...glassMorphism,
        }}
      />

      <div
        id="left-panel"
        className={cn(
          "absolute left-0 border-l-white border-b-white border border-r-transparent border-t-transparent z-0"
        )}
        style={{
          top: `${CIRCLE_DIAMETER + GUTTER_SIZE}px`,
          height: `calc(100% - (${CIRCLE_DIAMETER + GUTTER_SIZE}px))`,
          width: `${CIRCLE_DIAMETER + GUTTER_SIZE}px`,
          borderRadius:  `${CIRCLE_DIAMETER / 2}px 0px 0px ${
            CIRCLE_DIAMETER / 2
          }px / ${CIRCLE_DIAMETER / 2}px 16px ${CIRCLE_DIAMETER / 2}px ${
            CIRCLE_DIAMETER / 2
          }px`,
          ...glassMorphism,
        }}
      >
        <div
          className="absolute border border-l-white border-t-white border-r-transparent border-b-transparent aspect-square"
          style={{
            top: -1,
            left: -1,
            width: CIRCLE_DIAMETER / 2,
            borderRadius: `${CIRCLE_DIAMETER / 2}px 0 0 0`,
          }}
        />
      </div>
      <div
        id="main-panel"
        className={cn(
          "absolute flex flex-col items-center justify-center border border-b-white border-l-transparent border-t-white border-r-white"
        )}
        style={{
          top: 0,
          left: `${CIRCLE_DIAMETER + GUTTER_SIZE}px`,
          width: `calc(100% - (${CIRCLE_DIAMETER + GUTTER_SIZE}px))`,
          height: "100%",
          borderRadius: `${CIRCLE_DIAMETER / 2}px 16px ${
            CIRCLE_DIAMETER / 2
          }px 0`,
          ...glassMorphism,
        }}
      >
        <div
          id="right-outer-curve"
          className="absolute -top-px -left-px w-1/2 border-t-white border border-l-white border-r-transparent border-b-transparent"
          style={{
            height: CIRCLE_DIAMETER / 2,
            borderRadius: `${CIRCLE_DIAMETER}px 16px ${
              CIRCLE_DIAMETER / 2
            }px 0 / ${CIRCLE_DIAMETER}px 16px ${CIRCLE_DIAMETER / 2}px 0`,
          }}
        />
        <div
          id="white-inner-curve"
          className="absolute top-0"
          style={{
            width: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + GUTTER_SIZE - 3,
            height: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + GUTTER_SIZE - 3,
            left: -(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 - 1 - GUTTER_SIZE + 4,
            top: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 - 1 - GUTTER_SIZE + 4,
            background: `radial-gradient(
              circle at -1px -1px,
              transparent 0px,
              transparent ${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 13}px,
              white ${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 13}px,
              white ${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 14}px,
              transparent ${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 14}px
              )`,
          }}
        />
        <div
          id="white-inner-fill"
          className="absolute top-0"
          style={{
            width: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + GUTTER_SIZE - 3,
            height: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + GUTTER_SIZE - 3,
            left: -(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 - 1 - GUTTER_SIZE + 3,
            top: (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 - 1 - GUTTER_SIZE + 3,
            // backgroundColor: 'red',
            background: `radial-gradient(
            circle at 0 0,
            transparent 0px,
            transparent ${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 13}px,
            rgba(255, 255, 255, 0.3) ${
              (CIRCLE_DIAMETER + GUTTER_SIZE) / 2 + 13
            }px
            )`,
          }}
        />
        <div
          className={cn(
            "space-y-4 z-50",
            atLeast.md ? "relative": "absolute",
            !atLeast.md && "bottom-8",
            // !atLeast.md && `-left-[${(CIRCLE_DIAMETER + GUTTER_SIZE) / 2}px]`
            // atLeast.md && "relative": "absolute top-5/8 -translate-y-1/2",
          )}
          style={{
            left: -(CIRCLE_DIAMETER + GUTTER_SIZE) + 32,
            right: 32,
          }}
        >
          <Typography variant="eyebrow" className="text-blue-600">
            CHRIS PORTER
          </Typography>
          <Typography
            variant={atLeast.md ? "h1" : "h3"}
            className="font-bold text-black"
          >
            SOFTWARE ENGINEER & URBANIST
          </Typography>
          <Typography variant="caption">
            I'm on a mission to make cities more human-centric
          </Typography>
          <div className="flex space-x-12 justify-between md:justify-start">
            <Button
              variant="defaultPrimary"
              className="rounded-full bg-[#060610]"
              size="lg"
            >
              Contact me
            </Button>
            <Button
              variant="ghost"
              className="rounded-full"
              size="lg"
              onClick={() => navigate("/about")}
            >
              About me <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <div
          className="absolute bottom-12 h-12 flex justify-between items-center gap-4"
          style={{
            width: `calc(100% - (${CIRCLE_DIAMETER + GUTTER_SIZE}px))`,
            left: 0,
          }}
        ></div>

        {/* Colorful blurred dots background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute ease-in-out duration-1000"
            style={{
              right: "16%",
              bottom: -20,
              width: "100%",
              height: "65%",
              opacity: 0.52,
              zIndex: 1,
            }}
          ></div>
        </div>
        {/* COLORFUL gradient with a little bit of noise over it */}
        <img
          src={NoiseBackground}
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          style={{
            mixBlendMode: "soft-light",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export { IntroPanel };
