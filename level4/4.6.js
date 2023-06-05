/**
 * Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list.
 * @param {array} []
 * @return the maximum product of any three distinct elements in the list.
 */

const maxProductThreeNum = (arr) => {
    let maxProduct = 0;
    for(i = 0; i < arr.length - 2; i++){
        for(j = i + 1; j < arr.length - 1; j++){
            for(k = j + 1; k < arr.length; k++){
                let product = arr[i]*arr[j]*arr[k];
                if(product > maxProduct){
                    maxProduct = product
                }
            }
        }
    }

    return maxProduct;
}

module.exports = maxProductThreeNum;