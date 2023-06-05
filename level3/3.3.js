/**
 * Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
 * @param {array} []
 * @return the longest increasing subsequence of the numbers.   
 */

const lengthOfLIS = (nums) => {
    const len  = nums.length
    if(len == 1) return 1;
     
     const arr = []
     arr.push(nums[0])
    
    for(let i =0;i<len;i++){
        
        if(arr.at(-1)<nums[i]){
            arr.push(nums[i])
        }else{
           for(let j=0;j<arr.length;j++){
               if(arr[j]>=nums[i]){
                   arr[j]=nums[i];
                   break;
               }
           } 
        }
    }
    return arr.length
}

module.exports = lengthOfLIS;