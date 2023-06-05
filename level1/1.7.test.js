const sortArrayAlphabetical = require("./1.7");

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAlphabetical(["Blue", "Humpback", "Beluga"])).toEqual(['Beluga', 'Blue', 'Humpback']);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAlphabetical([1, 44, 200, 80])).toEqual([1, 200, 44, 80]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAlphabetical(["SKa", "Alpha", "Vaks"])).toEqual(['Alpha', 'SKa', 'Vaks']);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAlphabetical([1, 50, 2000, 4000])).toEqual([1, 2000, 4000, 50]);
})

test("Sắp xếp mảng: ", () => {
    expect(sortArrayAlphabetical([12, 256, 245])).toEqual([12, 245, 256]);
})