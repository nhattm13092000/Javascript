const chunkArr = require("./5.2");

test("Chia phần tử mảng theo chỉ định:", () => {
    expect(chunkArr(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'],['d']]);
})

test("Chia phần tử mảng theo chỉ định:", () => {
    expect(chunkArr(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'],['c','d']]);
})

test("Chia phần tử mảng theo chỉ định:", () => {
    expect(chunkArr(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]);
})

test("Chia phần tử mảng theo chỉ định:", () => {
    expect(chunkArr(['as', 'xxasd', 'qwe', 'asdqwe'], 1)).toEqual([['as'],['xxasd'],['qwe'],['asdqwe']]);
})

test("Chia phần tử mảng theo chỉ định:", () => {
    expect(chunkArr(['Di','thoi', 'nao'], 1)).toEqual([['Di'], ['thoi'], ['nao']]);
})