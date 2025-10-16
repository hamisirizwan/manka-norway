

const firstNumber = document.getElementById("num1")
const secondNumber = document.getElementById("num2")
const result = document.getElementById("result")

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(!firstNumber.value || !secondNumber.value){
        alert("enter a number")
        return
    }

    const num1 = Number(firstNumber.value)
     const num2 = Number(secondNumber.value)

   result.innerHTML = num1 + num2
    


})





