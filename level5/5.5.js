/**
 *  Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định. 
 * @param {array} []
 * @return trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
 */

const groupByField = (a, b) => {
    return a.reduce((groups, item) => {
      const key = item[b];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    }, {});
  }

  module.exports = groupByField;