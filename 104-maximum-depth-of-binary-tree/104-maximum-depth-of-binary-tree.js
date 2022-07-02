/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  
    const innerSearch = (node) => {
        if (node === null) {
            return 0;
        } 
            return Math.max(innerSearch(node.left), innerSearch(node.right)) + 1;  
        
    }

    return innerSearch(root);
    
};

/* 

Specification -
  Inputs: root node 
  Outputs: integer representing height of BST
  Constraints: n/a
  Edge cases: n/a

Justification - 
    This function should accept a root node and return an integer representing the      
    distance between the root and the farthest leaf node in the tree. 

Explanation - 
    This function should contain an inner recursive function, which accepts a root node 
    and recursively maps over all the root node's children and grandchildren until 
    finding a node without a child. Then, what should evaluate to a solution in the 
    original execution context is the max length of either the right or the left side of 
    the binary search tree. 

Visualization - Excalidraw
Approximation - 

// create helper function
// take care of base cases: 
  // if this node is null, return 0 (no additional height added)
  // otherwise, return the max number between inner function invoked with node.left and node.right + 1. 

// return invoked inner function on root node to start recursive process on the tree 

*/