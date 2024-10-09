import { Theme, themeConfig } from "@/shared/components/theme-provider";
import { describe, expect, Mock, vi } from "vitest";
import {
  getContrastColor,
  removeThemeClasses,
  setRootThemeFromSystemPreference,
  splitNavLinks,
  themeColors,
} from "../helpers";

describe("helpers function", () => {
  describe("getContrastColor", () => {
    it("should return the right color based on the theme", () => {
      // @ts-expect-error testing
      const result = getContrastColor("mambo jambo");
      expect(result).toBe("");
    });

    it.each(Object.entries(themeConfig))(
      "should return correct color for %s theme",
      (themeName, themeValue: Theme) => {
        const result = getContrastColor(themeValue);

        switch (themeValue) {
          case themeConfig.light:
            expect(result).toBe(themeColors.foreground);
            break;
          case themeConfig.dark:
          case themeConfig.system:
            expect(result).toBe(themeColors.custom);
            break;
          case themeConfig.calm:
          case themeConfig.pastel:
            expect(result).toBe(themeColors.accent);
            break;
          default:
            throw new Error(`Unexpected theme: ${themeName}`);
        }
      }
    );
  });
  describe("setRootThemeFromSystemPreference", () => {
    beforeEach(() => {
      // Mock the window.matchMedia function to return a mock media query list
      window.matchMedia = vi.fn().mockReturnValue({
        matches: false,
      });
    });
    it("returns early when the root element is null or undefined", () => {
      // @ts-expect-error testing
      setRootThemeFromSystemPreference(themeConfig.system, null);
      expect(window.matchMedia).not.toHaveBeenCalled();
    });
    it("sets the dark theme when the system preference is dark and the theme is set to system", () => {
      (window.matchMedia as Mock).mockReturnValue({ matches: true });
      const rootElement = document.createElement("div");
      setRootThemeFromSystemPreference(themeConfig.system, rootElement);
      expect(rootElement.classList.contains(themeConfig.dark)).toBeTruthy();
    });
    it("sets the light theme when the system preference is light and the theme is set to system", () => {
      (window.matchMedia as Mock).mockReturnValue({ matches: false });
      const rootElement = document.createElement("div");
      setRootThemeFromSystemPreference(themeConfig.system, rootElement);
      expect(rootElement.classList.contains(themeConfig.light)).toBeTruthy();
    });
    it("does not set any theme when the theme is not set to system", () => {
      const rootElement = document.createElement("div");
      setRootThemeFromSystemPreference(themeConfig.light, rootElement);
      expect(rootElement.classList.contains(themeConfig.light)).toBeFalsy();
      expect(rootElement.classList.contains(themeConfig.dark)).toBeFalsy();
    });
  });

  describe("removeThemeClasses", () => {
    it("returns early when the root element is null", () => {
      const rootElement = document.createElement("div");

      removeThemeClasses(themeConfig.light, rootElement);
      expect(rootElement.classList.contains(themeConfig.light)).toBeFalsy();
    });

    it("removes the theme classes from the root element", () => {
      const themes = Object.values(themeConfig) as Theme[];
      const rootElement = document.createElement("div");

      removeThemeClasses(themeConfig.light, rootElement);

      Object.values(themes).forEach((theme) => {
        expect(rootElement.classList.contains(theme)).toBeFalsy();
      });
    });
  });

  describe.only("splitNavLinks", () => {
    it("return an empty array when passed an empty array", () => {
      const result = splitNavLinks([]);
      expect(result).toEqual([]);
    });

    it("returns 2 first links when direction is left", () => {
      const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ];

      const [home, about] = navLinks;

      // @ts-expect-error testing
      const result = splitNavLinks(navLinks);
      expect(result).toHaveLength(2);
      expect(result).toEqual([home, about]);
    });

    it("returns 2 last links when direction is right", () => {
      const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Profile", path: "/profile" },
      ];

      const [, , contact, profile] = navLinks;

      // @ts-expect-error testing
      const result = splitNavLinks(navLinks, "right");
      expect(result).toHaveLength(2);
      expect(result).toEqual([contact, profile]);
    });
  });
});
