const sumAll = require("./5.9");

test("Sum:", () => {
    expect(sumAll([{a: 2, b: 10}, {a: 12, c: 11}, {a: 8, b: 14, d: 20}, {a: 8}])).toEqual({a: 30, b: 24, c: 11, d: 20});
})

test("Sum:", () => {
    expect(sumAll([{a: -12, b: -10}, {a: 2, d: 11}, {x: 8, c: 14, b: 20}, {a: 8}])).toEqual({a: -2, b: 10, c: 14, d: 11, x: 8});
})

test("Sum:", () => {
    expect(sumAll([{n: 2, d: 10}, {a: 12, y: 11}, {a: -8, b: -14, d: -20}, {y: 8}])).toEqual({a: 4, b: -14, d: -10, n: 2, y: 19});
})


test("Sum:", () => {
    expect(sumAll([{y: 2, d: 10}, {d: 12, b: 11}, {c: 8, a: 14, g: 10}])).toEqual({a: 14, b: 11, c: 8, d: 22, g: 10, y: 2});
})


test("Sum:", () => {
    expect(sumAll([{d: -2, t: -10}, {d: 2, s: 10}, {v: 8, b: 14, d: 20}, {a: 8}])).toEqual({a: 8, b: 14, d: 20, s: 10, t: -10, v: 8});
})