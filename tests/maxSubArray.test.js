//change later to ../problems
const maxSubArray = require('../solutions/maxSubArray').maxSubArray;

test('edge condition: window larger than input array', ()=>{
    expect(maxSubArray([1,2,3,4,5], 7)).toBeNull();
})
test('edge condition: window size less than 1', ()=>{
    expect(maxSubArray([1,2,3,4,5], 0)).toBeNull();
})
test('edge condition: array length less than 1', ()=>{
    expect(maxSubArray([], 1)).toBeNull();
})
