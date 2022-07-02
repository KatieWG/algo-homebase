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
 * @return {number[][]}
 */
var levelOrder = function(root) {
//declare a result array
//declare empty currentLevelNodes array
//if there is a root
    //push it to the currentLevelNodes array    
//while currentLevelNodes has a length    
    //declare empty 'current' array 
//set length variable equal to currentLevelNodes length AT THIS TIME, aka at this LEVEL   
//iterate with a for loop 'length' number of times
    //set node to first item in currentLevelNodes, and shift it off 
    //push the first item's value to 'current' array
    //if this node has a left node...
        //push that node to the currentLevel array 
    //if it has a right node...
        //push that node to the currentLevelNodes array
    
//(OUTSIDE OF THE FOR LOOP) push current array onto final result array 
//(OUTSIDE OF THE WHILE LOOP) return final result array 
    
    let result = []; 
    currentLevel = []; 
    if(root) 
        currentLevel.push(root); 
    while(currentLevel.length > 0) { 
        current = []; 
        let length = currentLevel.length; 
        for (let i = 0; i< length; i++) { 
            let node = currentLevel.shift(); 
            current.push(node.val); 
            if(node.left) { 
                currentLevel.push(node.left); 
            }
            if(node.right) { 
                currentLevel.push(node.right); 
            }
        }
        result.push(current); 
    }
    return result; 
};

/* 

Specification -
  Inputs: root node 
  Outputs: array of arrays, each representing a level of the tree containing those nodes
  Constraints: n/a
  Edge cases: n/a

Justification - 
    This function should accept a root node and return an array of arrays, which represent each level of the tree's hierarchy and the nodes' values on that level. 

Explanation - 
    This function should perform a breadth-first search, at each level adding to the result an array of double the number of nodes (in the case of a perfect binary tree), or simply the nodes that exist. 

Visualization - Excalidraw
Approximation - Above

*/