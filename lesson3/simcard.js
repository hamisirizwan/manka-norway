const age = 17

const hasId = true

const hasPassport = true

if( (hasId || hasPassport) && age >= 18){
    return console.log("You can own a simcard")
}

console.log("You CONNOT own a simcard")