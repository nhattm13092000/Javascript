const theShortestNumber = require("./1.5");

test("Số nhỏ nhất trong mảng là a = : ", () => {
    expect(theShortestNumber([1, 2, 4])).toBe(1);
})

test("Số nhỏ nhất trong mảng là a = : ", () => {
    expect(theShortestNumber([2, 4, 5, 8])).toBe(2);
})

test("Số nhỏ nhất trong mảng là a = : ", () => {
    expect(theShortestNumber([8, 9, 1, 2, 8, 10])).toBe(1);
})

test("Số nhỏ nhất trong mảng là a = : ", () => {
    expect(theShortestNumber([10, 12, 14])).toBe(10);
})

test("Số nhỏ nhất trong mảng là a = : ", () => {
    expect(theShortestNumber([12, 256, 245])).toBe(12);
})