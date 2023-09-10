/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
     nums.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
    return nums[k - 1]; // k번째로 큰 요소 반환
};