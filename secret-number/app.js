function getSecretNumber() {
	function getRandomArbitrary(min, max) {
		return  Math.floor(Math.random() * (max - min) + min);
	}

	let numberMin = 1;
	let numberMax = 100;
	let secretNumber = getRandomArbitrary(numberMin, numberMax);
	let checkedNumber = Math.ceil((numberMax - numberMin) / 2)
	
	while (true) {
		debugger;
		console.log(`Компьютер 2: Пробую число ${checkedNumber}`)
		if(checkedNumber == secretNumber) {
			console.log('Компьютер 1: Угадал!');
			break;
		}else if(checkedNumber > secretNumber) {
			console.log('Компьютер 1: Меньше.\n');
			numberMax = checkedNumber;
			checkedNumber = Math.ceil((numberMax - numberMin) / 2) + numberMin
		}else  {
			console.log('Компьютер 1: Больше.\n');
			numberMin = checkedNumber;
			checkedNumber = Math.ceil((numberMax - numberMin) / 2) + numberMin;
		}
	}
}

getSecretNumber();