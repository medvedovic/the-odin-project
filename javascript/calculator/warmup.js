function my_max(nums) {
	var out = 0;
	for (var i = 0; i < nums.length; i++) {
		if(nums[i]>out) {
			out = nums[i];
		}
	}
	return out;
}

function vowel_count(txt) {
	var arr = txt.match(/[a,e,i,o,u,y]/g);
	return arr.length;
}

function reverse(input) {
	var output = "";
	for (var i = 0; i < input.length; i++) {
		output += input[input.length-i-1];
	}
	return output;
}

console.log(my_max([1,56,2,3,-1,0]));
var s = "Save your solutions to Github and submit them for inclusion here when you're finished!";
console.log(vowel_count(s));
s = "This is a string!";
console.log(reverse(s));