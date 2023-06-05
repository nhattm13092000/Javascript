const numberOfWord = require("./1.9");

test("Số từ trng 1 mảng: ", () => {
    expect(numberOfWord("Hello world")).toEqual(2);
})

test("Số từ trng 1 mảng: ", () => {
    expect(numberOfWord("asd qwer xcas")).toEqual(3);
})

test("Số từ trng 1 mảng: ", () => {
    expect(numberOfWord("i will be a developer")).toEqual(5);
})

test("Số từ trng 1 mảng: ", () => {
    expect(numberOfWord("stronger like superman")).toEqual(3);
})

test("Số từ trng 1 mảng: ", () => {
    expect(numberOfWord("Code reactjs is the best, that right?")).toEqual(7);
})