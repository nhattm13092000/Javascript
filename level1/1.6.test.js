const sortArrayAscending = require("./1.6");

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAscending([1, 2, 4])).toEqual([1, 2, 4]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAscending([2, 5, 4, 8])).toEqual([2, 4, 5, 8]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAscending([8, 9, 1, 2, 8, 10])).toEqual([1, 2, 8, 8, 9, 10]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAscending([10, 14, 12])).toEqual([10, 12, 14]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAscending([12, 256, 245])).toEqual([12, 245, 256]);
})