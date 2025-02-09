let testString = "с новым годом!";

function getStringToUpperCaseFirstLetter(str) {
	let newString = '';

	newString = str[0].toUpperCase() + str.slice(1);
	return newString;
}

console.log('getStringToUpperCaseFirstLetter');
console.log(getStringToUpperCaseFirstLetter(testString));

let testBigString = 'Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.'

function getSmallString(str, maxlength = 40) {
	if (str.length <= maxlength) return str;
	let regex = /[ :;!?\.]/g;
	regex.lastIndex = maxlength;
	let result = regex.exec(str);

	return str.slice(0, result.index) + "...";
}

console.log('getSmallString');
console.log(getSmallString(testBigString))

let strX = 'годом!', strY = 'с новым годом!';

function isSubstring(strX, strY) {
	if (strX && strX.includes(strY)) {
		return strX.includes(strY)
	} else if (strY && strY.includes(strX)) {
		return strY.includes(strX);
	} else {
		return false;
	}
}

console.log('isSubstring');
console.log(isSubstring(strX, strY))