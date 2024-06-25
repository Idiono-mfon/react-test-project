import { divide, multiply, substract, sum } from "../utils/math-function.js";

describe("Maths functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, -1)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1.5, 0.5)).toBe(-1);
  });

  it("substract correctly 2 values", () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract(0, 0)).toBe(0);
    expect(substract(0, -1)).toBe(1);
    expect(substract(-1, -1)).toBe(0);
    expect(substract(-1.5, 0.5)).toBe(-2.0);
  });

  it("multiply correctly 2 values", () => {
    expect(multiply()).toBe(0);
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(0, -1)).toBe(0);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
  });

  it("divide correctly 2 values", () => {
    expect(divide(1, 1)).toBe(1);
    expect(() => divide(0, 0)).toThrowError("You cannot divide by 0");
    expect(divide(0, -1)).toBe(0);
    expect(divide(-1, -1)).toBe(1);
    // expect(divide(-1.5, 0.5)).toBe(-0.75);
  });
});
