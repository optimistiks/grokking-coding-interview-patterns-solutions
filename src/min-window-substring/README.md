### Statement  
Given two strings— `s` and `t`, find the smallest window substring of `t`. 
The smallest window substring is the shortest sequence of characters in `s` that includes all of the characters present in `t`.
The frequency of each character in this sequence should be greater than or equal to the frequency of each character in `t`. 
The order of the characters doesn’t matter here.

### Constraints:

- Strings `s` and `t` consist of uppercase and lowercase characters.  
- `t.length ≤ s.length`  
- 1 ≤ `s.length`  
- `t.length` ≤ 10<sup>3</sup>

### Time complexity

`O(n + m)` where `n` is the length of `s` and `m` is the length of `t`.

### Space complexity

`O(n + m)` because of two additional hash maps.
