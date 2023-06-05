/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {array 1, array 2} [] []
 * @return the median of the combined list.   
 */

const medianCombine = (arr1, arr2) =>
{
    let num = (a, b) =>{
        return a - b;
    }

    let mergeArr = [...arr1, ...arr2];
    let sortArr = mergeArr.sort(num);
    if (sortArr.length % 2 == 1) {
        return sortArr[(sortArr.length / 2) - .5]
  
    }
    else {
        return (sortArr[sortArr.length / 2] + sortArr[(sortArr.length / 2) - 1]) / 2;
    }
}

module.exports = medianCombine;

