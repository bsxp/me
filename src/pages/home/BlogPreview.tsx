import { Typography } from "@/components/ui/typography";

function BlogPreview() {
  return (
    <div className="bg-red-500 h-full w-full">
      <Typography variant="h1">Blog</Typography>
      <Typography variant="caption">
        A collection of my thoughts and ideas
      </Typography>
    </div>
  );
}

export { BlogPreview };