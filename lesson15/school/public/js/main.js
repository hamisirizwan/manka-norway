const h1Element = document.querySelectorAll("#test")


h1Element.forEach((el)=>{
    el.style.color = "red"
})

// getElementById()
// querySelector()

// querySelectorAll()

const ourDiv = document.getElementById("dom")

ourDiv.innerHTML = "Javascript is Simple <h1>hello world</h1>"
// ourDiv.innerText = "Javascript is Simple <h1>hello world</h1>"
// ourDiv.textContent = "Javascript is Simple3"