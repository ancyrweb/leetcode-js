import { minHeapSolution, sortSolution } from "./973";

test.each([
  [minHeapSolution, "minheap"],
  [sortSolution, "sort"],
])("$1", (fn) => {
  expect(
    fn(
      [
        [1, 3],
        [-2, 2],
      ],
      1,
    ),
  ).toEqual([[-2, 2]]);
  expect(
    fn(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2,
    ),
  ).toEqual([
    [3, 3],
    [-2, 4],
  ]);
});
