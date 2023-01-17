import { intToRoman } from "./0012.integer-to-roman";

describe("Problem 12 - Integer to Roman", function () {
  test("Example 1", function () {
    const num = 3;

    const output = intToRoman(num);

    expect(output).toEqual("III");
  });

  test("Example 2", function () {
    const num = 58;

    const output = intToRoman(num);

    expect(output).toEqual("LVIII");
  });

  test("Example 3", function () {
    const num = 1994;

    const output = intToRoman(num);

    expect(output).toEqual("MCMXCIV");
  });
});
