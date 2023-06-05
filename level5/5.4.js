/**
 * uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
 * @param {arr} []
 * @return loại bỏ các phần tử bị lặp trong object.
 */

const uniqObj = (arr) => {
    const uniqArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqArr.length; j++) {
            if (arr[i].x === uniqArr[j].x && arr[i].y === uniqArr[j].y) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqArr.push(arr[i]);
        }
    }
    return uniqArr;
}
module.exports = uniqObj;