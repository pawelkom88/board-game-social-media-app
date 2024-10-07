import { NavLink } from "@/router/navLinks";
import { Theme, themeConfig } from "@/shared/components/theme-provider";

export const themeColors = {
  accent: `hsl(var(--accent))`,
  foreground: `hsl(var(--foreground))`,
  custom: `hsl(var(--custom))`,
} as const;

export function getContrastColor(themeColor: Theme): string {
  const isAppTheme = themeColor in themeConfig;
  if (!isAppTheme) return "";

  const accentClr = themeColors.accent;

  const themeColorsConfig = {
    [themeConfig.light]: themeColors.foreground,
    [themeConfig.dark]: themeColors.custom,
    [themeConfig.system]: themeColors.custom,
    [themeConfig.calm]: accentClr,
    [themeConfig.pastel]: accentClr,
  };

  return themeColorsConfig[themeColor];
}

export function removeThemeClasses(themes: typeof themeConfig, root: HTMLElement): void {
  Object.values(themes).forEach((theme) => root.classList.remove(theme));
}

export function setRootThemeFromSystemPreference(theme: Theme, root: HTMLElement): void {
  if (theme === themeConfig.system) {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themeConfig.dark
      : themeConfig.light;

    root.classList.add(systemTheme);
    return;
  }
}

export function splitNavLinks<T extends NavLink[]>(
  navLinks: T,
  direction: "left" | "right" = "left"
) {
  const slicer = Math.ceil(navLinks.length / 2);
  if (direction === "left") {
    return navLinks.slice(0, slicer);
  } else {
    return navLinks.slice(slicer);
  }
}
