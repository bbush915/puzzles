/**
 * Determines whether a number is a palindrome.
 */
export function isPalindrome(x: number): boolean {
  const strategy: Strategy = stringConversion;
  return strategy(x);
}

type Strategy = (x: number) => boolean;

const stringConversion: Strategy = (x) => {
  if (x < 0) {
    return false;
  }

  const str = x.toString();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const noStringConversion: Strategy = (x) => {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }

  const digitCount = Math.floor(Math.log10(x)) + 1;

  const digits = [];

  for (let i = 0; i < digitCount; i++) {
    const digit = x % 10;

    if (i < digitCount / 2) {
      digits.push(digit);
    } else if (digits[digitCount - i - 1] !== digit) {
      return false;
    }

    x = Math.floor(x / 10);
  }

  return true;
};
