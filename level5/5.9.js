/**
SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
 * @param {array} arr
 * @returns tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ
 */

const sumAllObj = (arr) => {
  return arr.reduce((result, obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined && !isNaN(obj[key])) {
        result[key] = (result[key] || 0) + Number(obj[key]);
      }
    });
    return result;
  }, {});
}

module.exports = sumAllObj;
