let arrTestSlice = ["t", "e", "s", "t"];

function mySlice(arr, start, end = arr.length) {
	var newArray = [];

	let startIndex = start < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
	let endIndex = end < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length);

	for (let i = startIndex; i < endIndex; i++) {
			newArray.push(arr[i]);
	}

	return newArray;
}

console.log("slice");
console.log( arrTestSlice.slice(1, 3) ); 
console.log( arrTestSlice.slice(-2) ); 
console.log("mySlice");
console.log(mySlice(arrTestSlice, 1, 3));
console.log(mySlice(arrTestSlice, -2));

const arrTestIndexOf = ['ant', 'bison', 'camel', 'duck', 'bison'];

function myIndexOf(arr, item, from = 0) {
	let startIndex = from < 0 ? Math.max(arr.length + from, 0) : from;

	for (let i = startIndex; i < arr.length; i++) {
		if (arr[i] === item) {
			return i;
		}
	}

	return -1;
}

console.log("indexOf");
console.log( arrTestIndexOf.indexOf('bison') ); 
console.log( arrTestIndexOf.indexOf('bison', 2)); 
console.log("myIndexOf");
console.log( myIndexOf(arrTestIndexOf,'bison') ); 
console.log( myIndexOf(arrTestIndexOf,'bison', 2)); 

const arrTestIncludes = ['cat', 'dog', 'bat'];

function myIncludes(arr, item, from = 0) {
	let startIndex = from < 0 ? Math.max(arr.length + from, 0) : from;

	for (let i = startIndex; i < arr.length; i++) {
		if (arr[i] === item) {
			return true;
		}
	}

	return false;
}

console.log("includes");
console.log( arrTestIncludes.includes('cat') ); 
console.log( arrTestIncludes.includes('at')); 
console.log("myIncludes");
console.log( myIncludes(arrTestIncludes,'cat') ); 
console.log( myIncludes(arrTestIncludes,'at', 2)); 