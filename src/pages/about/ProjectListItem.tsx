import { Typography } from "@/components/ui/typography";
import { GRID_SPACING } from "./config";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProjectListItem({
  id,
  title,
  description,
  image,
  href,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      id={`about-navigation-menu-item-${id}`}
      className="relative border-t border-black/10 cursor-pointer ease-in-out px-4"
      aria-label={title}
      data-href={href}
      data-image={image}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        minWidth: GRID_SPACING * 6,
      }}
    >
      <div className="bg-[#e9f0f1] h-full py-4 px-1">
        <Typography
          variant="h6"
          className="z-50 font-xl w-full h-full ease-in-out duration-200"
          style={{
            fontWeight: hovered ? "500" : "300",
          }}
        >
          <span
            className="inline-block text-black"
          >
            {description}
          </span>
          <span className="text-gray-400 ease-in-out duration-200 font-light" style={{ opacity: hovered ? 1 : 0 }}>
            {" "}//{" "}{title}
          </span>
        </Typography>
      </div>
      <ArrowRight
        id={`about-navigation-menu-item-arrow-${id}`}
        className="absolute right-6 top-1/2 -translate-y-1/2 size-4 ease-in-out duration-300"
        style={{
          transform: hovered ? "translateX(10px)" : "translateX(0px)",
          color: hovered ? "black" : "black/20",
        }}
      />
    </div>
  );
}

export { ProjectListItem };
