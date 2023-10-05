/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const array = new Array(nums.length);
    array[0]=nums[0];

    for(let i = 1; i < nums.length; i++) {
        array[i]=nums[i]+array[i-1]
    }

    return array
};