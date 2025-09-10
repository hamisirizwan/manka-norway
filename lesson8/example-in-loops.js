const numbers = [30 , 50, 70]


// global variable that can be accessed anywhere 
let total = 0

for(let i = 0; i < numbers.length;i++){

    // scope only accessible within this iteration
    total += numbers[i]
}


console.log(total)