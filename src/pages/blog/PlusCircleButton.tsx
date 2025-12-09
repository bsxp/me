import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

function PlusCircleButton({
  handleClick,
  expanded,
}: {
  handleClick: () => void;
  expanded: boolean;
}) {
  return (
    <div
      id="plus-circle-button"
      className="cursor-pointer rounded-full bg-transparent hover:bg-white/10 p-2 group absolute top-1/2 -translate-y-1/2 right-0 z-50"
      onClick={handleClick}
    >
      <div className="relative size-8">
        <Minus
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Positioning
            "size-8 text-white rotate-90", // Styling
            "duration-300 ease-in-out", // Animation
            expanded
              ? "transform-[rotate(90deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]" // Rotation
              : "transform-[rotate(180deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]"
          )}
        />
        <Minus
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Positioning
            "size-8 text-white", // Styling
            "duration-300 ease-in-out", // Animation
            expanded
              ? "transform-[rotate(0deg)_scale(1)] group-hover:transform-[rotate(0deg)_scale(1.2)]" // Rotation
              : "transform-[rotate(180deg)_scale(1)] group-hover:transform-[rotate(90deg)_scale(1.2)]"
          )}
        />
      </div>
    </div>
  );
}

export { PlusCircleButton }