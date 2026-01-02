import { Typography } from "@/components/ui/typography";
import { FaLinkedinIn } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="max-w-xl flex gap-x-4 items-center text-gray-500">
      <Typography variant="span" className="text-sm">
        © Chris Porter 2025
      </Typography>
      <FaLinkedinIn className="size-4" />
      <BsSubstack className="size-4" />
      <RiShareForwardFill className="size-4" />
    </div>
  );
}

export { Footer };
