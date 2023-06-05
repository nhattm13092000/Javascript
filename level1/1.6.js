/**
 * Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param {array} []
 * @return sort list in ascending order
 */

function sortArrayAscending(array){
    function compareNum(a,b){
        return a - b;
    }
    return array.sort(compareNum);
}

module.exports = sortArrayAscending;
