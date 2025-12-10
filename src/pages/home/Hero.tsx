import { Typography } from "@/components/ui/typography";

export function Hero() {
  return (
    <div className="bg-red-500 h-full w-full">
      <Typography variant="eyebrow">chris porter</Typography>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="caption">
        On a mission to make our cities more human-centric
      </Typography>
    </div>
  );
}
