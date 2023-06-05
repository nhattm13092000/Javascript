const secondSmallest = require("./3.2");

test("Hiệu lớn nhất trong dãy của 2 số là: ", () => {
    expect(secondSmallest([1, 9, 90, 1, 100])).toEqual(99);
})

test("Hiệu lớn nhất trong dãy của 2 số là: ", () => {
    expect(secondSmallest([5, 11, 22, 12, 5])).toEqual(17);
})

test("Hiệu lớn nhất trong dãy của 2 số là: ", () => {
    expect(secondSmallest([1, 4, -2, 1, 5, 20])).toEqual(22);
})

test("Hiệu lớn nhất trong dãy của 2 số là: ", () => {
    expect(secondSmallest([6, 12, 4, 5, 1, 23])).toEqual(22);
})

test("Hiệu lớn nhất trong dãy của 2 số là: ", () => {
    expect(secondSmallest([6, 23, 5, 1, -2, -5])).toEqual(28);
})