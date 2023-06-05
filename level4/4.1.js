/**
 * Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 * @param {array} []
 * @return the minimum number of moves required to sort the list in ascending order using bubble sort.
 */

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                count++;
            }
        }
    }
    return count;
};

module.exports = bubbleSort;