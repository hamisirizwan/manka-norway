// DataTypes
// string , number , boolean , objects , functions , arrays

// Js is a high level PL

// JS was made in CPP

// CPP IS AN OOP

// strings - string methods

const myName = "Rizwan Hamisi"

console.log(myName.toUpperCase())
console.log(myName.trim())
console.log(myName.charAt(0))
console.log(myName.split(" "))

// arrays - array methods

const cars = ["volvo", "mercedes", "mazda"]

// - arrays are collections - iterable 
// - iterate through them
cars.forEach((car)=>{
  console.log(`this car is : ${car}`)
})
// - sort
// - add items
cars.push("Toyota")
cars.unshift("Volkswagon")
console.log(cars)
// - remove items
cars.pop()
cars.shift()
console.log(cars)
// - create new collections(arrays)
const carSenteses = cars.map((car)=>{
    return {
        name:car
    }
})

console.log("----------------")
console.log(carSenteses)

// filter


// find


// reduce - getting totals
const marks = [
    {
        name:"James",
        points: 60
    },
       {
        name:"Alex",
        points: 30
    }
]

const totalPoint = marks.reduce((acc , item)=>{
   return acc + item.points
} , 0)


console.log(totalPoint)

// functions are values

// function add(){}




