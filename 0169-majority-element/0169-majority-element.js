/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const eachNumberShowCount=nums.reduce((total, current)=>{
        total[current] = (total[current] || 0) + 1;
        return total;
  },[]);

  for(let num in eachNumberShowCount) {
    if(eachNumberShowCount[num]> nums.length / 2) {
      return num
    }
  }
};