const secondSmallest = require("./3.1");

test("Số nhỏ thứ 2 trong dãy là: ", () => {
    expect(secondSmallest([1, 2, -2, 4, 2, 1, 4])).toEqual(1);
})

test("Số nhỏ thứ 2 trong dãy là: ", () => {
    expect(secondSmallest([2, 3, 4, -2, -1, -3])).toEqual(-2);
})

test("Số nhỏ thứ 2 trong dãy là: ", () => {
    expect(secondSmallest([3, 4, 1, 6, 12, -12, -23])).toEqual(-12);
})

test("Số nhỏ thứ 2 trong dãy là: ", () => {
    expect(secondSmallest([-23, -45, -12, -234, -12, -2])).toEqual(-45);
})

test("Số nhỏ thứ 2 trong dãy là: ", () => {
    expect(secondSmallest([1, 3, 5, 6, 2, 4, 1])).toEqual(1);
})
