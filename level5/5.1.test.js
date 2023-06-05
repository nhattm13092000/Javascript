const reverseArr = require("./5.1");

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(reverseArr([3, 1, 4])).toEqual([4,1,3]);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(reverseArr([6, 1, 2, 7, 3, 5])).toEqual([5, 3, 7, 2, 1, 6]);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(reverseArr([2, 5, 1, 7, 28, 0, 9])).toEqual([9, 0, 28, 7, 1, 5, 2]);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(reverseArr([23, 12, 6, 2, 43])).toEqual([43, 2, 6, 12, 23]);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(reverseArr([54, 12, 60, 23, 12])).toEqual([12, 23, 60, 12, 54]);
})