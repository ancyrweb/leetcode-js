export type Solution = (nums: number[]) => number[];

export const defaultSolution: Solution = (nums) => {
  return [...nums, ...nums];
};

export const fastSolution: Solution = (nums) => {
  const l = nums.length;

  for (let i = 0; i < l; i++) {
    nums.push(nums[i]);
  }

  return nums;
};
