type Solution = (prices: number[]) => number;

export const linearSolution: Solution = (prices) => {
  let sum = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    sum += Math.max(0, prices[i + 1] - prices[i]);
  }

  return sum;
};
