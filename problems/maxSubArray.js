/* Given an array of integers arr and a positive integer k, find the series of elements of arr with length k with the largest sum */


// first, just try to get an implementation that works
const maxSubArraySlow = function(arr, k) {
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b,0);
    for (let i = 0; i <= arr.length - k; i++){
        let current = arr.slice(i,i+k).reduce((a,b)=> a + b,0);
        max = current > max ? current : max;
    }
    return max;
}

// now, lets think about how we can do this faster
const maxSubArray = function(arr,k) {
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b,0);
    let current = max;
    for (let i = 0; i <= arr.length - k; i++){
        current += arr[i+k];
        current -= arr[i];
        max = current > max ? current : max;
    }
    return max;
}

// when you are ready, uncomment this function call and run this file with Node to see the difference!

require('../timers').timeMaxSubArray(maxSubArraySlow, maxSubArray);

module.exports = {
    maxSubArraySlow,
    maxSubArray
}