//change later to ../problems
const maxSubArray = require('../solutions/maxSubArray').maxSubArray;
const maxSubArraySlow = require('../solutions/maxSubArray').maxSubArraySlow;

test('Slow Algo: edge condition: window larger than input array', ()=>{
    expect(maxSubArraySlow([1,2,3,4,5], 7)).toBeNull();
})
test('Slow Algo: edge condition: window size less than 1', ()=>{
    expect(maxSubArraySlow([1,2,3,4,5], 0)).toBeNull();
})
test('Slow Algo: edge condition: array length less than 1', ()=>{
    expect(maxSubArraySlow([], 1)).toBeNull();
})
test("Slow Algo: [-5,5,-5,5],2", ()=>{
    expect(maxSubArraySlow([-5,5,-5,5],2)).toBe(0);
})
test("Slow Algo: [1,6,3,4,6,1,24,6,123,6543,1,432,123,5,543,2345,2431],6", ()=>{
    expect(maxSubArraySlow([1,6,3,4,6,1,24,6,123,6543,1,432,123,5,543,2345,2431],6)).toBe(7647);
})
test("Slow Algo: [1,6,3,4,6,1,24,6,123,-6543,1,432,123,5,-543,2345,-2431],6", ()=>{
    expect(maxSubArraySlow([1,6,3,4,6,1,24,6,123,-6543,1,432,123,5,-543,2345,-2431],6)).toBe(2363);
})


//tests for fast version
test('Fast Algo: edge condition: window larger than input array', ()=>{
    expect(maxSubArray([1,2,3,4,5], 7)).toBeNull();
})
test('Fast Algo: edge condition: window size less than 1', ()=>{
    expect(maxSubArray([1,2,3,4,5], 0)).toBeNull();
})
test('Fast Algo: edge condition: array length less than 1', ()=>{
    expect(maxSubArray([], 1)).toBeNull();
})
test("Fast Algo: [-5,5,-5,5],2", ()=>{
    expect(maxSubArray([-5,5,-5,5],2)).toBe(0);
})
test("Fast Algo: [1,6,3,4,6,1,24,6,123,6543,1,432,123,5,543,2345,2431],6", ()=>{
    expect(maxSubArray([1,6,3,4,6,1,24,6,123,6543,1,432,123,5,543,2345,2431],6)).toBe(7647);
})
test("[1,6,3,4,6,1,24,6,123,-6543,1,432,123,5,-543,2345,-2431],6", ()=>{
    expect(maxSubArray([1,6,3,4,6,1,24,6,123,-6543,1,432,123,5,-543,2345,-2431],6)).toBe(2363);
})
