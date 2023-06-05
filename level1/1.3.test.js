const mathSquare = require("./1.3");

test("Binh phương của a: ", () => {
    expect(mathSquare(5)).toBe(25);
})

test("Binh phương của a: ", () => {
    expect(mathSquare(7)).toBe(49);
})

test("Binh phương của a: ", () => {
    expect(mathSquare(2)).toBe(4);
})

test("Binh phương của a: ", () => {
    expect(mathSquare(12)).toBe(144);
})

test("Binh phương của a: ", () => {
    expect(mathSquare(10)).toBe(100);
})
