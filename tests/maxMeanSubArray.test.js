const {maxMeanSubArray, maxMeanSubArraySlow} = require('../solutions/maxMeanSubArray');

test('Slow Algo: edge condition: window larger than input array', ()=>{
    expect(maxMeanSubArraySlow([1,2,3,4,5], 7)).toBeNull();
})
test('Slow Algo: edge condition: window size less than 1', ()=>{
    expect(maxMeanSubArraySlow([1,2,3,4,5], 0)).toBeNull();
})
test('Slow Algo: edge condition: array length less than 1', ()=>{
    expect(maxMeanSubArraySlow([], 1)).toBeNull();
})


test('Slow Algo: edge condition: window larger than input array', ()=>{
    expect(maxMeanSubArray([1,2,3,4,5], 7)).toBeNull();
})
test('Slow Algo: edge condition: window size less than 1', ()=>{
    expect(maxMeanSubArray([1,2,3,4,5], 0)).toBeNull();
})
test('Slow Algo: edge condition: array length less than 1', ()=>{
    expect(maxMeanSubArray([], 1)).toBeNull();
})