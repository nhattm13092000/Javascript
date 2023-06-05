const findSmallest = require("./3.5");

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách: ", () => {
    expect(findSmallest([1, 2, 3, 7, 8, 20])).toEqual(42);
})

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách: ", () => {
    expect(findSmallest([1, 3, 4, 9, 10, 12])).toEqual(2);
})

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách: ", () => {
    expect(findSmallest([-1, 2, 5, 6, 8, 3])).toEqual(0);
})

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách: ", () => {
    expect(findSmallest([23, 12, 45, 12, 56, 12])).toEqual(1);
})

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách: ", () => {
    expect(findSmallest([1, 2, 3, 6, 9, 23])).toEqual(22);
})