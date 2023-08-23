/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueNumsSet = new Set(nums); 
    const uniqueNumsArray = Array.from(uniqueNumsSet);
    nums.length = 0; 
    nums.push(...uniqueNumsArray); 
    return nums.length;
};