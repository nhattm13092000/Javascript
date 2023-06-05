const totalNum = require("./2.4");

test("Tổng các số vừa chia có 3 vừa chia cho 5: ", () => {
    expect(totalNum([15, 45, 30])).toEqual(90);
})

test("Tổng các số vừa chia có 3 vừa chia cho 5: ", () => {
    expect(totalNum([3, 15, 40, 120, 150, 2])).toEqual(285);
})

test("Tổng các số vừa chia có 3 vừa chia cho 5: ", () => {
    expect(totalNum([1, 6, 2, 30, 25])).toEqual(30);
})

test("Tổng các số vừa chia có 3 vừa chia cho 5: ", () => {
    expect(totalNum([34, 56, 23, 54, 60])).toEqual(60);
})

test("Tổng các số vừa chia có 3 vừa chia cho 5: ", () => {
    expect(totalNum([-15, -30, 23, 54, 60])).toEqual(15);
})