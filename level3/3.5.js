/**
 * Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
 * @param {array} []
 * @return the longest increasing subsequence of the numbers.
 */

const findSmallest = (arr) => {
  let smallest = 1; 

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= smallest) {
      smallest += arr[i];
    } else {
      break;
    }
  }
  return smallest;
};

module.exports = findSmallest;
