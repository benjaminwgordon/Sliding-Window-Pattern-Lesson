/* Given an array of integers arr and a positive integer k, find the series of elements of arr with length k with the largest mean */

// first, just try to get an implementation that works
const maxMeanSubArraySlow = (arr,k) => {
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b/k,0);
    for (let i = 0; i < arr.length - k + 1; i++){
        let current = arr.slice(i,i+k).reduce((a,b)=> a + b/k,0);
        max = current > max ? current : max;
    }
    return max;
}

// now, lets think about how we can do this faster
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

// when you are ready, uncomment this function call and run this file with Node to see the difference!
//require('../timers').timeMaxMeanSubArray(maxMeanSubArraySlow, maxMeanSubArray);