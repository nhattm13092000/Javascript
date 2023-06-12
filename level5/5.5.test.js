const groupByField = require("./5.5");

test("Group by field:", () => {
    expect(groupByField([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}],'a')).toEqual({"1": [{"a": 1, "b": 2}, {"a": 1, "b": 3}], "2": [{"a": 2, "b": 2}]});
})

test("Group by field::", () => {
    expect(groupByField([{a: 2, b: 2, c: 20}, {a: 1, b: 3, d: 40}, {a: 2, b: 2}],'a')).toEqual({"1": [{"a": 1, "b": 3, d: 40}], "2": [{"a": 2, "b": 2, "c" : 20}, {"a": 2, "b": 2}]});
})

test("Group by field::", () => {
    expect(groupByField([{d: 0, b: 2, c: 20}, {a: 1, b: -10, d: 40}, {a: 3, c: 2}],'d')).toEqual({"0": [{"b": 2, "c": 20, "d": 0}], "40": [{"a": 1, "b": -10, "d": 40}], "undefined": [{"a": 3, "c": 2}]});
})

test("Group by field::", () => {
    expect(groupByField([{x: 1, y : 2, t: 12}, {a: 1, b: 3, d: 40}, {c: 2, b: 2}, {x: -1, y: -2}],'x')).toEqual({"-1": [{"x": -1, "y": -2}], "1": [{"t": 12, "x": 1, "y": 2}], "undefined": [{"a": 1, "b": 3, "d": 40}, {"b": 2, "c": 2}]});
})

test("Group by field::", () => {
    expect(groupByField([{b: 2, c: 2, c: 20}, {a: 1, c: 3, d: 40}, {d: 2, b: 2}],'a')).toEqual({"1": [{"a": 1, "c": 3, "d": 40}], "undefined": [{"b": 2, "c": 20}, {"b": 2, "d": 2}]});
})