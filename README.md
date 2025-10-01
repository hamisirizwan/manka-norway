# Introduction to HTML Elements.

comments - part of your website that will automatically be ignored by the browser



Syntax - how we write the language 



self-closing elements - they only have the opening tag



Html Atrributes - are put on the opening tag of an element, they provide extra information about the element

Hover - putting your cursor/mouse ontop on an element

Absolute path = is the whole url used for linking external pages

Relative path = is a part of a url used to link to pages within our project

To add an image to our web application we will use the <img> tag



Accessibilty - 



absolute paths in top folder - ./ - in the same folder ../ go out of the folder one step .../ go out of the folder 2 steps



to refference the root folder with absolute paths, we would prefix our path with a /



image <img > - Inline

break like <br/> -block

heading <h1> - <h6> - block

Paragraph <p></p> -block

span <span></span> - inline

italics <i></i>  -inline

unordered list <ul></ul> -block

list item <li></li> - block

descrption list <dl></dl> - block

Bolding <strong></strong> -inline

Bolding <b></b> - inline

italics <em></em> -inline

ordered list <ol></ol> -block

underline <u></u> -inline



Media queries breakpoints

- mobile 480px
- tables 768px
- laptops/desktops 1024px
- large screen/device 1440px + 


Last week 

1 - javascript variables - 

2 . datatypes (string , numbers , booleans , objects , arrays)

3 . operations - operators

4 . arithmetic operaters (+ , - , _/ , _** , % )





CRUD

CREATE - How to create objects /properties

READ - 

UPDATE

DELETE 





ARRAYS

Array syntax = []

Accesing items - indexing



1 , 2 ,3 ,4 

0 , 1, 2  ,3



delete , var , let , const , function

if , else if , else , switch

// Functions are only executed when called/invoked



LOOPS

- what are loops - running the same code , multiple times without writing it over and over again
- why do we need them - it helps use build logic mostly when working with arrays
- types of loops available - for , while , do...while
- syntax - how to write loops


Browser Storage:

- Localstorage
- SessionStorage
- cookies

FULLSTACK WEB DEV
- FRONTEND
- BACKEND

- HTML , CSS , JAVASCRIPT/Typescript
- REACT , TAILWINDCSS. 
- NODEJS , DATABASES(sql , nosql) - orms.

- AI CODING 
JAVASCRIPT -

- browser 
- IDE(vscode)
 - Setting up the environment - IDE(vscode) , runtime(nodejs) , npm (package manager) 



Nodejs - Javascript runtime (allow you to run javascript on other environment other than the web browsers)

NPM - app store / google store  - versions 

LTS - Long time support

NVM  - Node version manager



Way to write and run JS

1. Browser console.
2. Terminal environment using nodejs


Basic

1. datatypes
2. variables
3. operator


LAST CLASS REVIEW.

Setting up coding environment

 -- IDE , NodeJs , Npm 

-- a new project - hello world - files - .js / .ts

-- console.log(".....")

-- syntax , semantics



**DataTypes**

Primitive Datatypes - String , Numbers(Integers , Floats(decimals)) , Booleans(0 , 1 (true , false)) , Null , Undefined

Derived DataTypes - Objects , Arrays , Function

**Variables**

Naming of data - data storages , data labels

variableName = dataType

We define variables using some special keywords  - var , let , const

```
keyword variableName = value
```
Variable naming has a set of rules to be followed

1, can start with a-z , A-Z , _ , $ 

2 . reserved keywords , var , const , let , if , else , function , return , break , while , for , do

3 . we cannot use spaces 



Naming convention

camelCase

PascalCase

snake_case

kebab-case

Type assertion

to identify the datatype of a value or variable

typeof - allows us to assert/check the datatype of a value or variable



**Operators**

operators symbols that allow us to perform operation on data(operand)

Arithmetic operators

   + , - , * _ , / ,% , _

Assignment operators

   **= **, _+= , -= , *= ,/=_

Comparison operators - conditions

Logical operators - condition

   some characters that allow us to combine different comparison operators.

    1. AND - both conditions should return true (&&)

    2. OR -  atleast 1 to be true (||)

    3 NOT - negates or inverses the result (!)

we can compound logical operators by isolating comparisons within ()

CONTROL FLOW

1 - conditionals

    . Datatype - Boolean(true , false)

    . if ....if..else ...else...switch

    .  return , break

2 - Loops - run a block repeated for a **limited **number of times - 10 (searching)

      - controlled flows (controls the number)

      - continue , break

       - for , while , do..while



