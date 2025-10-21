const formElement = document.querySelector("form")
const userName = document.getElementById("name")
const userAmount = document.getElementById("amount")
const totalAmount = document.getElementById("total")
const submitButton = document.getElementById("submit")
const ulElement = document.getElementById("container")

const expense = [
    {
        name: "aman",
        amount: 200
    }
]

function renderExpense(){
    expense.forEach((exp)=>{
        const newli = document.createElement("li")
        newli.textContent = `${exp.name} : ${exp.amount}`
        ulElement.appendChild(newli)
    })
}

renderExpense()









