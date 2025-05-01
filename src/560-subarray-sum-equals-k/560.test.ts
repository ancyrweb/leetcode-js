import { bruteForce, prefixSum } from "./560";

test.each([
  [bruteForce, "bruteforce"],
  [prefixSum, "prefixSum"],
])("$1", (fn) => {
  expect(fn([1, 1, 1], 2)).toEqual(2);
  expect(fn([1, 2, 3], 3)).toEqual(2);
  expect(fn([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3)).toEqual(8);
  expect(fn([1], 0)).toEqual(0);
  expect(fn([0, 1, 1, 1], 2)).toEqual(3);
});

test("debug", () => {
  expect(prefixSum([1], 0)).toEqual(0);
});
