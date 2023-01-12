import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { findMaxSlidingWindow } from "./index.js";

describe("findMaxSlidingWindow", () => {
  it("[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3", () => {
    assert.deepEqual(
      findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3),
      [3, 4, 5, 6, 7, 8, 9, 10]
    );
  });
  it("[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 4", () => {
    assert.deepEqual(
      findMaxSlidingWindow([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 4),
      [3, 3, 3, 3, 3, 3, 3]
    );
  });
  it("[10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 2", () => {
    assert.deepEqual(
      findMaxSlidingWindow(
        [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
        2
      ),
      [10, 9, 9, 23, 23, 34, 56, 67, 67, -1, -4, -2, 9, 10, 34, 67]
    );
  });
  it("[4, 5, 6, 1, 2, 3], 1", () => {
    assert.deepEqual(
      findMaxSlidingWindow([4, 5, 6, 1, 2, 3], 1),
      [4, 5, 6, 1, 2, 3]
    );
  });
  it("[9, 5, 3, 1, 6, 3], 2", () => {
    assert.deepEqual(
      findMaxSlidingWindow([9, 5, 3, 1, 6, 3], 2),
      [9, 5, 3, 6, 6]
    );
  });
  it("[1, 2], 2", () => {
    assert.deepEqual(findMaxSlidingWindow([1, 2], 2), [2]);
  });
  it("[-4, 2, -5, 3, 6], 3", () => {
    assert.deepEqual(
      findMaxSlidingWindow([-4, 2, -5, 1, -1, 6], 3),
      [2, 2, 1, 6]
    );
  });
});
