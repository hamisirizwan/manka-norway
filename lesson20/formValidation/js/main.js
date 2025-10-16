
// js will come here

const firstNameInput = document.getElementById("fname")
const secondNameInput = document.getElementById("lname")
const errorBox = document.getElementById("errorBox")
const successBox = document.getElementById("successBox")
const firstNameValueBox = document.getElementById("firstValue")
const lastNameValueBox = document.getElementById("secondValue")
const submitBtn = document.getElementById("submitBtn")

const form = document.getElementById("form")

form.addEventListener("submit", (e)=>{

    e.preventDefault()
    
    const firstName = firstNameInput.value
    const lastName = secondNameInput.value

    if(!firstName || !lastName){
         errorBox.innerText = "please fill all field"
    }

     errorBox.innerText = ""
     successBox.innerText = `form submitted firstname:${firstName} last name ${lastName}`

     firstNameInput.value = ""
     secondNameInput.value = ""
})

firstNameInput.addEventListener("input", ()=>{

    submitBtn.removeAttribute("disabled")

    if(firstNameInput.value && firstNameInput.value.length < 5){
        firstNameValueBox.textContent = "the value should be more than 5 characters"
    }else {
         submitBtn.removeAttribute("disabled")
       firstNameValueBox.textContent = ""
    }
     
})

secondNameInput.addEventListener("input", ()=>{

    submitBtn.removeAttribute("disabled")
    if(secondNameInput.value && secondNameInput.value.length < 5){
        lastNameValueBox.textContent = "the value should be more than 5 characters"
    }else {
       lastNameValueBox.textContent = ""
    }
     
})

// create a form with two inputs where when the users enters values into the inputs and clicks the button, it will add the two values and display the sum.
// Hint: validate the 2 inputs and make sure the user has entered valid numbers:



