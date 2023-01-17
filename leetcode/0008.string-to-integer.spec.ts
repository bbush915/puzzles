import { myAtoi } from "./0008.string-to-integer";

describe("Problem 8 - String to Integer", function () {
  test("Example 1", function () {
    const s = "42";

    const output = myAtoi(s);

    expect(output).toEqual(42);
  });

  test("Example 2", function () {
    const s = "   -42";

    const output = myAtoi(s);

    expect(output).toEqual(-42);
  });

  test("Example 3", function () {
    const s = "4193 with words";

    const output = myAtoi(s);

    expect(output).toEqual(4193);
  });
});
