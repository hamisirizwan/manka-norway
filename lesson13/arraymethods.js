// 

const students = ["James", "Caleb", "Maina", "Swaleh"]

// traversion/looping

// for(let i = 0; i < students.length; i++){
//    console.log(students[i])
// }

// forEach
students.forEach((student)=>{
console.log(student)
})

// reverse
console.log(students.reverse())

// copying an array

// const newArray = []

// for(let i = 0; i < students.length; i++){

//     newArray[newArray.length] = `Mr. ${students[i]}`

// }

// console.log(newArray)

const newArray = students.map((std)=>{
      return `Mr. ${std}`
})


// adding items to an array
// push - adds an item at the end of an array

students.push("Amaan")

console.log(students)

// unshift - add an item at the beginning of an array
students.unshift("Riz")

console.log(students)

// removing items from an array
students.pop()

console.log(students)

// unshift - add an item at the beginning of an array
students.shift()

console.log(students)

// filter , find , reduce