/*

PROBLEM -->
  Check if any permutation of a large number is divisible by 8

DESCRIPTION -->
  Given a large number N and the task is to check if any permutation of a large number is divisible by 8.

EXAMPLE -->
  Input: N = 31462708
  Output: true
  There are many permutations of number N, such as:
  34678120, 34278160 which are divisible by 8.

  Input: 75
  Output: false

SOURCE -->
  https://www.geeksforgeeks.org/check-if-any-permutation-of-a-large-number-is-divisible-by-8/

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

SPECIFICATION -->
  Inputs:  N, an integer of any size
  Outputs:  boolean indicating whether any permutation of N is divisble by 8
  Constraints:  strive for at least linear time complexity
  Edge cases:  What if N is negative? NaN? Only 3 in length?
JUSTIFICATION --> This function will accept a number, and return a boolean which answers true or false to whether or not any permutation of the digits of N are divisible by 8.
EXPLANATION -->
  The mathematical explanation here is that if the last 3 numbers are divisible by 8, so the whole number.

  To take care of EDGE CASES first...
  If N.length is less that 3, we can just check that number and its reverse before moving on.
  If the dividend of a modulo/remainder operation is negative (our dividend will always be N or one of its permutations), that means the remainder will also be negative, meaning it will only ever leave a negative remainder. I would ask the interviewer whether that could count as a "divisible by 8", and if so, would check the negative edge case by returning true if modulo equals -0. Otherwise, if N is negative, simply return false.
  If N is NaN, return false.

  AFTER the edge cases...
  Store characters in an object. If there are mutliples, they each get their own property. Then, make all possible combinations of 3-digit  numbers from those options. Better to store in an array for index lookup? Use RPS logic, but instead of storing all permutations, just check them all. If at any point the number is divisible by 8, return true. If we complete the whole innner function or loop without returning, return false.

VISUALIZATION --> Excalidraw
APPROXIMATION -->

VERIFICATION -->
IMPLEMENTATION -->

*/

const onePermutationDivisibleBy8 = (n) => {
  // if n length < 3 {
    // if n is fully divisble by 8,
      // return true

    // if reverse of n is fully divisible by 8,
      // return true

  // }

  // split number and add all chars to array
  // open recursive inner function, passing in an index
    // digit counter is equal to itself or 0, keeping track of which index we are currently adding to

    // if all digit have been added, if its equal to 3,
      // if its divisible by 3,
}