let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  // Act
  const result = convertToOldRoman(input);
  // Assert
  expect(result).toBe("I");
});

test("returns IIII if passed 4", function () {
  expect(convertToOldRoman(4)).toBe("IIII");
});

test("returns VIIII if passed 9", function () {
  expect(convertToOldRoman(9)).toBe("VIIII");
});

test("returns XVIII if passed 18", function () {
  expect(convertToOldRoman(18)).toBe("XVIII");
});
