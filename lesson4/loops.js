// For

// for(initialization ; condition ; iteration){
//     // execution
// }

// initialization
// creation of a variable to start the counter


// condition - comparison operators - > , <
// at what point should the iteraton stop from

// iteration
// increamenting or decrementing the counter

// example of repeating something 10 times

for(let i = 1; i < 10; i++){
    console.log("hello" , i)
} 

// example to decrement
for(let i = 10; i > 0; i--){
    console.log("hello" , i)
} 


// while loop example
let i = 0

while(i > 0){
    // execution
 console.log("hello" , i)
    // iteration

    i--
}

do{
        // execution

        if(i === 0){
            i = 10
        }
        
 console.log("hello" , i)
    // iteration

    i--
}while(i > 0)