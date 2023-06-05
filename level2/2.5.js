/**
 * Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
 * @param {array} []
 * @return the maximum sum of any contiguous subarray within the list.
 */

const maxLargestSum = (arr) => {
    let presentSum = 0;
    let maxSum = 0;
    for (let num of arr){
        presentSum = Math.max(0, (presentSum + num));
        maxSum = Math.max(maxSum, presentSum)
    }

    return maxSum;
}

module.exports = maxLargestSum;