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

var getMinimumDifference = function(root) {
    let result = [];
    
    // 중위 순회 함수 정의
    function inorderTraversal(node) {
        if (!node) {
            return;
        }
        
        inorderTraversal(node.left);
        result.push(node.val);
        inorderTraversal(node.right);
    }

    inorderTraversal(root); // 중위 순회 시작

    let minimumDifference = Infinity;
    for (let i = 1; i < result.length; i++) {
        minimumDifference = Math.min(minimumDifference, result[i] - result[i - 1]);
    }

    return minimumDifference;
};