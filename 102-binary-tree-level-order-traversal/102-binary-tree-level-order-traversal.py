# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        result = []
        currentLevel = []
        if root:
            currentLevel.append(root)
        
        while len(currentLevel) > 0:
            current = []
            length = len(currentLevel)
            
            for i in range(length):
                node = currentLevel.pop(0)
                current.append(node.val)
                if node.left:
                    currentLevel.append(node.left)
                if node.right:
                    currentLevel.append(node.right)
                
            result.append(current)
        
        return result