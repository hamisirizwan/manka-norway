// console.log("hello from js")

const school = {
    name:"Iqrah Academy",
    pupulation:300
}


// creating elements

const newElement = document.createElement("h1")

newElement.innerHTML = "Hello from the DOM"
newElement.style.color = "blue"
// newElement.style.fontSize = "100px"


const bodyTag = document.querySelector("body")

bodyTag.style.backgroundColor = "aqua"

// 
bodyTag.appendChild(newElement)


// . - class
// # - id
// tag
