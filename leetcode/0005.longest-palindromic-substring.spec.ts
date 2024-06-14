import { longestPalindrome } from "./0005.longest-palindromic-substring";

describe("Problem 5 - Longest Palindromic Substring", function () {
  test("Example 1", function () {
    const s = "babad";

    const output = longestPalindrome(s);

    expect(["bab", "aba"].includes(output)).toEqual(true);
  });

  test("Example 2", function () {
    const s = "cbbd";

    const output = longestPalindrome(s);

    expect(output).toEqual("bb");
  });
});
