const uniqArr = require("./5.4");

test("loại bỏ các phần tử bị lặp trong object:", () => {
    expect(uniqArr([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }])).toEqual([{'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);
})  

test("loại bỏ các phần tử bị lặp trong object:", () => {
    expect(uniqArr([{ 'x': 1, 'y': 2 }, { 'loa': 2, 'aw': 12 }, { 'loa': 2, 'aw': 12 }, {'loa': 2, 'aw': 12}])).toEqual([{'x': 1, 'y': 2 }, { 'loa': 2, 'aw': 12}]);
})  

test("loại bỏ các phần tử bị lặp trong object:", () => {
    expect(uniqArr([{ 'x': 5, 'y': 6 }, { 'x': 2, 'y': 1 }, { 'x': 5, 'y': 6 }])).toEqual([{'x': 5, 'y': 6 }, { 'x': 2, 'y': 1 }]);
})  