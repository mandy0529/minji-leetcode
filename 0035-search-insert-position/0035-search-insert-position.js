/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let moveIndex = 0;
    let endIndex = nums.length - 1;
    
    while(moveIndex <= endIndex) {
        const middleIndex = Math.floor((moveIndex + endIndex) / 2);

        if (nums[middleIndex] < target) {
            moveIndex = middleIndex + 1;
        } else if(nums[middleIndex]=== target) {
            return middleIndex
        } else {
            endIndex = middleIndex - 1
        }
    }
    return moveIndex;
};