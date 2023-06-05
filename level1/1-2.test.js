const theNumberString = require("./1-2");

test("Độ dài chuỗi", () => {
    expect(theNumberString("what is reactjs")).toBe(15);
});


test("Độ dài chuỗi", () => {
    expect(theNumberString("All that glitters is not gold.")).toBe(30);
});


test("Độ dài chuỗi", () => {
    expect(theNumberString("Jsaksdmwalawl")).toBe(13);
});

test("Độ dài chuỗi", () => {
    expect(theNumberString("KOL SAKQS")).toBe(9);
});

test("Độ dài chuỗi", () => {
    expect(theNumberString("WHY CAN U DO THAT?")).toBe(18);
});