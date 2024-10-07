import { NavLink } from "@/router/navLinks";
import { Theme, themeConfig } from "@/shared/components/theme-provider";

export function getContrastColor(themeColor: Theme): string {
  const isAppTheme = themeColor in themeConfig;
  if (!isAppTheme) return "";

  const accentClr = `hsl(var(--accent))`;

  const themeColors = {
    [themeConfig.light]: `hsl(var(--foreground))`,
    [themeConfig.dark]: `hsl(var(--custom))`,
    [themeConfig.system]: `hsl(var(--custom))`,
    [themeConfig.calm]: accentClr,
    [themeConfig.pastel]: accentClr,
  };

  return themeColors[themeColor];
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
