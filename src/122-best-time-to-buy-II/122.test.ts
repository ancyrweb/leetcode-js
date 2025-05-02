import { linearSolution } from "./122";

test.each([[linearSolution, "mySolution"]])("$1", (fn) => {
  expect(fn([7, 1, 5, 3, 6, 4])).toBe(7);
  expect(fn([1, 2, 3, 4, 5])).toBe(4);
  expect(fn([7, 6, 4, 3, 1])).toBe(0);
});
