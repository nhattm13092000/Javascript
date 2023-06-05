/**
 * Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
 * @param {array} []
 * @return loại bỏ các phần tử bị lặp trong mảng.
 */

const uniqArr = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = uniqArr;