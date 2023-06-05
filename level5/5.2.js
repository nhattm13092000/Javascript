/**
 * Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
 * @param {array} []
 * @return chia đều mảng theo số phần chỉ định
 */

const chunkArr = (arr, size) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i += size){
        const chunk = arr.slice(i, i + size);
        newArr.push(chunk);
    }
    return newArr;
}

module.exports = chunkArr;