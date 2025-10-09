

// select an element

const bodyEl = document.querySelector("body")  // selects element from the dom

const colorInput = document.getElementById("colorInput")  // select
const addColorButton = document.getElementById("addColor")  // selection

const colorsArr = [
    "green" , "blue" ,"red"
]  // an array


addColorButton.addEventListener("click" , ()=>{
    const userInput = colorInput.value

    if(!userInput){
        return alert("Enter a color")
    }

    colorsArr.push(userInput)

    buttonParent.innerHTML = ""


    colorInput.value = ""
})

// event listner
// "purple","orange", "aqua" ,"black" , "yellow"


function renderButtons() {

    console.log("hello world")
   colorsArr.forEach((color)=>{
        // create a button
    
        const createButton = document.createElement("button")  // this creates a button element
    
        createButton.innerText = color
        createButton.style.marginRight = "20px"
    
        
    // we need to add the button to the dom
    
    // get a parent
    
    const buttonParent = document.getElementById("buttonParent")
    buttonParent.style.padding = "10px"
    
    
    buttonParent.appendChild(createButton)
    
    // button when clicked should call the change color function
    createButton.addEventListener("click", ()=>{
        changeColor(color)
    })
    
    })
 
}


renderButtons()


function changeColor(color){
    bodyEl.style.backgroundColor = color
}


// setInterval - allows us to perform and operation repeately for a number of times after a certain duration
// let indexOfColor = 0

// setInterval(()=>{

//     indexOfColor = indexOfColor + 1

//     if(indexOfColor > colorsArr.length){
//         indexOfColor = indexOfColor
//     }

//   bodyEl.style.backgroundColor =  colorsArr[indexOfColor]
// }, 500)


// const timerContainer = document.getElementById("timer")

// let timer = 0

// setInterval(()=>{

//    if(timer >= 10){
//       timer = timer
//    }else{
//      timer++
//    }

//     timerContainer.innerHTML = timer

// }, 1000)