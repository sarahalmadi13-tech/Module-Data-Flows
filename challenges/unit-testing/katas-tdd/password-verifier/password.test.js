// password.test.js

const verify = require("./password");

describe("Password Verifier", () => {
  // Step 1
  test("rejects passwords shorter than 8 characters", () => {
    expect(verify("Abc12")).toBe("Password rejected");
  });

  test("accepts passwords with 8+ characters", () => {
    expect(verify("Abcdef12")).toBe("Password accepted");
  });

  // Step 2
  test("rejects null password", () => {
    expect(verify(null)).toBe("Password rejected");
  });

  // Step 3
  test("rejects passwords without uppercase letters", () => {
    expect(verify("abcdef12")).toBe("Password rejected");
  });

  // Step 4
  test("rejects passwords without numbers", () => {
    expect(verify("Abcdefgh")).toBe("Password rejected");
  });

  test("accepts valid password", () => {
    expect(verify("Abcdef12")).toBe("Password accepted");
  });
});
