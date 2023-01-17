/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Creates a numeric array from a singly-linked list.
 */
export function toArray(l: ListNode | null): number[] {
  const result: number[] = [];

  while (l) {
    result.push(l.val);
    l = l.next;
  }

  return result;
}

/**
 * Returns a singly-linked list from a numeric array.
 */
export function fromArray(nums: number[]): ListNode {
  const result = new ListNode();

  let current = result;

  for (const num of nums) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return result.next!;
}

/**
 * Adds two numbers in the form of singly-linked lists.
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  const result = new ListNode();

  let current = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    const val = sum % 10;

    carry = Math.floor(sum / 10);

    current.next = new ListNode(val);
    current = current.next;

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  return result.next;
}
