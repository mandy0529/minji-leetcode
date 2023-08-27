/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let firstNumber=0;
    let lastNumber=numbers.length-1;
    
    while(1<=firstNumber<lastNumber) {
        let sum=numbers[firstNumber]+numbers[lastNumber];
         if(sum<target) {
            firstNumber++
        } else if(sum>target) {
            lastNumber--
        }else {
            return [firstNumber+1, lastNumber+1]
        }
    }
};