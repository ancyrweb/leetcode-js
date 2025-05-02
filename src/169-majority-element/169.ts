type Solution = (nums: number[]) => number;

export const cacheSolution: Solution = (nums) => {
  const cache = {};
  let idxMax = -1;

  for (const num of nums) {
    if (!cache[num]) cache[num] = 0;

    cache[num]++;

    if (idxMax === -1 || cache[num] > cache[idxMax]) {
      idxMax = num;
    }
  }

  return idxMax;
};

export const otherSolution: Solution = (nums) => {
  let candidate = Infinity;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate as number;
};
