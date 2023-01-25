export function minWindowSubstring(s, t) {
  if (t === "") {
    return "";
  }

  // count of each unique character in string t
  const tCount = {};
  // count of each unique character in the current sliding window
  const sCount = {};
  // count of unique characters in t
  let tUnique = 0;

  // iterate string t, populating the counts of characters
  for (let i = 0; i < t.length; ++i) {
    if (tCount[t[i]] == null) {
      tUnique += 1;
    }
    tCount[t[i]] = (tCount[t[i]] ?? 0) + 1;
  }

  // we increment this variable every time a count of some character in the current sliding window
  // matched the count of the same character in t
  // for example, t=abbccc, we will increment this variable 3 times:
  // once we've seen a single a in the sliding window
  // once we've seen two b in the sliding window,
  // and once we've seen three c in the sliding window
  let countsMatched = 0;

  // this points to the leftmost element of our current sliding window
  let start = 0;

  // these are start end and length of the minimum window we've found so far
  let minStart = 0;
  let minEnd = 0;
  let minLength = null;

  // start iterating the string s
  // during the iteration, i always points to our last element in the current sliding window
  // the sliding window size is modified by changing the start variable, which points to the leftmost element of the window
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    // increment the count of each unique character in the current sliding window
    sCount[char] = (sCount[char] ?? 0) + 1;
    if (sCount[char] === tCount[char]) {
      // count of char in the current sliding window matched count of char in t, increment countsMatched
      countsMatched += 1;
    }
    if (countsMatched === tUnique) {
      // we've found all unique characters of t in the current sliding window, exactly the amount of time they appear in t
      // at this point start points to the leftmost element of our current sliding window,
      // but it might not be the leftmost element of the minimum window
      // so we start shrinking the window from the left
      // decrementing the count of characters in the current sliding window
      // until we encounter a character from t, at that point we decrement countsMatched
      // and that means we can no longer shrink the window, meaning we've found the minimum window
      while (countsMatched === tUnique) {
        const startChar = s[start];
        sCount[startChar] -= 1;
        if (sCount[startChar] < tCount[startChar]) {
          countsMatched -= 1;
        }
        start += 1;
      }
      // determine length of the current sliding window
      // i points to the last element of the window, so we add 1 to get the length
      // we incremented start, so we decrement it to get the index of the first element in the current sliding window
      const length = i + 1 - (start - 1);
      // check if the window we've just found is smaller than the current minimum window
      if (minLength == null || minLength > length) {
        minStart = start - 1;
        minEnd = i + 1;
        minLength = length;
      }
    }
  }

  // the result is the contents of the found minimum sliding window
  return s.slice(minStart, minEnd);
}
