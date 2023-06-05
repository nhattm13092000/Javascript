/**
 * Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
 * @param {str} str
 * @return loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
 */

const trimStr = (str) => {
    const newStr = str.replace(/\s+/g," ").trim();
    return newStr;
}
module.exports = trimStr;