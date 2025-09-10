function sumOfNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  console.log(total);
}

sumOfNumbers([2,3])
sumOfNumbers([2,3 , 50 , 54])
