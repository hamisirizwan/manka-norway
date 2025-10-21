const formElement = document.querySelector("form")
const userName = document.getElementById("name")
const userAmount = document.getElementById("amount")
const totalAmount = document.getElementById("total")
const submitButton = document.getElementById("submit")
const ulElement = document.getElementById("container")
const feedbackElement = document.getElementById("feedback")

const expense = [
]

function renderExpense(){

    ulElement.innerHTML = ""
       // total
    expense.forEach((exp)=>{
        const newli = document.createElement("li")
        newli.textContent = `${exp.name} : ${exp.amount}`
        ulElement.appendChild(newli)
    })

    const total = expense.reduce((acc , exp)=>{
        return acc + exp.amount
    }, 0)

    totalAmount.innerHTML = `The total is : ${total}`

}


formElement.addEventListener("submit", (e)=>{
  e.preventDefault()

//   logic
const amount = userAmount.value
const name = userName.value

// validate if values have been entered
if(!amount || !name){
    feedbackElement.innerHTML ="enter all fields"
    feedbackElement.style.color = "red"
    return
}

// validate if amount is a valid number

if(isNaN(amount)){
    feedbackElement.innerHTML ="amount should be a number"
    feedbackElement.style.color = "red"
    return
}

// valid if the number is positive

if(Number(amount) < 1){
     feedbackElement.innerHTML ="invalid amount"
    feedbackElement.style.color = "red"
    return
}

// check whether the name is more than 3 characters

if(name.length < 3){
    feedbackElement.innerHTML ="name is too short"
    feedbackElement.style.color = "red"
    return
}


expense.push({
    name: name,
    amount: Number(amount)
})

feedbackElement.innerHTML ="expense added successfully"
feedbackElement.style.color = "green"

userAmount.value = ""
userName.value = ""

renderExpense()
})






