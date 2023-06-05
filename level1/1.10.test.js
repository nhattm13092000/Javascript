const strContain = require("./1.10");

test("Các từ chứa chữ a: ", () => {
    expect(strContain("Hello world")).toEqual(0);
})

test("Các từ chứa chữ a: ", () => {
    expect(strContain("A sAm askkq as")).toEqual(2);
})

test("Các từ chứa chữ a: ", () => {
    expect(strContain("aqwk sdmw qwjem, wqnej")).toEqual(1);
})

test("Các từ chứa chữ a: ", () => {
    expect(strContain("pow skaq qwm akmqw qwms")).toEqual(2);
})

test("Các từ chứa chữ a: ", () => {
    expect(strContain("sdm  kqmw qwmeka mqwem amsd")).toEqual(2);
})