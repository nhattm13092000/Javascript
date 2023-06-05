/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {array} []
 * @return the second largest number in the list.
 */

const strFindNum = (str) => {
    let num = (a,b) => { return a - b};
    let sortNum = str.sort(num);
    let result = sortNum[sortNum.length - 2];
    return result;
}

module.exports = strFindNum;