/**
 * Write a program that takes a string as input and returns the number of words in the string
 * @param {string} str
 * @return sort list in alphabetical order
 */

function numberofWord(string){
    string = string.trim();
    const arr = string.split(" ");
  
    return arr.length;
}

module.exports = numberofWord;