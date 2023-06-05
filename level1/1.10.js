/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'
 * @param {string} str
 * @return number of string contain letter "a"
 */

const strContain = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].includes("a")){
            count = count + 1;
        }
    }
    return count;
}

module.exports = strContain;