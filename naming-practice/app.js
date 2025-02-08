function getSumNumbers(numbers) {
  let sum = 0;
  numbers.forEach(item => {
    sum += item;
  });
  return sum;
}

let nums = [10000, 20000, 30000];
console.log(getSumNumbers(nums));