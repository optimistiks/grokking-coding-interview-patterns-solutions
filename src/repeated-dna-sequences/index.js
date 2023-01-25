// how many distinct characters are used in the string (our constant for the hash function)
const a = 4;
// characters mapped to numbers to use in the hash function
const values = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
};

export function findRepeatedSequences(s, k) {
  const results = [];
  if (s.length < k) {
    // return empty array if the window size is greater than the string length
    return results;
  }
  // get hash of the initial sliding window
  let hash = hashStr(s.slice(0, k), k);
  const map = {};

  // start iteration from the kth element (first to be outside of the initial sliding window)
  for (let i = k; i < s.length; ++i) {
    // index of the first element in the current sliding window
    let left = i - k;
    // index of the new element to be included in the sliding window
    let right = i;
    // if we have a hash saved with the "false" value, it means it's been encountered before,
    // but hasn't been included into the output
    if (map[hash] === false) {
      // our current sliding window is [left, right).
      results.push(s.slice(left, right));
      // true means hash was seen twice and it was added to the output list
      map[hash] = true;
    }
    // add the hash to the map of seen hashes (if not yet added)
    if (map[hash] == null) {
      // false value means it's seen, but hasn't been added to the output list
      map[hash] = false;
    }
    // new character to be included into sliding window
    const char = s[right];
    // recompute our hash, s[left] is the first element of the current sliding window
    // we're going to subtract it from the hash since this element will be leaving the window
    // and we will add the s[right] hash since it's the new element to be in the window
    hash = recomputeHash(hash, char, s[left], k);
  }

  return results;
}

export function hashChar(char, k, i) {
  return values[char] * Math.pow(a, k - i);
}

export function hashStr(str, k) {
  let hash = 0;
  for (let i = 0; i < str.length; ++i) {
    hash += hashChar(str[i], k, i + 1);
  }
  return hash;
}

export function recomputeHash(hash, add, remove, k) {
  return (hash - hashChar(remove, k, 1)) * a + hashChar(add, k, k);
}
