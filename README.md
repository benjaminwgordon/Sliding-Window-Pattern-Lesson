
  

# Sharkbert Study Group

   ## Sliding Window Pattern
<h4>The sliding window pattern is a useful design pattern when we want to find a continuous subset of data that matches some conditions.  <h/4>

<h4>We can imagine a "Window" that we can look through to see a smaller portion of the data.  If we "slide" that window across our data, it exposes a continuous subset of the data with a constant length.<h/4>

Given this array: [0,1,4,3,5,6,4,3,2,3,4,5] 
Window length: 5

[<mark>0,1,4,3,5</mark>,6,4,3,2,3,4,5]
[0,<mark>1,4,3,5,6</mark>,4,3,2,3,4,5]
[0,1,<mark>4,3,5,6,4</mark>,3,2,3,4,5]
[0,1,4,<mark>3,5,6,4,3</mark>,2,3,4,5]
[0,1,4,3,<mark>5,6,4,3,2</mark>,3,4,5]
[0,1,4,3,5,<mark>6,4,3,2,3</mark>,4,5]
[0,1,4,3,5,6,<mark>4,3,2,3,4</mark>,5]
[0,1,4,3,5,6,4,<mark>3,2,3,4,5</mark>]

<h4>If we are searching for the continuous sub-array of length 5 with the largest sum inside this array, we now can easily see each of the subarrays we need to evaluate.</h4>  

[<mark>0,1,4,3,5</mark>,6,4,3,2,3,4,5] => [0,1,4,3,5]
[0,<mark>1,4,3,5,6</mark>,4,3,2,3,4,5] => [1,4,3,5,6]
[0,1,<mark>4,3,5,6,4</mark>,3,2,3,4,5] => [4,3,5,6,4]
[0,1,4,<mark>3,5,6,4,3</mark>,2,3,4,5] => [3,5,6,4,3]
[0,1,4,3,<mark>5,6,4,3,2</mark>,3,4,5] => [5,6,4,3,2]
[0,1,4,3,5,<mark>6,4,3,2,3</mark>,4,5] => [6,4,3,2,3]
[0,1,4,3,5,6,<mark>4,3,2,3,4</mark>,5] => [4,3,2,3,4]
[0,1,4,3,5,6,4,<mark>3,2,3,4,5</mark>] => [3,2,3,4,5]

<h4>Then, we can evaluate their sums: </h4>

[<mark>0,1,4,3,5</mark>,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13
[0,<mark>1,4,3,5,6</mark>,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19
[0,1,<mark>4,3,5,6,4</mark>,3,2,3,4,5] => [4,3,5,6,4] => sum => 22
[0,1,4,<mark>3,5,6,4,3</mark>,2,3,4,5] => [3,5,6,4,3] => sum => 21
[0,1,4,3,<mark>5,6,4,3,2</mark>,3,4,5] => [5,6,4,3,2] => sum => 20
[0,1,4,3,5,<mark>6,4,3,2,3</mark>,4,5] => [6,4,3,2,3] => sum => 18
[0,1,4,3,5,6,<mark>4,3,2,3,4</mark>,5] => [4,3,2,3,4] => sum => 16
[0,1,4,3,5,6,4,<mark>3,2,3,4,5</mark>] => [3,2,3,4,5] => sum => 17

<h4>And easily identify which of them has the greatest sum</h4>

[<mark>0,1,4,3,5</mark>,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13
[0,<mark>1,4,3,5,6</mark>,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19
[0,1,<mark>4,3,5,6,4</mark>,3,2,3,4,5] => [4,3,5,6,4] => sum => 22
[0,1,4,<mark>3,5,6,4,3</mark>,2,3,4,5] => [3,5,6,4,3] => sum => 21 => greatest sum
[0,1,4,3,<mark>5,6,4,3,2</mark>,3,4,5] => [5,6,4,3,2] => sum => 20
[0,1,4,3,5,<mark>6,4,3,2,3</mark>,4,5] => [6,4,3,2,3] => sum => 18
[0,1,4,3,5,6,<mark>4,3,2,3,4</mark>,5] => [4,3,2,3,4] => sum => 16
[0,1,4,3,5,6,4,<mark>3,2,3,4,5</mark>] => [3,2,3,4,5] => sum => 17

<h4> In pseudocode: </h4>

```
// Returns the largest sum of any continuous subarray of arr with length k
const  maxSubArraySlow = function(arr,k){
	//check for invalid edge case inputs
	if (arr.length < k || arr.length < 1 || k < 1) {return  null;}
	
	//get a starting maximum value
	let  max = arr.slice(0,k).reduce((a,b)=>  a + b,0);
	
	//for each subarray, check its sum and if it is the largest, change max
	for (let  i = 0; i <= arr.length - k; i++){
		let  current = arr.slice(i,i+k).reduce((a,b)=>  a + b,0);
		max = current > max ? current : max;
	}
	return  max;
}
```
<h4>This algorithm works, but it is slow -- O(n^2)</h4>