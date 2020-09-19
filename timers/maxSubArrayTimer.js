const now = require('performance-now');

// return array with specified length filled with random integers 0-999
const randomArr = length => {
    const out = [];
    for (let i = 0; i < length; i++){
        out.push(Math.floor(Math.random() * 1000))
    }
    return out;
}

const testRuntime = (func, args) => {
    const start = now();
    func(...args);
    const end = now();
    const runtime = (end - start).toFixed(3)
    return runtime
}

const testMaxSubArray = (func1, func2) => {
    console.log("Testing maxSubArray() implementations")
    const testArrays = []
    for (let i = 1; i < 6; i++){
        testArrays.push(randomArr(Math.pow(10,i)))
    }
    const data = []
    for (let i = 0; i < testArrays.length; i++){
        const arr = testArrays[i];
        const subArrayLength = Math.floor(arr.length / 10);
        data.push({
            'arr length': arr.length, 
            'subArray length': subArrayLength, 
            'slow algo runtime': Number(testRuntime(func1, [arr, arr.length / 10])), 
            'fast algo runtime': Number(testRuntime(func2, [arr, arr.length / 10]))
        });
    }
    console.table(data);
}

module.exports = testMaxSubArray;