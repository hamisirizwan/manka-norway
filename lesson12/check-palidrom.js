// write a program that checks whether a give string is a palidrom

// palidrom - is a word that is read the same in reverse

function checkIsPalidrom(str){

   const reverseString = str.split("").reverse().join("")

   if(reverseString ===  str){
    console.log("is palidrom")
   }else{
    const uppercaseString = str.toUpperCase()
    console.log("is not palidrom" , uppercaseString)
   }
}

checkIsPalidrom("hello")

checkIsPalidrom("madam")

const name = "Amaan Dhere"

console.log(name.split("")[0])

console.log(name.charAt(name.length - 1))

