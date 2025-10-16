const userInput = document.getElementById("userInput")

const container = document.getElementById("container")

const btn = document.getElementById("btn")

const savedTodos = localStorage.getItem("data") 


const todos = JSON.parse(savedTodos) || []


btn.addEventListener("click",()=>{

    const theTodo = userInput.value

    if(!theTodo){
       return alert("enter something")
    }

    // the user has entered a todo

    todos.push(theTodo)
    
    localStorage.setItem("data" , JSON.stringify(todos))

    container.innerHTML = ""
    userInput.value = ""
     renderTodos()
    
})

function renderTodos(){
    todos.forEach((todo)=>{

        const liEl = document.createElement("li")

        liEl.innerHTML = todo
        
        
        container.appendChild(liEl)

    })
}


// localstorage - STRINGS
// setItem
// localstorage.setItem("key" , "value")
// getItem("key")
// remove("key")
// clear()


// JSON
// marshall - convert js object to json string 
// JSON.stringify()
// unmarshall - convert json to js object
// JSON.parse()

// FETCH - Asysncronous - error handling try catch , promises 

renderTodos()