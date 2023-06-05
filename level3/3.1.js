/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {array} []
 * @return the second smallest number in the list.
 */

const secondSmallest = (arr) => {
    let differ = (a, b) => {
        return a - b;
    }
    
    let sortArr = arr.sort(differ);
    let result = sortArr[1];
    return result
}

module.exports = secondSmallest;