for loops syntax

```
for( let i = 0 ; i < myName.length ; i++){
  console.log(myName[i])
}
```
syntax for a while loop

```
let numberOfTimes = 1

while(numberOfTimes <= 10){

    console.log(numberOfTimes)

    numberOfTimes++
    // do something
}
```
syntax for do while



```
let numberOfTimes = 15

do{

    console.log(numberOfTimes)

    numberOfTimes++
    // do something
}while(numberOfTimes <= 10)
```
Javascript is loosely types (datatypes) - infer



**Functions**

Reusable blocks of code that perform a particular operation

How to create function

    -Declaration

    - expression 

     - Arrow function =>

Mini programs within a program

call that function - execusion

()

Event driven architecture

parameter , auguments

return 

default parameters

Function declaration syntax

```
function nameOfFunction(){
    console.log("Hello world")
}

nameOfFunction()
```
**FUNCTIONS RECAP**

reusable blocks of code.

flexible - params , arguments

return - return value from a function as well as terminate the function.



**GIT & GITHUB**

git is a tools that help us in version control.

Github helps in 1. colaboration , storage(backup)

local(within your machine) , remote(cloud)

pushing code to remote(github)

pulling code from remote to local



**How do we interact with git**

1 , cli - commands

    1 , initializing a git repository - git init

    2 , create remote repository

     3 - connect a remote repo to a local repo

     4 . push the changes

           - stage the change - git add <filename> || .

           - commit the changes(versioning them)  - git commit -m "message"

         - pushing the changes - git push

 5. getting changes from remote.

    if(it is a new repo) - create a copy locally(clonning) - git clone remoteUrl

     if (you already have a connection between the remote and local) - git pull



2 . gui



**Objects**

- Datatypes 
    -  Strings
    - numbers
    - boolean
    - null

- Objects are just but one datatype that combines the other datatypes
- Object CRUD on object members 
    - Create
    - Read
    - Update
    - Delete

- Functions are also values that can be in an object - methods
- Properties and(or) method
- Objects in Js , introduce you to some OOP.
- User defined , inbuild objects , imports(community - npm)


Object syntax

```
const person = {
}
```
Object recap

- How to create object  
    - properties - key : value(string , number , boolean, object , null)
    - methods - key: value pair (functions)

- Operations 
    - read properties
    - create
    - update
    - delete

- Read - destructuring
- this - whenever you need to access the value of an object property within the object


ARRAYS

one variable holding multiple values of the same datatype

how to create arrays [ , ] , new Array("hello", "world")

operation

   array traversing/looping through

   an array is an object - it has properties(length) and methods - push , unshift , pop , shift.

Looping through array.

     - for loop,

     - high order function

           - Array.forEach

            - Array.map

            - Array.filter

            - Array.find   



JS BUILT IN OBJECTS

- Review - creating and accessing object properties and methods
- some of the existing js builtIn object - date , math , localstorage , json , DOM , fetch()
- **Reading the documentation - Reactjs**
- **Debugging (stack trace)**
- Basics of APIs 






WEB DEVELOPMENT

- FRONTEND - HTML , CSS , JAVASCRIPT/TYPESCRIPT
- BACKEND - JAVASCRIPT/TYPESCRIPT - NODEJS
- FULLSTACK - JAVACRIPT/TYPESCRIPT
Mongo Express React Nodejs - JAVASCRIPT

DX - DEV EXP 

HTML - CSS

1 - OS - TERMINAL

2 - ENV - code editor - vscode

2 - boilerplate

3 - file structure - paths - relative - absolute



JAVASCRIPT - AS A PROGRAMMING LANGUAGE

- datatypes and variables , expressions
- operators - arithmetic , comparison , logical
- Number , Strings , boolean ,objects , arrays , functions
- control structures - conditionals - if , else , else if , switch , Loops(for , while , do...while) 
- Arrays - methods - map , forEach , reduce , filter , find
- Objects - React
- modularization -


Javascript is a loosely types language



var myName = "Riz"



GIT BRANCHING

GIT - github



Local - remote

main(local) - remote(main)

conflicts - merge conflicts



65 - console.log("hello")

65 - console.log("world")



local(main)  - remote(main)

local(maaka)  - remote(maaka)

form - maaka  - merged to main - checkout main - pull main changes - checkout to your branch - merge main



Control structure - basic topic in any prog language

