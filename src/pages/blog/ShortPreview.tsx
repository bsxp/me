import { Typography } from "@/components/ui/typography";
import dayjs from "dayjs";

function ShortBlogPostPreview({
  title,
  date,
  tags,
}: {
  title: string;
  date: string;
  tags: string[];
}) {
  return (
    <div className="border-l border-0 border-white w-full px-2 space-y-2">
      <div className="flex gap-2 items-center justify-between  w-full">
        <Typography variant="p" className="text-lg font-medium text-ellipsis">{title}</Typography>
        <Typography variant="p" className="text-gray-300 text-md font-light w-12 text-right">
          {dayjs(date).format("MMM D")}
        </Typography>
      </div>
        <div className="flex gap-1 items-center">
          {tags.slice(0, 3).map((tag: string) => (
            <div className="border-white border rounded-full px-2 py-0.5 text-xs">{tag}</div>
          ))}
          {tags.length > 3 && (
            <div className="border-wbite rounded-full px-2 py-0.5 text-xs border">
              +{tags.length - 3}
            </div>
          )}
        </div>
    </div>
  );
}

export { ShortBlogPostPreview };
