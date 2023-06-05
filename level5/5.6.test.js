const newStr = require("./5.6");

test("loại bỏ khoảng trắng :", () => {
    expect(newStr("    hello     world    ")).toEqual("hello world");
})  

test("loại bỏ khoảng trắng :", () => {
    expect(newStr("    Nhat     di code  intern    ")).toEqual("Nhat di code intern");
})  


test("loại bỏ khoảng trắng :", () => {
    expect(newStr("   Test them    mot  cai  vi  du    ")).toEqual("Test them mot cai vi du");
})  