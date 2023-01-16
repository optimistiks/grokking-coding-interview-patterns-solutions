### Statement

Given a string `s` that represents a DNA sequence, and a number `k`, 
return all the contiguous sequences (substrings) of length `k` 
that occur more than once in the string. 
The order of the returned subsequences does not matter. 
If no repeated subsequence is found, the function should return an empty array.

### Constraints

1 <= `s.length` <= 10<sup>5</sup>  
`s[i]` is one of the following: A, C, G, T

### Complexity

O(n) where `n` is the length of `s`. Hash calculation is O(1) and we do it only once per each character in the string.

### Space complexity 

The space complexity is O(n−k).

### Rolling hash technique

The gist: if we have a string that "rolls forward", meaning one character gets removed from the beginning, and one gets added to the end, instead of recomputing the hash of the whole string, we substract a hash of the removed character and add a hash of the new character.

H = c<sub>1</sub>a<sup>k-1</sup> + c<sub>2</sub>a<sup>k-2</sup> + ... + c<sub>i</sub>a<sup>k-i</sup> + ... + c<sub>k-1</sub>a<sup>1</sup> + c<sub>k</sub>a<sup>0</sup>  

where  

a is a constant  
c<sub>1</sub> ... c<sub>k</sub> are input characters  
k is the length of the substring  

#### Example  
Let's say we have 4 possible characters, A C G T. It means our constant is 4. Let's assign them numbers for calculations:  
A=1 C=2 G=3 T=4  

Now lets compute hash of ACG  
1 * 4<sup>2</sup> + 2 * 4<sup>1</sup> + 3 * 4<sup>0</sup>  

Now to get hash of CGT we need to subtract hash of A and add hash of T.  
However in ACG, C is second and G is third, while in CGT, C is first and G is second.  
We need to fix that by multiplying the subtraction by 4,  
so that H(C) becomes 2 * 4<sup>2</sup> and H(G) becomes 3 * 4<sup>1</sup>

H(CGT) = ((H(ACG) − H(A)) × 4) + H(T)  

(((1 * 4<sup>2</sup> + 2 * 4<sup>1</sup> + 3 * 4<sup>0</sup>) - (1 * 4<sup>2</sup>)) * 4) + 4 * 4<sup>0</sup>


