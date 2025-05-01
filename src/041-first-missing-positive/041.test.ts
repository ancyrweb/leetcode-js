import {hashMapSolution, negativeMarkingSolution, sortSoution} from "./041";

test.each([
  [sortSoution, "sort"],
  [hashMapSolution, "hashmap"],
  [negativeMarkingSolution, "negativeMarking"],
])('$1', (fn) => {
  expect(fn([1, 2, 0])).toBe(3);
  expect(fn([3, 4, -1, 1])).toBe(2);
  expect(fn([7, 8, 9, 11, 12])).toBe(1);
  expect(fn([1])).toBe(2);
  expect(fn([0, 2, 2, 1, 1])).toBe(3);
  expect(fn([])).toBe(1);
})