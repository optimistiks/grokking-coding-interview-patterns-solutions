import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  findRepeatedSequences,
  hashChar,
  hashStr,
  recomputeHash,
} from "./index.js";

describe("findRepeatedSequences", () => {
  it('AAAAACCCCCAAAAACCCCCC", 8', () => {
    assert.deepEqual(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8), [
      "AAAAACCC",
      "AAAACCCC",
      "AAACCCCC",
    ]);
  });
  it('"GGGGGGGGGGGGGGGGGGGGGGGGG" , 12', () => {
    assert.deepEqual(findRepeatedSequences("GGGGGGGGGGGGGGGGGGGGGGGGG", 12), [
      "GGGGGGGGGGGG",
    ]);
  });
  it('"TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT" , 10', () => {
    assert.deepEqual(
      findRepeatedSequences("TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT", 10),
      [
        "TTTTTCCCCC",
        "TTTTCCCCCC",
        "TTTCCCCCCC",
        "TTCCCCCCCT",
        "TCCCCCCCTT",
        "CCCCCCCTTT",
        "CCCCCCTTTT",
        "CCCCCTTTTT",
        "CCCCTTTTTT",
      ]
    );
  });
  it('"AAAAAACCCCCCCAAAAAAAACCCCCCCTG" , 10', () => {
    assert.deepEqual(
      findRepeatedSequences("AAAAAACCCCCCCAAAAAAAACCCCCCCTG", 10),
      ["AAAAAACCCC", "AAAAACCCCC", "AAAACCCCCC", "AAACCCCCCC"]
    );
  });
  it('"ATATATATATATATAT" , 6', () => {
    assert.deepEqual(findRepeatedSequences("ATATATATATATATAT", 6), [
      "ATATAT",
      "TATATA",
    ]);
  });
  it('"ACTACTACT", 9', () => {
    assert.deepEqual(findRepeatedSequences("ACTACTACT", 10), []);
  });
});

describe("rollingHash", () => {
  it("should calculate initial hash", () => {
    assert.equal(hashStr("ACTG", 4), 115);
  });
  it("should calculate single character hash with given k and i", () => {
    assert.equal(hashChar("A", 4, 2), 16);
  });
  it("should correctly roll the hash", () => {
    let hash = hashStr("ACG", 3);
    assert.equal(hash, 27);
    // CGT
    hash = recomputeHash(hash, "T", "A", 3);
    assert.equal(hash, 48);
  });
});
