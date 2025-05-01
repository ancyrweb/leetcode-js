type Solution = (nums: number[], k: number) => number;

export const bruteForce: Solution = (nums, k): number => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

export const prefixSum: Solution = (nums, k) => {
  const sumFrequencies = { [0]: 1 };
  let sum = 0;
  let subArraysCount = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const idx = sum - k;
    if (sumFrequencies[idx]) {
      subArraysCount += sumFrequencies[idx];
    }

    if (!sumFrequencies[sum]) {
      sumFrequencies[sum] = 1;
    } else {
      sumFrequencies[sum]++;
    }
  }

  return subArraysCount;
};
