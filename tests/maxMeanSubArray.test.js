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
test('Slow Algo: [0,1,2,3,4,5,6,7,8,9,10],5', ()=>{
    expect(maxMeanSubArraySlow([0,1,2,3,4,5,6,7,8,9,10],5)).toBeCloseTo(8)
})
test('Slow Algo: [0,1,2,3,-5,6,-7,8,-10],5', ()=>{
    expect(maxMeanSubArraySlow([0,1,2,3,-5,6,-7,8,-10],5)).toBeCloseTo(1.4)
})



test('Fast Algo: edge condition: window larger than input array', ()=>{
    expect(maxMeanSubArray([1,2,3,4,5], 7)).toBeNull();
})
test('Fast Algo: edge condition: window size less than 1', ()=>{
    expect(maxMeanSubArray([1,2,3,4,5], 0)).toBeNull();
})
test('Fast Algo: edge condition: array length less than 1', ()=>{
    expect(maxMeanSubArray([], 1)).toBeNull();
})
test('Fast Algo: [0,1,2,3,4,5,6,7,8,9,10],5', ()=>{
    expect(maxMeanSubArray([0,1,2,3,4,5,6,7,8,9,10],5)).toBeCloseTo(8)
})

test('Fast Algo: [0,1,2,3,-5,6,-7,8,-10],5', ()=>{
    expect(maxMeanSubArray([0,1,2,3,-5,6,-7,8,-10],5)).toBeCloseTo(1.4)
})
