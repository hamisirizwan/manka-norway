const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")



rockButton.addEventListener("click", ()=>{
   playGame("rock")
})

paperButton.addEventListener("click", ()=>{
   playGame("paper")
})

scissorsButton.addEventListener("click", ()=>{
   playGame("scissors")
})

function playGame(selection){

    let choice = ""
let result = ""

const options = [ "rock" , "paper" , "scissors"]

// get a random index between 0 - 2

const randomIndex = Math.floor(Math.random() * 3)


let computerSelection = options[randomIndex]

    choice = selection

    let winner = ""

    if(choice === computerSelection){
        winner = "Draw"
    }else if(choice  == "rock" && computerSelection == "paper"){
        winner = "You"
    }else if(choice  == "paper" && computerSelection == "rock"){
        winner = "computer"
    }


    result = winner

    document.getElementById("result").innerHTML = result
}






