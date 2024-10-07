import { describe, expect } from "vitest";
import { getContrastColor } from "../helpers";

describe("helpers function", () => {
  describe("getContrastColor", () => {
    it("should return the right color based on the theme", () => {
      // @ts-expect-error testing
      const result = getContrastColor("mambo jambo");
      expect(result).toBe("");
    });
  });
});
