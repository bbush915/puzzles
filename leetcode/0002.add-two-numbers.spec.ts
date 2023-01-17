import { addTwoNumbers, fromArray, toArray } from "./0002.add-two-numbers";

describe("Problem 2 - Add Two Numbers", function () {
  test("Example 1", function () {
    const l1 = fromArray([2, 4, 3]);
    const l2 = fromArray([5, 6, 4]);

    const output = addTwoNumbers(l1, l2);

    expect(toArray(output)).toEqual([7, 0, 8]);
  });

  test("Example 2", function () {
    const l1 = fromArray([0]);
    const l2 = fromArray([0]);

    const output = addTwoNumbers(l1, l2);

    expect(toArray(output)).toEqual([0]);
  });

  test("Example 3", function () {
    const l1 = fromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = fromArray([9, 9, 9, 9]);

    const output = addTwoNumbers(l1, l2);

    expect(toArray(output)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
