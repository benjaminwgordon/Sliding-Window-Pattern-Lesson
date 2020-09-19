//Slow Version (O(n^2))
const maxSubArraySlow = function(arr,k){
    if (arr.length < k || arr.length < 1 || k < 1) {return null;}
    let max = arr.slice(0,k).reduce((a,b)=> a + b,0);
    for (let i = 0; i <= arr.length - k; i++){
        let current = arr.slice(i,i+k).reduce((a,b)=> a + b,0);
        max = current > max ? current : max;
    }
    return max;
}

//Fast Version O(n)
const maxSubArray = function(arr,k){
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



module.exports = {
    maxSubArraySlow,
    maxSubArray
}