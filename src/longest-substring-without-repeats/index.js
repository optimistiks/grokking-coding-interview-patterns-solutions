export function findLongestSubstring(inputString) {
  // in this map we store last seen indexes of each unique character in the inputString
  const map = {};

  // this is the maximum seen length of the substring so far
  let length = 0;
  // this is the leftmost element of the max len substring seen so far
  let start = 0;

  for (let i = 0; i < inputString.length; ++i) {
    const char = inputString[i];
    if (map[char] != null) {
      // we've encountered a character that we've already seen,
      // it is possible that we've encountered a repeated character
      if (map[char] < start) {
        // start is our leftmost element of the current substring (window)
        // if char is seen before at a position outside of this window, then we don't care,
        // since we only care about repeats in our current substring (window)
        // so same as seeing char for the first time, we just record it's index and continue
        map[char] = i;
      } else {
        // at this point we've definitely encountered char for the second time in the current window
        // so we need to evaluate if we found a max len substring or not
        // i points to the first char outside of the window,
        // and start points to the first char of the window
        const newLength = i - start;
        if (length < newLength) {
          length = newLength;
        }
        // move the left side of the window forward to nullify the repeat and continue our search
        start = map[char] + 1;
        map[char] = i;
      }
    } else {
      // if its the first time we see a character then just record its index and continue
      // we've definitely not encountered a repeat here
      map[char] = i;
    }
  }

  // if the last character of the string was not a repeat, then it was not handled by the loop
  // so check if the substring ending at the last character is actually a max len substring
  if (inputString.length - start > length) {
    length = inputString.length - start;
  }

  return length;
}
