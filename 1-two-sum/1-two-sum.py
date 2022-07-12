class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        storage = {}
        
        for i, num in enumerate(nums):
            opposite = target - num
            if opposite in storage:
                return [storage[opposite], i]
            storage[nums[i]] = i

        
        
# i: array of numbers, target sum int
# o: array of indices representing the two nums that add up to the target 
# c: there is only one valid answer
# e: //

# justification: 
# loop over nums. set current char variable. Loop over nums again. If target - current char is equal to any of the nums in the loop, return both indexes in a tuple. Else, return null.

# pseudocode: 
    # // iterate over nums
    # // set current char variable 
     #  // iterate again 
      # // if at any point the target minus currentChar is equal to the second loop's current char...
      # // return a tuple of i and j indices
    
  # // return null if none found

