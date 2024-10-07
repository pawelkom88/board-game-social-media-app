import { Theme, themeConfig } from "@/shared/components/theme-provider";
import { describe, expect } from "vitest";
import { getContrastColor, themeColors } from "../helpers";

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
    it("should return the right color based on the theme", () => {
      // @ts-expect-error testing
      const result = setRootThemeFromSystemPreference("mambo jambo");
      expect(result).toBe("");
    });
  });

  describe("removeThemeClasses", () => {
    it("should return the right color based on the theme", () => {
      // @ts-expect-error testing
      const result = removeThemeClasses("mambo jambo");
      expect(result).toBe("");
    });
  });

  describe("splitNavLinks", () => {
    it("should return the right color based on the theme", () => {
      // @ts-expect-error testing
      const result = splitNavLinks("mambo jambo");
      expect(result).toBe("");
    });
  });
});
