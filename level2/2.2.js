/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {string} str
 * @return the second largest number in the list.
 */

const findLongestWord = (arr) => {
    let max_str = arr[0].length;
    let ans = arr[0];
    for(let i = 1; i < arr.length; i++){
        const max = arr[i].length;
        if(max > max_str){
            ans = arr[i];
            max_str = max
        }
    }
    return ans;
}

module.exports = findLongestWord;