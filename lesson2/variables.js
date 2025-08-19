// How to define variables

// keyword - var , const or let

// var - an older version - scoping

// const - retricts you from later changing the value

// let - variables value will change

const myNumber = "hello"

console.log(myNumber)

// typeof - allows us to assert the datatype of a variable

console.log(typeof myNumber)

const isMale = false

console.log(typeof isMale)

const myPoints = 40.33

console.log(typeof myPoints)

let name = null;

console.log(typeof name)


// Type casting - changing types

// number - string - number


// DERIVED DATATYPES

// Objects - a key value pair
const myFirstObject = {
    name:"Riz",
    accupation:"Dev",
    age: 16,
    head:{
        eyes:2,
        color: "black"
    },
    isMale : true,
    speak: function (){
        console.log("hello")
    }
}


// arrays -list of iterable values
const cars = ["volvo", "mazda", "toyota"]


// functions

const myFunction = function sayHello(){

    console.log("hello")

}

// operators

// assignment operator
// =
// const name = "James"
// +=

let x = 5

console.log(x)

x = x + 2
 
console.log(x)
// arithmetic operators

// add +
// sub -
// multiplication *
// division /
// modulas %

// comparison - boolean

// logical - boolean & || ??
