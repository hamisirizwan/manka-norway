// 

const pls = ["Javascript", "Python", "Java", "C", "C++" ,"GO", "Rust"]

// loop - for loop - forEach

// pls.forEach((pl , i)=>{
//     // access to each item

//     console.log(pl)
// })

// map
const modifiedPls = pls.map((pl , i)=>{
  return `${i + 1} : ${pl}`
})

console.log(modifiedPls)

// push , unshift , pop , shift

// finding/searching items in an array

const teachers = [
    {
        name:"James",
        class:3
    },
        {
        name:"Obadiah",
        class:8
    },
        {
        name:"Marion",
        class:5
    },
            {
        name:"Hope",
        class:3
    },
            {
        name:"Alex",
        class:8
    }
]

// const easiestLanguage = pls.find((pl)=>{
//     return pl === "Javascript"
// })


// console.log(easiestLanguage)


const class8teacher = teachers.find((t)=>{
   return t.class === 8
})

// console.log(class8teacher)

// filtering items of an array


const class8teachers = teachers.filter((t)=>{
   return t.class === 8
})

console.log(class8teachers)


// reduce - combines values into one - calculate totals

const results = [
    {
        name:"Mark",
        marks:200
    },
       {
        name:"Roshell",
        marks:385
    },
       {
        name:"Halima",
        marks:450
    }
]

let total = results.reduce((acc , student)=>{
    return acc + student.marks
}, 0)

// for(let i = 0; i < results.length; i++){
//      total = total + results[i].marks
// }

console.log("\n\ntotal" , total)

// sort

results.sort((a , b)=>{
    return b.marks - a.marks
})

console.log(results)
