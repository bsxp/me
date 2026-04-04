interface TechChipProps {
  name: string;
  logo: string;
  href: string;
}

export function TechChip({ name, logo, href }: TechChipProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm no-underline transition-colors"
      style={{
        backgroundColor: "#f0f0f0",
        border: "1px solid #e0e0e0",
        verticalAlign: "baseline",
        textDecoration: "none",
      }}
    >
      <img
        src={logo}
        alt={name}
        className="shrink-0"
        style={{ width: 14, height: 14 }}
      />
      <span
        className="font-[Inter] font-semibold"
        style={{ fontSize: "inherit", color: "#1a1a1a", lineHeight: 1 }}
      >
        {name}
      </span>
    </a>
  );
}
