const bubbleSort = require("./4.1");

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(bubbleSort([3, 1, 4, 2, 6, 5])).toEqual(4);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(bubbleSort([1, 3, 2])).toEqual(1);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(bubbleSort([24, -2, 21, 3, -5, 1, 23])).toEqual(12);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(bubbleSort([5, 21, 54, 1, 65, 12, 45])).toEqual(8);
})

test("Số lần sắp xếp dùng bubble sort:", () => {
    expect(bubbleSort([123, 4, 21, 56, 12, 65, 34])).toEqual(10);
})
