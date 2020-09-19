Sharkbert Study Group
Sliding Window Pattern
<h3>The sliding window pattern is a useful design pattern when we want to find a continuous subset of data that matches some conditions.</h3>
<h3>We can imagine a "Window" that we can look through to see a smaller portion of the data. If we "slide" that window across our data, it exposes a continuous subset of the data with a constant length.</h3>

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

<h3>If we are searching for the continuous sub-array of length 5 with the largest sum inside this array, we now can easily see each of the subarrays we need to evaluate.</h3>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5]<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6]<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4]<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3]<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2]<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3]<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4]<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5]<br>

<h3>Then, we can evaluate their sums:</h3>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] => sum => 22<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] => sum => 21<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] => sum => 20<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] => sum => 18<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] => sum => 16<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] => sum => 17<br>

<h3>And easily identify which of them has the greatest sum</h3><br>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] => sum => 13<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] => sum => 19<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] => sum => 22 => **Largest Sum = 22**<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] => sum => 21<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] => sum => 20<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] => sum => 18<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] => sum => 16<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] => sum => 17<br>

<h3>In Javascript:</h3>

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


<h3>This algorithm works, but it is slow O(n^2) because we have to look at each element of each subarray each time the window slides.  What if we didn't have to keep looking at data we have already seen?</h3><br><br>


<h4>Here is the same array from earlier, displayed with its windows</h4><br>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] <br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] <br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] <br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] <br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] <br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] <br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] <br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] <br>

<h4>Notice that in each progressive step, all of the elements except the first stay in the array as we move to the next window.</h4> <br> 

[0,1,4,3,5]<br>
__[1,4,3,5,6]<br>
____[4,3,5,6,4]<br>

<h4>We can leverage this by looking only at what is entering and exiting the subarray when we make our calculations.  Lets keep track of the current sum of the subarray as we go through the array, and add any new values that enter it, and subtract any values that leave it.</h4><br>

[**0,1,4,3,5**,6,4,3,2,3,4,5] => [0,1,4,3,5] => 0 entered array, 0 left array => currentSum += 0 | currentSum = 13<br>
[0,**1,4,3,5,6**,4,3,2,3,4,5] => [1,4,3,5,6] => 6 entered array, 0 left array => currentSum += 6 | currentSum = 19<br>
[0,1,**4,3,5,6,4**,3,2,3,4,5] => [4,3,5,6,4] => 4 entered array, 1 left array => currentSum += 3 | currentSum = 22<br>
[0,1,4,**3,5,6,4,3**,2,3,4,5] => [3,5,6,4,3] => 3 entered array, 4 left array => currentSum += -1 | currentSum = 21<br>
[0,1,4,3,**5,6,4,3,2**,3,4,5] => [5,6,4,3,2] => 2 entered array, 3 left array => currentSum += -1 | currentSum = 20<br>
[0,1,4,3,5,**6,4,3,2,3**,4,5] => [6,4,3,2,3] => 3 entered array, 5 left array => currentSum += -2 | currentSum = 18<br>
[0,1,4,3,5,6,**4,3,2,3,4**,5] => [4,3,2,3,4] => 4 entered array, 6 left array => currentSum += -2 | currentSum = 16<br>
[0,1,4,3,5,6,4,**3,2,3,4,5**] => [3,2,3,4,5] => 5 entered array, 4 left array => currentSum += 1 | currentSum = 17<br>

<h4>Right now this does not look like a huge improvement, but what if our window was 10 elements long, or 100, or 1000?  Instead of doing 1000 operations for each window, now we only do 2. </h4>

<h4>This is the power of the sliding window pattern</h4>
```
<h3>Assignment</h3>
Now its time to try implementing this ourselves.
<ol>
	<li>Clone this repo</li>
	<li><strong><i>npm install</i></strong></li>
	<li>Open the problems folder, and start with the maxSubArray.js file</li>
	<li>Work through the base implementation O(n^2)</li>
	<li>Try to figure out the O(n) algorithm described here on your own</li>
	<li>You can test your code by running <strong><i>npm run test</i></strong></li>
	<li>Once your code passes all the tests, try uncommenting the timers at the bottom of the problem set files, then run them with <strong><i>node -filename-</i></strong>
</ol>
```