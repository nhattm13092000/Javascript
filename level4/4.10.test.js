const findLargestOverlap = require("./4.10");

test("The length of the longest increasing subsequence of the numbers", () => {
    expect(
    findLargestOverlap(["abcd", "cdef", "efgh"], 2)
    ).toEqual(["abcd", "cdef"]);
  });

  test("The length of the longest increasing subsequence of the numbers", () => {
    expect(
    findLargestOverlap(["abcde", "cdefg", "efghi", "ghijk"], 3)
    ).toEqual(["abcde", "cdefg"]);
  });


  test("The length of the longest increasing subsequence of the numbers", () => {
    expect(
    findLargestOverlap(["abc", "def", "ghi", "jkl"], 1)
    ).toEqual(null);
  });


  test("The length of the longest increasing subsequence of the numbers", () => {
    expect(
    findLargestOverlap(["abcd", "cdefg", "efgh", "ghij"], 2)
    ).toEqual(["abcd", "cdefg"]);
  });

  test("The length of the longest increasing subsequence of the numbers", () => {
    expect(
    findLargestOverlap(["abcdefgh", "ijklmnop", "qrstuvwxyz"], 4)
    ).toEqual(null);
  });