#### Statement

Given an integer `array` and a window of size `w`, find the current maximum value in the window as it slides through the entire array.

Note: If the window size is greater than the array size, we consider the entire array as a single window.

#### Constraints

1 <= `array.length` <= 10^3  
-10^4 <= `array[i]` <= 10^4  
1 <= `w`

#### Complexity

At first it might seem that we iterate the whole window at every element, making it O(n \* w) but it's not the case. Since we remove elements from the sliding window, usually the sliding window contains only one element. In other cases we don't do any operations with the sliding window at all.

When the values in the array are strictly increasing, initially the sliding window will contain `w` elements, but
after that, the sliding window will contain only one element.

When the values in the array are strictly decreasing, we only perform a single operation per sliding window (dropping the leftmost element that fell outside the window).

When the values in the array are constant, the behaviour is the same as strictly decreasing.

When the values are mixed, that is, when the values increase after staying constant,
or after a sequence of decreasing values, we incur a cost of O(w) for cleaning up the sliding window.
Since it can happen only after `w` elements, it can only happen n/w times. In this case the complexity will be O(n - n/w + (n/w)\*w), and that is O(n).

So the overall complexity of the solution is O(w + n).

#### Space complexity

O(w) where w is the size of the sliding window.
