const findLongestWord = require("./2.2");

test("Từ dài nhất: ", () => {
    expect(findLongestWord(["ansj", "askdo", "qwjei", "jiasodo", "aksdk", "sajjqwuj", "kaiskkoqasd", "qnwn", "asmqmqw"])).toEqual("kaiskkoqasd");
})

test("Từ dài nhất: ", () => {
    expect(findLongestWord(["ansj", "askdo", "qwjei", "jiasadqw", "asoqw", "asdkmqkw"])).toEqual("jiasadqw");
})


test("Từ dài nhất: ", () => {
    expect(findLongestWord(["Nhat", "di", "an", "com"])).toEqual("Nhat");
})


test("Từ dài nhất: ", () => {
    expect(findLongestWord(["nghi", "ngoi", "thoi", "nao"])).toEqual("ngoi");
})

test("Từ dài nhất: ", () => {
    expect(findLongestWord(["Nhat an", "di choi", "thoi nao"])).toEqual("thoi nao");
})
