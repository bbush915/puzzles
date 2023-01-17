/**
 * Finds the length of the longest substring of the given string without
 * repeating characters.
 */
export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;

  const lookup = new Set();
  let i = 0;
  let j = 0;

  while (i < s.length && j < s.length) {
    if (lookup.has(s[j])) {
      lookup.delete(s[i]);
      i++;

      continue;
    }

    const length = j - i + 1;

    if (length > maxLength) {
      maxLength = length;
    }

    lookup.add(s[j]);
    j++;
  }

  return maxLength;
}
