import { Union } from "@/utils/ts-helpers";
import { createContext, useContext, useEffect, useState } from "react";

export const themeConfig = {
  light: "light",
  dark: "dark",
  system: "system",
  calm: "calm",
  pastel: "pastel",
} as const;

type Theme = Union<typeof themeConfig>;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = themeConfig.system,
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    removeThemeClasses(themeConfig, root);
    setSystemTheme(theme, root);

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

// function getTheme(theme: Theme) {
//   return themeConfig[theme];
// }
function removeThemeClasses(themes: typeof themeConfig, root: HTMLElement): void {
  Object.values(themes).forEach((t) => root.classList.remove(t));
}

// TODO: rename so it is more clear
function setSystemTheme(theme: Theme, root: HTMLElement): void {
  if (theme === themeConfig.system) {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themeConfig.dark
      : themeConfig.light;

    root.classList.add(systemTheme);
    return;
  }
}