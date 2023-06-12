/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
 * @param {array} []
 * @return the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
 */

function findLargestOverlap(strings, k) {
  let result = null;
  let maxOverlap = 0;
  const substringMap = {};

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];

    for (let j = 0; j <= string.length - k; j++) {
      const a = string.substring(j, j + k);

      if (substringMap[a]) {
        substringMap[a].push(i);
      } else {
        substringMap[a] = [i];
      }

      if (substringMap[a].length >= 2) {
        const currentOverlap = a.length;
        if (currentOverlap > maxOverlap) {
          maxOverlap = currentOverlap;
          result = [strings[substringMap[a][0]], strings[substringMap[a][1]]];
        }
      }
    }
  }

  return result;
}


module.exports = findLargestOverlap;