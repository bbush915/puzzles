import { isPalindrome } from "./0009.palindrome-number";

describe("Problem 9 - Palindrome Number", function () {
  test("Example 1", function () {
    const x = 121;

    const output = isPalindrome(x);

    expect(output).toEqual(true);
  });

  test("Example 2", function () {
    const x = -121;

    const output = isPalindrome(x);

    expect(output).toEqual(false);
  });

  test("Example 3", function () {
    const x = 10;

    const output = isPalindrome(x);

    expect(output).toEqual(false);
  });
});
