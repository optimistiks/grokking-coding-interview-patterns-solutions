export function findMaxSlidingWindow(nums, w) {
  // the resulting array containing maximum values of each sliding window
  const result = [];

  if (w > nums.length) {
    // if window size is greater than nums length,
    // we consider length as window size (single window)
    w = nums.length;
  }

  // our sliding window that contains indexes of the values in nums
  // we store indexes in descending order of their values
  let deque = [];

  for (let i = 0; i < nums.length; ++i) {
    if (deque[0] <= i - w) {
      // drop the leftmost index stored in the sliding window
      // if it's outside of the sliding window index range
      deque.shift();
    }

    const current = nums[i];

    // starting from the rightmost index stored in the sliding window,
    // drop an index if the value at that index are less than current value
    for (let j = deque.length - 1; j >= 0; --j) {
      if (nums[deque[j]] < current) {
        deque.pop();
        ++j;
      }
    }

    // push current index into sliding window
    deque.push(i);

    // since we dropped all indexes less than current index from the sliding window first,
    // and only then pushed the current index
    // we ensured that our sliding window contains indexes in descending order of their values
    // and that first index stored in the sliding window is the index of the largest value in the window

    if (i < w - 1) {
      // do nothing until we cover the initial sliding window range
      continue;
    }

    result.push(nums[deque[0]]);
  }

  return result;
}
