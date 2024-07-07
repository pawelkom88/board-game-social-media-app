import { useTheme } from "@/components/theme-provider";
import { getContrastColor } from "@/utils/helpers";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <div className="mx-auto">
      <svg
        width={75}
        height={75}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="90" fill={getContrastColor(theme)} />

        <rect
          x="50"
          y="50"
          width="100"
          height="100"
          rx="15"
          ry="15"
          fill="hsl(var(--popover))"
        />

        <circle cx="75" cy="75" r="8" fill={getContrastColor(theme)} />
        <circle cx="125" cy="75" r="8" fill={getContrastColor(theme)} />
        <circle cx="75" cy="125" r="8" fill={getContrastColor(theme)} />
        <circle cx="125" cy="125" r="8" fill={getContrastColor(theme)} />
        <circle cx="100" cy="100" r="8" fill={getContrastColor(theme)} />
      </svg>
      <p className="font-semibold">PawnParlor</p>
    </div>
  );
}
