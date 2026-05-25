let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  let expected = 88;
  // Act
  let output = getLargestNumber(input);
  // Assert
  expect(output).toBe(expected);
});

test("does not modify the original array", function () {
  // example
  // input: [3, 21, 88, 4, 36];
  // expected: 88;

  // also test that the original array hasn't changed
  let input = [3, 21, 88, 4, 36];
  let originalInput = [...input]; // Create a copy of the original array

  // Act
  getLargestNumber(input);
  // Assert
  expect(input).toEqual(originalInput);
});
