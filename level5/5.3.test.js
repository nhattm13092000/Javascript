const uniqArr = require("./5.3");

test("Loại phần tử trùng lặp mảng:", () => {
    expect(uniqArr([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
})

test("Loại phần tử trùng lặp mảng:", () => {
    expect(uniqArr([1, 2, 6, 3, 6, 4])).toEqual([1, 2, 6, 3, 4]);
})

test("Loại phần tử trùng lặp mảng:", () => {
    expect(uniqArr([4, 2, 1, 2, 5, 2, 1, 4, 3])).toEqual([4, 2, 1, 5, 3]);
})

test("Loại phần tử trùng lặp mảng:", () => {
    expect(uniqArr([12, 23, -1, -1, 23, 12, 5])).toEqual([12, 23, -1, 5]);
})

test("Loại phần tử trùng lặp mảng:", () => {
    expect(uniqArr([25, 1, 23, 65, 23, 5, 6, 1])).toEqual([25, 1, 23, 65, 5, 6]);
})