const theLargestNumber = require("./1.4");

test("Số lơn nhất trong mảng là a = : ", () => {
    expect(theLargestNumber([1, 2, 4])).toBe(4);
})

test("Số lơn nhất trong mảng là a = : ", () => {
    expect(theLargestNumber([2, 4, 5, 1, 8])).toBe(8);
})

test("Số lơn nhất trong mảng là a = : ", () => {
    expect(theLargestNumber([8, 9, 1, 2, 8, 10])).toBe(10);
})

test("Số lơn nhất trong mảng là a = : ", () => {
    expect(theLargestNumber([10, 12, 14])).toBe(14);
})

test("Số lơn nhất trong mảng là a = : ", () => {
    expect(theLargestNumber([12, 256, 245])).toBe(256);
})