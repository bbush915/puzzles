/**
 * Converts a string to a 32-bit signed integer.
 */
export function myAtoi(s: string): number {
  const strategy: Strategy = regex;
  return strategy(s);
}

type Strategy = (s: string) => number;

enum States {
  LEADING_WHITESPACE,
  SIGN,
  DIGITS,
}

const stateMachine: Strategy = (s) => {
  let state = States.LEADING_WHITESPACE;

  let sign = 1;
  let value = 0;

  for (const c of s) {
    if (state === States.LEADING_WHITESPACE) {
      if (c === " ") {
        continue;
      }

      state = States.SIGN;
    }

    if (state === States.SIGN) {
      state = States.DIGITS;

      if (c === "-") {
        sign = -1;
        continue;
      } else if (c === "+") {
        continue;
      }
    }

    const charCode = c.charCodeAt(0);

    if (charCode < 48 || charCode > 57) {
      break;
    } else {
      value = value * 10 + (charCode - 48);
    }
  }

  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, sign * value));
};

const regex: Strategy = (s) => {
  const matches = s.match(/^\s*(\-|\+)?(\d*)/);

  if (!matches) {
    return 0;
  }

  const sign = matches[1] === "-" ? -1 : 1;
  const value = matches[2] ? Number(matches[2]) : 0;

  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, sign * value));
};
