/**
 * Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.
 * @param {array} []
 * @return the length of the longest substring that appears in every string in the list.
 */

const lengthLongestSub = (arr) => {
    if(arr.length == 0) return 0;
    const str = arr[0];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j <= str.length; j++){
            let sub = str.substring(i, j);
            if(arr.every((str) => str.includes(sub))){
                count = Math.max(count, sub.length)
            }
        }
    }

    return count;
}

module.exports = lengthLongestSub;