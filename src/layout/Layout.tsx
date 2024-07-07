import { themeConfig, ThemeProvider } from "@/components/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme={themeConfig.system} storageKey="ui-theme">
      {children}
    </ThemeProvider>
  );
}
