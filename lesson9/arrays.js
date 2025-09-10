const arr = [
    {
        name:"Mangoes",
        status:{
            bad:3,
            ripe:3
        }
    },
       {
        name:"Apples",
             status:{
            bad:3,
            ripe:5
        }
    },
       {
        name:"Bananas",
            status:{
            bad:3,
            ripe:5
        }
    },
       {
        name:"Oranges",
            status:{
            bad:3,
            ripe:5
        }
    }
]

// how do we get apples

// console.log(arr[2])

// // how many fruits
// console.log(arr.length)


let total = 0
for(let i = 0; i < arr.length; i++){

    total = total + arr[i].status.ripe

    // console.log(arr[i].amount)
} 

console.log(total)