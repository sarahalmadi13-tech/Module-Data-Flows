const add = require("./calculator");

describe("String Calculator", () => {
  // Step 1
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number for a single value", () => {
    expect(add("5")).toBe(5);
  });

  test("returns the sum of two numbers", () => {
    expect(add("5,4")).toBe(9);
  });

  // Step 2
  test("handles an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // Step 3
  test("ignores numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });

  // Step 4
  test("throws an error for negative numbers", () => {
    expect(() => add("1,-3,4")).toThrow("negatives not allowed: -3");
  });

  test("shows all negative numbers in the error", () => {
    expect(() => add("1,-3,-5,4")).toThrow("negatives not allowed: -3,-5");
  });
});
