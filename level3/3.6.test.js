const medianCombine = require("./3.6");

test("Số trung vị của ", () => {
    expect(medianCombine([2,1,3],[3,1,2])).toEqual(2);
})

test("Số trung vị của ", () => {
    expect(medianCombine([2,4,5,3],[3,1,2])).toEqual(3);
})

test("Số trung vị của ", () => {
    expect(medianCombine([10, 2, 4, 6, 5],[1, 12, 8])).toEqual(5.5);
})

test("Số trung vị của ", () => {
    expect(medianCombine([12, 123, 41, 2],[145, 214, 213])).toEqual(123);
})

test("Số trung vị của ", () => {
    expect(medianCombine([-21, 23, -25, -235, -221],[-1, 12, 8])).toEqual(-11);
})