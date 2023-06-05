const strFindNum = require("./2.1");

test("Các từ chứa chữ a: ", () => {
    expect(strFindNum([1, 2, 3, 8, 7, 6])).toEqual(7);
})

test("Các từ chứa chữ a: ", () => {
    expect(strFindNum([2, 4, 6, 1, 3, 5])).toEqual(5);
})

test("Các từ chứa chữ a: ", () => {
    expect(strFindNum([4, 2, 8, 1, 4, 3, 5, 7, 7])).toEqual(7);
})

test("Các từ chứa chữ a: ", () => {
    expect(strFindNum([12, 20, 40, 11, 10, 6, 7])).toEqual(20);
})

test("Các từ chứa chữ a: ", () => {
    expect(strFindNum([100, 23, 44, 123, 12, 1235])).toEqual(123);
})