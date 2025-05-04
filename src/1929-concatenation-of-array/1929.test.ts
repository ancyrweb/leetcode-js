import { defaultSolution, fastSolution } from "./1929";

test.each([
  [defaultSolution, "default"],
  [fastSolution, "fast"],
])("$1", (fn) => {
  expect(fn([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  expect(fn([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
});
