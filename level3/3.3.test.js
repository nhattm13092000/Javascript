const secondSmallest = require("./3.3");

test("độ dài của chuỗi con tịnh tiến dài nhất là: ", () => {
    expect(secondSmallest([3, 10, 2, 1, 20])).toEqual(3);
})

test("độ dài của chuỗi con tịnh tiến dài nhất là: ", () => {
    expect(secondSmallest([50, 3, 10, 7, 40, 80])).toEqual(4);
})

test("độ dài của chuỗi con tịnh tiến dài nhất là: ", () => {
    expect(secondSmallest([40,29, 1, 4, 6])).toEqual(3);
})

test("độ dài của chuỗi con tịnh tiến dài nhất là: ", () => {
    expect(secondSmallest([2, 3, 5, 6, 8, 1])).toEqual(5);
})

test("độ dài của chuỗi con tịnh tiến dài nhất là: ", () => {
    expect(secondSmallest([50])).toEqual(1);
})