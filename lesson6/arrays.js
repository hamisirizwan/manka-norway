const myArray = [ 1, 2 , 3 , 4 ]

// what arrays are


// creating arrays

const cars = ["mazda", "toyota", "honda" , "mercedes" ]

const whereTheMoneyIs = "mercedes"
// const cars = new Array("Mazda")

// Class and Objects - a class is a blueprint to create objects - object is an instance of a class


// OPERATING ON ARRAYS

//  - accessing items of an array - 

console.log(cars[cars.length - 1])

// knowing the capacity/length
console.log(cars.length)


// - looping over arrays

for(let i = 0 ; i < cars.length; i++){

    if(whereTheMoneyIs === cars[i]){
console.log(`we have found the thief at ${cars[i]}`)
    }
    
}


