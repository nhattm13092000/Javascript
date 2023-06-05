const maxProductThreeNum = require("./4.6");

test("Tích lớn nhất của 3 số trong mảng là :", () => {
    expect(maxProductThreeNum([-10, -5, 0, 1, 2, 3, 4])).toEqual(200);
})

test("Tích lớn nhất của 3 số trong mảng là :", () => {
    expect(maxProductThreeNum([1, 4, 2, 54, 2])).toEqual(432);
})

test("Tích lớn nhất của 3 số trong mảng là :", () => {
    expect(maxProductThreeNum([-20, -2, 12, 23, 50])).toEqual(13800);
})

test("Tích lớn nhất của 3 số trong mảng là :", () => {
    expect(maxProductThreeNum([-87, 12, 54, 23, 12, -12])).toEqual(56376);
})

test("Tích lớn nhất của 3 số trong mảng là :", () => {
    expect(maxProductThreeNum([40, 23, 123, 65, 12, 23])).toEqual(319800);
})