- Conditionals
- Loops
- promises - callbacks
- error handling - try....catch
- function


**SYNTAX **AND **SEMANTIC**



The return keyword in conditionals allow us to stop the execution of a program when a condition is not met



mock up a functionlity on a financial system

withdrawal

variable - balance , amount , isActive

check is the balance is available for withdrawal

if the balance is okay - reduce the balance by the amount 

console.log new balance

only allow withdrawals for accounts that are active

boolean variable for the isActive status

You are only allowed to withdraw if you have an available balance and your account is active.

**Loops**

Its still part of controlled execution(control structure)

repeating an execution a given number of times.



Loops - basic - syntax

For

while

do...while 



Iteration through arrays -loop through arrays



Array methods

   - array.map

   - array.filter



Loops

- For loop
- while
- do while loop


test on loop - summing up all odd number within a certain range

range - 20 - 200

20  - 200  -- in each iteration check if the number is odd if its odd - add it to the sum



if(){

}



for(){

}



Objects

datatype - derived - meaning its made out of the primitives(numbers , strings , booleans , null , ) , objects , arrays



var , let , const name =  { 

key: value

key:value

}



1. Creating objects
2. Performing operation on object


Create  - obj.newPro = value

Read   -  we use the dot notation to get values of object properties

Update - obj.existingProp = value

Delete - we use the delete keyword - delete obj.prop



OBJECTS RECAP

Datatypes - string , numbers , booleans , objects , arrays(object)

CRUD - create a new prop , access properties , update , delete

construction objects from basic descriptions.



data - store(RAM) - process - store(ROM) - feedback(output)

OBJECTS - OP

const libManagentSytem = {

title:"James Library",

members: ["Riz","Kimani"]

}

libManagentSytem.members

libManagentSytem.title



ARRAYS - datatype is an object

Accesing items of an array we use its position(index) form 0(first item position)

we use the []

FUNCTION IN JS

what - functions are a block of code bundled together and can all be run at once

why - allows us repeat some logic **whenever** we need it

create - call 

how to create them

function name(){

}

function scopes - boundary within which data is accessible

Function can take in data in terms of

**Arguments **and **parameters**

position and named

Datatypes

strings  , numbers , booleans , arrays , objects , functions , object methods , control flows(conditional & loops)

**STANDARD LIBRARY - built in utilities**

STRING - Its a datatype and also a object on its own - so it has properties and methods.

legth - "hello world" - str.lenght

toUppercase - toLowercase - split("") , join() , 

given a string check if the string is a palidrom - madam - madam



**ARRAY METHODS**

Array methods allow us to perform common operation on arrays 

These operations include:

1. traversing (looping through)  - array.forEach(() =>{})
2. copying the array with modified values - map
3. finding items of an array - find()
4. adding items of an array - push , unshift
5. removing items of an array - pop , shift
6. computing totals - reduce
7. filtering and array - filter
8. sorting an array - sort


**DOM OBJECT** - 

- Browsers - add interactivity to web pages
- Server side - Node js - runtime to run javascript in other environments other than the browser
- Understanding the DOM is purely dependant on basic JS - variables - datatypes - control flows(if , loops) , objects , arrays , function , object methods , array methods


HTML , CSS , JAVASCRIPT - events

OBJECT

- How to add js to html 
- selectors
- changing content of elements
- create elements
- remove elements
- update


ADDING JS TO HTML

- Use the browser console
- within script tags of html document
- separate js file and link it to the html via the src attribute of the script tag


Javascript DOM Selectors

- GetElementById(<id of the element>)  - returns the first object matching the id
- _GetElementsByClassName()  - _
- _GetElementByTagName() -_
- querySelector(. ,#)


HTML ELEMENT CONTENT PROPERTIES

- textContent
- innerText
- innerHTML


Select elements of the DOM  - 

- getElementById()
- querySelector()
- querySelectorAll()  - index , loop - (for loop - forEach)


CREATING AND ADDING ELEMENTS TO THE DOM

- createElement()
- appendChild() - div , span , main , section , aside , header , nav


TERMINAL COMMANDS

- cd - change directory
- dir/ls - list items
- ls -a - list all
- cd ..  - back one step
- mkdir - making a folder/directory
- touch - to create files
- rm - removing
- mv - rename or moving


EVENT LISTENERS IN JS



MINI PROJECTS

- calculator - introduce you to arithmetics
- rock paper scissors - the math object
- stop watch - date
- persisitant rock paper scissors - localstorage
- todo list - fetch


