// a string in js is a datatype - remember JS is a higher level language that was created in another language(c++)
// for the creators of js to come up with JS datatypes they created them as objects
// so datatypes -like the string - has properties and methods


// getting the leght of string characters

const myName = "Rizwan"

console.log(myName.length)

// 

console.log(myName.toUpperCase())

const lastLetter = myName.charAt(2)

console.log(lastLetter)


// string.leght - gives you the lenght of the string
// charAt - gives you the character at a given index
// concat - join a string with another
// slice - a subsection of the string
// substring - a subsection of the string
// split - convert the string into an array

const phoneNumber = "+2547687939"
console.log(phoneNumber.split(""))

// you have a string of number  - get the sum of the characters

const stringOfChar = "3456509898654685"

let total = 0 

for(let i = 0; i<stringOfChar.split("").length; i++){
  
    console.log(typeof stringOfChar.split("")[i])
    total = total + Number(stringOfChar.split("")[i])
}

console.log(total)