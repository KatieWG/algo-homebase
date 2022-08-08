/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//given two arrays, find the median float/int of the combined set of numbers 

var findMedianSortedArrays = function(nums1, nums2) {
    let index1 = 0; //counts up to keep track of index1
    let index2 = 0; //counts up to keep track of index2
    let current;
    let last;
    let totalLen = nums1.length + nums2.length; //3
    
    while (index1 + index2 <= totalLen/2) { //1+1 <= 1.5
        if (current !== undefined) { 
            last = current; //last = 1
         }
        let num1 = nums1[index1]; //num1 = 3
        let num2 = nums2[index2]; //num2 = 2
        
            if (num1 === undefined) { 
               current = num2;
               index2++; 
            } else if (num2 === undefined) {
                current = num1; 
                index1++;
            } else 
                if (num1 < num2) { //1 < 2 (TRUE)
                current = num1; //current = 1
                index1++; //index1 = 1
            } else {
                current = num2; //current = 2
                index2++; //index2 = 1
            }
      }
    
      return totalLen % 2 === 0 ? (last + current) / 2 : current;
      // 3 % 2 === 1 ? (1 + 2) / 2 : 2
};
  
    //declare index pointers (0, 0), current (nothing), last(nothing) and totalLength 
    
    //if current exists at beginning of loop, set to last variable before current is reset
    //iterate simultaneously over both arrays with a while loop
    //using two index pointers, keep track of the current index of each array
    //whichever number is smaller, set to current variable 
    
    //after the loop:
    //if odd, return the middle element 
    //if even, plug the current and last elements into the equation to determine median