import { cacheSolution, otherSolution } from "./169";

test.each([
  [cacheSolution, "mySolution"],
  [otherSolution, "otherSolution"],
])("$1", (fn) => {
  expect(fn([3, 2, 3])).toBe(3);
  expect(fn([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  expect(fn([1, 2, 2, 1, 1, 2, 2])).toBe(2);
  expect(fn([1, 1, 2, 2, 2, 1, 2])).toBe(2);
});
