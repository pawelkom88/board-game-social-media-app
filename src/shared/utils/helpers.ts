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

export function removeThemeClasses(themes: Theme, rootElement: HTMLElement): void {
  if (!rootElement) return;
  Object.values(themes).forEach((theme) => rootElement.classList.remove(theme));
}

export function setRootThemeFromSystemPreference(
  theme: Theme,
  rootElement: HTMLElement
): void {
  if (!rootElement) return;

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme === themeConfig.system) {
    const systemTheme = isDarkMode ? themeConfig.dark : themeConfig.light;
    rootElement.classList.add(systemTheme);
    return;
  }
}

export function splitNavLinks<T extends NavLink[]>(
  navLinks: T,
  direction: "left" | "right" = "left"
): NavLink[] {
  if (!navLinks.length) return [];
  
  const slicer = Math.ceil(navLinks.length / 2);
  if (direction === "left") {
    return navLinks.slice(0, slicer);
  } else {
    return navLinks.slice(slicer);
  }
}
