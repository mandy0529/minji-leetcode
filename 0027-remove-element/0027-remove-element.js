/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const filterNums = nums.filter(num => num !== val); 
    nums.length = 0; 
    nums.push(...filterNums); 
    return nums.length; 
};