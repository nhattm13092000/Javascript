/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers
 * @param {array} []
 * @return median number of array
 */

function medianofArr(arr){
    var concat = arr;
    concat = concat.sort(
        function (a, b) { return a - b });

    var length = concat.length;
  
    if (length % 2 == 1) {
        return concat[(length / 2) - .5]
  
    }
    else {
        return (concat[length / 2] + concat[(length / 2) - 1]) / 2;
    }
}

module.exports = medianofArr;