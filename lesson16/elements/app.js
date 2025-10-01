// console.log("hello from js")

const school = {
    name:"Iqrah Academy",
    pupulation:300
}

const paragraph = document.createElement("p")

paragraph.innerHTML = `${school.name} has ${school.pupulation} students`

const theParent = document.querySelector("body")

theParent.appendChild(paragraph)

const theButton = document.querySelector("button")

const myInput = document.getElementById("textInput")


theButton.addEventListener("click", ()=>{

    const enteredNumber = myInput.value

    if(!enteredNumber){
      return alert("please enter something")
    }

   school.pupulation = school.pupulation + parseInt(enteredNumber)

   paragraph.innerHTML = `${school.name} has ${school.pupulation} students`

   myInput.value = ""
})