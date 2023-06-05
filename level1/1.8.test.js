const medianofArr = require("./1.8");

test("Số trung vị: ", () => {
    expect(medianofArr([1, 2, 3, 4, 6, 8])).toEqual(3.5);
})

test("Số trung vị: ", () => {
    expect(medianofArr([1, 6, 5 , 8, 9])).toEqual(6);
})

test("Số trung vị: ", () => {
    expect(medianofArr([4, 1, 2, 8, 3, 2])).toEqual(2.5);
})

test("Số trung vị: ", () => {
    expect(medianofArr([3, 10, 2, 12, 32, 21])).toEqual(11);
})

test("Số trung vị: ", () => {
    expect(medianofArr([23, 1, 22, 11, 15, 18, 19])).toEqual(18);
})