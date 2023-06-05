const maxLargestSum = require("./2.5");

test("Tổng lớn nhất của dãy số con liền kề: ", () => {
    expect(maxLargestSum([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
})

test("Tổng lớn nhất của dãy số con liền kề: ", () => {
    expect(maxLargestSum([5,4,-1,7,8])).toEqual(23);
})

test("Tổng lớn nhất của dãy số con liền kề: ", () => {
    expect(maxLargestSum([2, 4, -23, 5, 8])).toEqual(13);
})

test("Tổng lớn nhất của dãy số con liền kề: ", () => {
    expect(maxLargestSum([6, -1, 5, 12, -2, -8, 2])).toEqual(22);
})

test("Tổng lớn nhất của dãy số con liền kề: ", () => {
    expect(maxLargestSum([1, 2])).toEqual(3);
})