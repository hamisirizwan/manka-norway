const numbers = [30 , 50, 60 , 20, 12 , 63, 76]

let sum = 0 

for(let i = 0; i < numbers.length;i++){

    const theCurrentNumber = numbers[i]

    sum = sum + theCurrentNumber
}

console.log(sum)