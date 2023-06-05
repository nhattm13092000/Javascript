const lengthLongestSub = require("./4.3");

test("Sắp xếp :", () => {
    expect(lengthLongestSub(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toEqual(2);
})

test("Sắp xếp :", () => {
    expect(lengthLongestSub(["programming", "programmer", "program"])).toEqual(7);
})

test("Sắp xếp :", () => {
    expect(lengthLongestSub(["hello", "world", "jelly"])).toEqual(1);
})

test("Sắp xếp :", () => {
    expect(lengthLongestSub(["abcd", "ab", "abcd", "ab", "abcd"])).toEqual(2);
})

test("Sắp xếp :", () => {
    expect(lengthLongestSub(["def", "asd", "aqwe", "asqw"])).toEqual(0);
})