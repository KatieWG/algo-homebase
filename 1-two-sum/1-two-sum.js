/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //     let currentChar = nums[i];
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (target - currentChar === nums[j]) {
  //             return [i, j];
  //         }
  //     }
  // }
    
    //OPTIMIZED SOLUTION*
    //make a map 
    //iterate over nums 
        //set opposite to target - currentChar
        //if opposite is in the map...
            //return map[opposite], i
        //set map[opposite] equal to its index, so i
    
    
    const storage = {};
    
    for (let i = 0; i < nums.length; i++) {
        let opposite = target - nums[i];
        if (opposite in storage) {
            return [storage[opposite], i];
        }
        storage[nums[i]] = i;
    }

    
};

/*
i: array of numbers, target sum int
o: array of indices representing the two nums that add up to the target 
c: there is only one valid answer
e: //

justification: 
loop over nums. set current char variable. Loop over nums again. If target - current char is equal to any of the nums in the loop, return both indexes in a tuple. Else, return null.

pseudocode: 
    // iterate over nums
    // set current char variable 
      // iterate again 
      // if at any point the target minus currentChar is equal to the second loop's current char...
      // return a tuple of i and j indices
    
  // return null if none found
*/
