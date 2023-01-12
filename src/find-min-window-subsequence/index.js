export function findMinWindowSubsequence(str1, str2) {
  // initialize two pointers
  // pointer 1 follows str1
  let indexStr1 = 0;
  // pointer2 follows str2
  let indexStr2 = 0;
  // this is our resulting minimum substring
  let minSubstr = "";
  // start iterating str1
  for (let i = 0; i < str1.length; ++i) {
    // if character at str1 pointer does not match character at str2 pointer
    // increment str1 pointer and continue
    if (str1[indexStr1] !== str2[indexStr2]) {
      indexStr1 += 1;
      continue;
    }
    // if our str2 pointer reached the end of string,
    // it means we found all it's characters in str1 in the same order
    // now we need to move our str1 pointer backward to find the start of the substring
    // and determine if it's actually the minimum substring
    if (indexStr2 === str2.length - 1) {
      // initial value of the start pointer is position of str1 pointer
      // remember that at this point str1 pointer points at the same character as the last character in str2
      let start = indexStr1;
      // initial value of the end pointer is start + 1
      // this is just our right boundary of the substring (that is not included)
      let end = start + 1;
      // now we start moving our start pointer backward (decrementing),
      // until EITHER it reaches index 0 (the end of str1)
      // OR str2 pointer reaches the end of str2,
      // because we also decrement str2 pointer,
      // but only if character pointed by start is the same as character pointed by str2 pointer
      for (let j = start; j > 0; --j) {
        if (str1[start] === str2[indexStr2]) {
          indexStr2 -= 1;
        }
        if (indexStr2 < 0) {
          break;
        }
        start -= 1;
      }
      // by doing those decrements, at this point,
      // end points at the right boundary (not included) of the str1 substring that includes all characters of str2
      // start points at the left boundary of the said substring (included)
      // so to calculate length, we just substract start from end
      const length = end - start;
      // get the substring and set it as a result if it's actually the minimum
      if (!minSubstr || length < minSubstr.length) {
        minSubstr = str1.slice(start, end);
      }
      // reset str2 pointer so we can continue searching str1
      indexStr2 = 0;
      // increment str1 pointer
      indexStr1 += 1;
    } else {
      // str2 pointer has not yet reached the end of str2
      // at this point, character in str1 pointed by str1 pointer
      // is the same as character pointed in str2 by str2 pointer
      // so increment both pointers
      indexStr1 += 1;
      indexStr2 += 1;
    }
  }
  return minSubstr;
}
