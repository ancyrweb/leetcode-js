import { bubbleSort, selectionSort, insertionSort, mergeSort } from "./912";

test.each([
  [bubbleSort, "bubble"],
  [selectionSort, "selection"],
  [insertionSort, "insertion"],
  [mergeSort, "merge"],
])("$1", (fn) => {
  expect(fn([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  expect(fn([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  expect(fn([1, 5, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  expect(fn([1, 5, 1, 2, 0])).toEqual([0, 1, 1, 2, 5]);
});
