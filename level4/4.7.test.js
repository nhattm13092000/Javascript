const sortLongestString = require("./4.7");

test("Sắp xếp :", () => {
    expect(sortLongestString(['the quick brown fox', 'the lazy dog jumps over the fence', 'the cat in the hat'])).toEqual(["the lazy dog jumps over the fence", "the quick brown fox", "the cat in the hat"]);
})

test("Sắp xếp :", () => {
    expect(sortLongestString(['Nhalassk sak qkwo kask qo', 'aslk qmw', 't qmw mqwm as samkqmw kmqwem'])).toEqual(["t qmw mqwm as samkqmw kmqwem","Nhalassk sak qkwo kask qo","aslk qmw"]);
})

test("Sắp xếp :", () => {
    expect(sortLongestString(['tla wlkql', 'the laalsl qwl xxsal qwl', 'kamskm qlwlas mqwm'])).toEqual(["the laalsl qwl xxsal qwl","kamskm qlwlas mqwm","tla wlkql"]);
})

test("Sắp xếp :", () => {
    expect(sortLongestString(['alas skam wnqn nalsl qw', 'asm w qak qwl', 'amsk mqkw  asmom wqmka k kqw', 'asmkm qwm jasm dls oqkwo k'])).toEqual(["amsk mqkw  asmom wqmka k kqw","asmkm qwm jasm dls oqkwo k","alas skam wnqn nalsl qw","asm w qak qwl"]);
})

test("Sắp xếp :", () => {
    expect(sortLongestString(['qnw asm qwplepa qw amk mwnq', 'asl lasl', 'ams qkwm palsp q,as qwl, a'])).toEqual(["qnw asm qwplepa qw amk mwnq","ams qkwm palsp q,as qwl, a","asl lasl"]);
})