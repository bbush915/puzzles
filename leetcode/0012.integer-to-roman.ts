/**
 * Converts an integer to roman numeral.
 */
export function intToRoman(num: number): string {
  let result = "M".repeat(Math.floor(num / 1000));

  const thousands = Math.floor(num / 100) % 10;

  if (thousands === 4) {
    result += "CD";
  } else if (thousands === 9) {
    result += "CM";
  } else {
    result += "D".repeat(thousands >= 5 ? 1 : 0) + "C".repeat(thousands % 5);
  }

  const hundreds = Math.floor(num / 10) % 10;

  if (hundreds === 4) {
    result += "XL";
  } else if (hundreds === 9) {
    result += "XC";
  } else {
    result += "L".repeat(hundreds >= 5 ? 1 : 0) + "X".repeat(hundreds % 5);
  }

  const ones = num % 10;

  if (ones === 4) {
    result += "IV";
  } else if (ones === 9) {
    result += "IX";
  } else {
    result += "V".repeat(ones >= 5 ? 1 : 0) + "I".repeat(ones % 5);
  }

  return result;
}
