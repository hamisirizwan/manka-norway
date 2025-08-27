// creating objects

const myFirstObj = {
    name:"Riz",  // string
    country:"Kenya", //string
    first_name : "James",
    age:15, //number
    isMale:true, //boolean
    head:{
        eyes:2,
        hair:"black"
    },  // object
    phones:["samsung", "iphone"] //array
}

// creating properties of an object

console.log(myFirstObj)

// read/access values of object properties

console.log(myFirstObj.first_name)

// creating properties

myFirstObj.newProperty = "Hello world"


console.log(myFirstObj)

// updating properties

myFirstObj.age = 20

console.log(myFirstObj)

// deleting properties

delete myFirstObj.country

console.log(myFirstObj)





