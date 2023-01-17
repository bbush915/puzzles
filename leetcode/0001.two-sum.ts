/**
 * Finds the indices of the two numbers in the given array which add up to the
 * target value.
 */
export function twoSum(nums: number[], target: number): number[] {
  const strategy = lookup;

  return strategy(nums, target);
}

type Strategy = (nums: number[], target: number) => number[];

const naive: Strategy = (nums, target) => {
  // NOTE - O(n^2) time, O(1) space.

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
};

const lookup: Strategy = (nums, target) => {
  // NOTE - O(n) time, O(n) space.

  const result: number[] = [];

  const lookup = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (lookup.has(nums[i])) {
      result.push(lookup.get(nums[i]), i);
    }

    lookup.set(target - nums[i], i);
  }

  return result;
};
