const sortShortestString = require("./3.10");

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortShortestString(['apple', 'banana', 'orange', 'kiwi', 'strawberry'])).toEqual(['kiwi', 'apple', 'banana', 'orange', 'strawberry']);
})

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortShortestString(['ask', 'sajdqw', 'qwo', 'qiwkika'])).toEqual(['ask', 'qwo', 'sajdqw', 'qiwkika']);
})

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortShortestString(['oqlw', 'xm', 'oqwke', 'alsq'])).toEqual(['xm', 'alsq', 'oqlw', 'oqwke']);
})

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortShortestString(['a', 'xqwm', 'a', 'qwkpp'])).toEqual(['a', 'a', 'xqwm', 'qwkpp']);
})

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortShortestString(['pqwoa', 'sa', 'sal', 'anskwqw'])).toEqual(['sa', 'sal', 'pqwoa', 'anskwqw']);
})