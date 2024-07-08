import { cn } from "@/lib/utils";
import { getContrastColor } from "@/utils/helpers";
import { themeConfig, useTheme } from "../theme-provider";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 75, showText = false, className }: LogoProps) {
  const { theme } = useTheme();
  return (
    <div className={`mx-auto ${className}`}>
      <svg
        width={size}
        height={size}
        className="mx-auto"
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
          fill={cn(theme === themeConfig.dark ? "black" : "white")}
        />
        <circle cx="75" cy="75" r="8" fill={getContrastColor(theme)} />
        <circle cx="125" cy="75" r="8" fill={getContrastColor(theme)} />
        <circle cx="75" cy="125" r="8" fill={getContrastColor(theme)} />
        <circle cx="125" cy="125" r="8" fill={getContrastColor(theme)} />
        <circle cx="100" cy="100" r="8" fill={getContrastColor(theme)} />
      </svg>
      {showText && <p className="font-bold">PawnParlor</p>}
    </div>
  );
}
