import { lengthOfLongestSubstring } from "./0003.longest-substring-without-repeating-characters";

describe("Problem 3 - Longest Substring Without Repeating Characters", function () {
  test("Example 1", function () {
    const s = "abcabcbb";

    const output = lengthOfLongestSubstring(s);

    expect(output).toEqual(3);
  });

  test("Example 2", function () {
    const s = "bbbbb";

    const output = lengthOfLongestSubstring(s);

    expect(output).toEqual(1);
  });

  test("Example 3", function () {
    const s = "pwwkew";

    const output = lengthOfLongestSubstring(s);

    expect(output).toEqual(3);
  });

  test("Empty string", function () {
    const s = "";

    const output = lengthOfLongestSubstring(s);

    expect(output).toEqual(0);
  });

  test("Small string", function () {
    const s = " ";

    const output = lengthOfLongestSubstring(s);

    expect(output).toEqual(1);
  });
});
