/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {array} []
 * @return the second smallest number in the list.
 */

const diffeMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }if(arr[i] > max){
            max = arr[i];
        }
    }

    return max - min;
}

module.exports = diffeMax;