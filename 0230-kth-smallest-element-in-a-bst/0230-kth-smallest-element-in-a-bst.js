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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 중위 순회 함수 정의
    function inorderTraversal(node, result) {
        if (!node || result.length >= k) {
            return;
        }
        
        inorderTraversal(node.left, result);
        result.push(node.val);
        inorderTraversal(node.right, result);
    }
    
    const result = [];
    inorderTraversal(root, result);

    return result[k-1]; 
};