/**
 * Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng
 * @param {array} []
 * @return Viết một function để đảo ngược thứ tự phần tử trong mảng
 */
const reverseArr = (arr) => {
    const newArray = arr.reduce((accumulator, value) => {
        return [value, ...accumulator]
      }, []);
    return newArray;
}

module.exports = reverseArr;
