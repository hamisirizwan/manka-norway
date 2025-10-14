const userInput = document.getElementById("userInput")

const container = document.getElementById("container")

const btn = document.getElementById("btn")

const todos = []


btn.addEventListener("click",()=>{

    const theTodo = userInput.value

    if(!theTodo){
       return alert("enter something")
    }

    // the user has entered a todo

    todos.push(theTodo)

    container.innerHTML = ""
     renderTodos()
    
})

function renderTodos(){
    todos.forEach((todo)=>{

        const liEl = document.createElement("li")

        liEl.innerHTML = todo
        
        
        container.appendChild(liEl)

    })
}


// renderTodos()