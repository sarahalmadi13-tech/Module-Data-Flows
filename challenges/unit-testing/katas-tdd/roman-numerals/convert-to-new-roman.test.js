let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toBe("I");
});
test("returns IV if passed 4", function () {
  expect(convertToNewRoman(4)).toBe("IV");
});

test("returns IX if passed 9", function () {
  expect(convertToNewRoman(9)).toBe("IX");
});
test("returns XLIV if passed 44", function () {
  expect(convertToNewRoman(44)).toBe("XLIV");
});

test("returns CMXLIV if passed 944", function () {
  expect(convertToNewRoman(944)).toBe("CMXLIV");
});
