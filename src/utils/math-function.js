export function sum(a = 0, b = 0) {
  return a + b;
}

export function substract(a = 0, b = 0) {
  return a - b;
}

export function multiply(a = 0, b = 0) {
  return parseFloat(Number(a * b).toFixed(2));
}

export function divide(a = 0, b = 0) {
  if (b !== 0) {
    return parseFloat(Number(a / b).toFixed(2));
  }

  throw new Error("You cannot divide by 0");
}
