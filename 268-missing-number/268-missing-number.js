/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const range = nums.length; //3
    let exists = true;
    let missingNumber;
    
    
    while (exists) {
        for (let i = 0; i < nums.length + 1; i++) {
                if (!nums.includes(i)) {
                    missingNumber = i;
                    exists = false;
                }
        }
    }
    
    return missingNumber;
};

/* 

SPECIFICATION →
  1. INPUTS: array of integers, the length of which indicates the range of numbers we are checking in the array
  2. OUTPUTS: an integer representing the number that is missing from the range
  3. CONSTRAINTS: aim for logarithmic or linear
  4. EDGE CASES: n/a
JUSTIFICATION (restate the question in my own words) → when provided an array of numbers, determine which number is missing from the array based on the length. If the array length is 3, we are checking the array for all numbers between 0 and 3 (inclusive). Return that number once found. 
EXPLANATION (discuss the relationship between inputs and outputs) → Get the length of nums, and make a data storage for that number. Iterate over the array and place all characters into their own storage compartment. At the end, whichever item's storage compartment is empty is the missing number - return that. 
VISUALIZATION - Excalidraw
APPROXIMATION (pseudocode) → 

//get the length of the nums array 
//iterate over the nums array, 
    //make pointer for each item in array 
    //iterate again over the nums array 
        //check current element against pointer in array
        //if exists, continue, 
        //if not, return that number. 
        
*/

