Sharkbert Study Group
Sliding Window Pattern
<h4>The sliding window pattern is a useful design pattern when we want to find a continuous subset of data that matches some conditions.</h4>
<h4>We can imagine a "Window" that we can look through to see a smaller portion of the data. If we "slide" that window across our data, it exposes a continuous subset of the data with a constant length.</h4>

Given this array: [0,1,4,3,5,6,4,3,2,3,4,5]<br>
Window length: 5

[**0,1,4,3,5**,6,4,3,2,3,4,5]<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5]<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5]<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5]<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5]<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5]<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5]<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**]<br>

If we are searching for the continuous sub-array of length 5 with the largest sum inside this array, we now can easily see each of the subarrays we need to evaluate.

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5]<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6]<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4]<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3]<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2]<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3]<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4]<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5]<br>

Then, we can evaluate their sums:

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] => sum => 22<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] => sum => 21<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] => sum => 20<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] => sum => 18<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] => sum => 16<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] => sum => 17<br>

And easily identify which of them has the greatest sum<br>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] => sum => 22 => **Largest Sum = 22**<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] => sum => 21<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] => sum => 20<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] => sum => 18<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] => sum => 16<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] => sum => 17<br>

In Javascript:
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

This algorithm works, but it is slow O(n^2) because we have to look at each element of each subarray each time the window slides.  What if we didn't have to keep looking at data weve already seen?<br><br>


Here is the same array from earlier with its windows highlighted<br>
[**0,1,4,3,5**,6,4,3,2,3,4,5]<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5]<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5]<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5]<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5]<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5]<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5]<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**]<br>