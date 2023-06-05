/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {array} []
 * @return shortest number of a
 */

function theShortestNumber(array){
    return Math.min(...array);
}

module.exports = theShortestNumber;

