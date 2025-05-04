export type Solution = (nums: number[]) => number[];

export const bubbleSort: Solution = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }

  return nums;
};

export const selectionSort: Solution = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallestIndex] > nums[j]) {
        smallestIndex = j;
      }
    }

    // avoid unecessary swap
    if (smallestIndex !== i) {
      const temp = nums[i];
      nums[i] = nums[smallestIndex];
      nums[smallestIndex] = temp;
    }
  }

  return nums;
};

export const insertionSort: Solution = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = current;
  }

  return nums;
};

export const mergeSort: Solution = (nums) => {
  function doMerge(array: number[], start: number, end: number) {
    // Only one number
    if (end === start) {
      return [array[start]];
    }

    // Pivot in the middle
    const pivot = Math.round((end + start + 1) / 2);
    const left = doMerge(array, start, pivot - 1);
    const right = doMerge(array, pivot, end);

    // preparing to merge back
    const out: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // merge until one of the array is out
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        out.push(left[leftIndex]);
        leftIndex++;
      } else {
        out.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // only one array will contain remaining element
    if (rightIndex === right.length) {
      while (leftIndex < left.length) {
        out.push(left[leftIndex]);
        leftIndex++;
      }
    } else {
      while (rightIndex < right.length) {
        out.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return out;
  }

  return doMerge(nums, 0, nums.length - 1);
};
