/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
     nums.reduce((total,item,index,nums)=> nums[index]+=total)

    return nums

};