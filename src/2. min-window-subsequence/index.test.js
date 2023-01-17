import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { findMinWindowSubsequence } from "./index.js";

describe("findMinWindowSubsequence", () => {
  it('"abcdebdde", "bde"', () => {
    assert.equal(findMinWindowSubsequence("abcdebdde", "bde"), "bcde");
  });
  it('"fgrqsqsnodwmxzkzxwqegkndaa", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaa", "kzed"),
      "kzxwqegknd"
    );
  });
  it('"michmznaitnjdnjkdsnmichmznait", "michmznait"', () => {
    assert.equal(
      findMinWindowSubsequence("michmznaitnjdnjkdsnmichmznait", "michmznait"),
      "michmznait"
    );
  });
  it('"afgegrwgwga", "aa"', () => {
    assert.equal(findMinWindowSubsequence("afgegrwgwga", "aa"), "afgegrwgwga");
  });
  it('"abababa" , "ba"', () => {
    assert.equal(findMinWindowSubsequence("abababa", "ba"), "ba");
  });
  it('"fgrqsqsnodwmxzkzxwqegkndaakzed", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaakzed", "kzed"),
      "kzed"
    );
  });
  it('"fgrqsqsnodwmxzkzxwqegkndaakzred", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaakzred", "kzed"),
      "kzred"
    );
  });
  it('"fgrqsqsnodwmxzkzxwqegkndaakzredvckzrred", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence(
        "fgrqsqsnodwmxzkzxwqegkndaakzredvckzrred",
        "kzed"
      ),
      "kzred"
    );
  });
  it('"kzabcedkzabedkzaedkzed", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence("kzabcedkzabedkzaedkzed", "kzed"),
      "kzed"
    );
  });
  it('"kzabcedkzabedkzedkzedkzaedkzed", "kzed"', () => {
    assert.equal(
      findMinWindowSubsequence("kzabcedkzabedkzedkzedkzaedkzed", "kzed"),
      "kzed"
    );
  });
  it('"kzed", "kzed"', () => {
    assert.equal(findMinWindowSubsequence("kzed", "kzed"), "kzed");
  });
  it('"kzedkzedkzed", "kzed"', () => {
    assert.equal(findMinWindowSubsequence("kzedkzedkzed", "kzed"), "kzed");
  });
  it('"kzedkzedkzed", "doesntexist"', () => {
    assert.equal(findMinWindowSubsequence("kzedkzedkzed", "doesntexist"), "");
  });
});
