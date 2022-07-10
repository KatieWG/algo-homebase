/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];
        
        if (guess === target) { //we have found our number
            return mid;
        }
        if (guess < target) { //we have guessed too low 
            low = mid + 1;
        } else { //we have guessed too high
            high = mid - 1;
        }
    }
    
    return -1;
};

/* 

SPECIFICATION →
  1. INPUTS: sorted array of numbers and a target value to search for 
  2. OUTPUTS: index of number if exists, and -1 if it does not 
  3. CONSTRAINTS: should run in logorithmic time 
  4. EDGE CASES: array of 1  
  
JUSTIFICATION (restate the question in my own words) → This function should accept an array of ordered integers and a value to search for. In logarithmic time, search for the value in the ordered array, returning either the value's index in the array or -1 if not found. 

EXPLANATION (discuss the relationship between inputs and outputs) → the ordered array represents a binary search tree. We should use the binary search strategy to eliminate half of our array's options each time we make a guess, adjusting our high and low pointers accordingly. 

VISUALIZATION - Excalidraw

APPROXIMATION (pseudocode) → 

//set low pointer to 0 index
//set high pointer to list length - 1

//while low is less than or equal to high 
    //set midpoint to high + low / 2
    //set guess to array at midpoint 
    
    //if guess is equal to our value 
        //return midpoint 
    //if guess is greater than our value 
        //adjust high pointer to be mid - 1
    //if guess is lower than our value 
        //adjust low pointer to be mid + 1
    
//return -1



*/