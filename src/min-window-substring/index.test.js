import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { minWindowSubstring } from "./index.js";

describe("minWindowSubstring", () => {
  it('"ABCD" , "ABC"', () => {
    assert.equal(minWindowSubstring("ABCD", "ABC"), "ABC");
  });
  it('"XYZYX" , "XYZ"', () => {
    assert.equal(minWindowSubstring("XYZYX", "XYZ"), "XYZ");
  });
  it('"ABXYZJKLSNFC", "ABC"', () => {
    assert.equal(minWindowSubstring("ABXYZJKLSNFC", "ABC"), "ABXYZJKLSNFC");
  });
  it('"AAAAAAAAAAA" , "A"', () => {
    assert.equal(minWindowSubstring("AAAAAAAAAAA", "A"), "A");
  });
  it('"ABDFGDCKAB" , "ABCD"', () => {
    assert.equal(minWindowSubstring("ABDFGDCKAB", "ABCD"), "DCKAB");
  });
  it('"TESTTEST" , ""', () => {
    assert.equal(minWindowSubstring("TESTTEST", ""), "");
  });
});
