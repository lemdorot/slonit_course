let testObject = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

function getSum (object) {
	let sum = 0;
	for (let key in object) {
		// ключи
		// alert( key );
		// значения ключей
		// alert( user[key] );
		if(typeof object[key] === "number") {
			sum += object[key]
		}
	}
	return sum;
}

function getObjectKeys (object) {
	let keys = [];
	for (let key in object) {
		keys.push(key);
	}
	return keys.sort((a, b) => {
		if (a.toLowerCase() > b.toLowerCase()) {
			return -1;
		}
		if (a.toLowerCase() < b.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}

console.log("getSum");
console.log(getSum(testObject));
console.log("getObjectKeys");
console.log(getObjectKeys(testObject));