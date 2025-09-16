// create a government library management systems mockup

// an object called country

// the country has libraries accross different provinces - use 2

// each province library has books in categories of science , fiction

// calculate the total number of science books accross all libraries of that country

const country = {
    name: "somalia",
    libraries: [
        {
            province: "Bosaso",
            books:{
             science: 20,
             fiction: 12
            },
        },
          {
            province: "Madiino",
            books:{
             science: 2,
             fiction: 4
            },
        },
    ]
}
const numofLibraries = country.libraries.length
console.log(numofLibraries)

// variable to hold the value of books object of the first library in the country.

const booksoftheFirstLibrary = country.libraries[0].books
console.log(booksoftheFirstLibrary)

// variable that holds the name of the province of the second library in the country

const secondLibrary = country.libraries[1].province
console.log(secondLibrary)

/* let numscienceBooks = 0

for(let i = 0; i < country.libraries.length; i++ ){
   const currentitem = country.libraries[i]
   numscienceBooks = currentitem.books.science + numscienceBooks
}
console.log(numscienceBooks) */

// create a function called get science books

function getscienceBoooks (){
    let numscienceBooks = 0

for(let i = 0; i < country.libraries.length; i++ ){
   const currentitem = country.libraries[i]
   numscienceBooks = currentitem.books.science + numscienceBooks
}
console.log(numscienceBooks)
}

getscienceBoooks()

