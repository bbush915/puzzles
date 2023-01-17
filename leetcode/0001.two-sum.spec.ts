import { twoSum } from "./0001.two-sum";

describe("Problem 1 - Two Sum", function () {
  test("Example 1", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const output = twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });

  test("Example 2", function () {
    const nums = [3, 2, 4];
    const target = 6;

    const output = twoSum(nums, target);

    expect(output).toEqual([1, 2]);
  });

  test("Example 3", function () {
    const nums = [3, 3];
    const target = 6;

    const output = twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
});
