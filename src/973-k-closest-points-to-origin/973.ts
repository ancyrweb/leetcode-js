import { MinPriorityQueue } from "@datastructures-js/priority-queue";

type Solution = (points: number[][], k: number) => number[][];

export const sortSolution: Solution = (points, k) => {
  return points
    .sort(([xa, ya], [xb, yb]) => xa * xa + ya * ya - (xb * xb + yb * yb))
    .slice(0, k);
};

export const minHeapSolution: Solution = (points: number[][], k: number) => {
  const minHeap = new MinPriorityQueue<[number, number, number]>((p) => p[0]);
  for (const [x, y] of points) {
    minHeap.push([x * x + y * y, x, y]);
  }

  const out: [number, number][] = [];
  for (let i = 0; i < k; i++) {
    const next = minHeap.dequeue()!;
    out.push([next[1], next[2]]);
  }

  return out;
};
