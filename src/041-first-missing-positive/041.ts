export type Solution = (nums: number[]) => number;

export const sortSoution: Solution = (nums) => {
  nums.sort((a, b) => a - b)

  let next = 1;
  for (const num of nums) {
    if (num <= 0) continue;
    if (next === num) next++;
  }

  return next;
}

export const hashMapSolution: Solution = (nums) => {
  const numbers = {}
  let max = 0;

  nums.forEach(n => {
    numbers[n] = true;
    max = Math.max(max, n);
  });

  for (let i = 1; i < max; i++) {
    if (!numbers[i]) {
      return i;
    }
  }

  return max + 1;
}

export const negativeMarkingSolution: Solution = (nums) => {
  const n = nums.length;

  // Clear negative numbers
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    // get the absolute value
    // if the value is negative, it means that index is found
    // we substract 1 because 0 does not count as a smallest positive
    // so the solution is, at minimum, 1
    // and so the index 0 of the array maps to the value 1
    const val = Math.abs(nums[i]) - 1;

    // val is below 0, already handled
    if (val < 0) continue;
    // val is outside the array, can't be the smallest missing number
    if (val > n) continue;


    // the number is positive, we mark it as "found"
    if (nums[val] > 0) {
      nums[val] *= -1;
      continue;
    }

    // the value found at this index is 0, and we can't negate 0
    // we also can't put any random value because if we put -1 for example,
    // the loop may extract its abs value (1) and consider that 1 is found
    // we should instead put an unreachable value, like the size of the array + 1
    // and turn it negative to mark the index as found
    if (nums[val] === 0) {
      nums[val] = (n + 1);
      nums[val] *= -1;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }

  return n + 1;
}
