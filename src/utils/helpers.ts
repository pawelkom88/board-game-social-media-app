import { Theme, themeConfig } from "@/components/theme-provider";

export function getContrastColor(themeColor: Theme): string {
  switch (themeColor) {
    case themeConfig.light:
      return `hsl(var(--custom))`;
    case themeConfig.dark:
      return `hsl(var(--foreground))`;
    case themeConfig.system:
      return `hsl(var(--custom))`;
    case themeConfig.calm:
      return `hsl(var(--accent))`;
    case themeConfig.pastel:
      return `hsl(var(--accent))`;
    default:
      return `hsl(var(--accent))`;
  }
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
