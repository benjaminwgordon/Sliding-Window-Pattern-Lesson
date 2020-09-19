/* Given an array of integers arr and a positive integer k, find the series of elements of arr with length k with the largest mean */

// Naive Solution O(n^2)
const maxMeanSubArraySlow = (arr, k) => {
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b/k,0);
    for (let i = 0; i < arr.length - k + 1; i++){
        let current = arr.slice(i,i+k).reduce((a,b)=> a + b/k,0);
        max = current > max ? current : max;
    }
    return max;
}

// Optimized Solution O(n)
const maxMeanSubArray = function(arr,k){
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b/k,0);
    let current = max;
    for (let i = 0; i <= arr.length - k; i++){
        current *= k;
        current += arr[i+k];
        current -= arr[i];
        current /= k;
        max = current > max ? current : max;
    }
    return max;
}

module.exports = {
    maxMeanSubArraySlow,
    maxMeanSubArray
}