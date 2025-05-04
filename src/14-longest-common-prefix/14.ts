export type Solution = (strs: string[]) => string;

export const defaultSolution: Solution = (strs) => {
  let size = 0;
  let smallest = Infinity;

  for (const str of strs) {
    smallest = Math.min(str.length, smallest);
  }

  for (let i = 0; i < smallest; i++) {
    for (let is = 1; is < strs.length; is++) {
      if (strs[is][i] !== strs[0][i]) {
        return strs[0].slice(0, size);
      }
    }

    size++;
  }

  return strs[0].slice(0, size);
};
