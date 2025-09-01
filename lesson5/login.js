
const user = {
    email:"hello@gmail.com",
    password:"hello123",
    balance:300,
    phoneNumber:"2547687923",
    name:"Riz"
}

// check for the password and email

const provideEmail = "hello@gmail.com"
const providedPassword = "hello123"

if(provideEmail !== user.email || providedPassword !== user.password){
    return console.log("Invalid credentials")
}

user.accessToken = "randonhash"

delete user.password

user.phoneNumber = "*******"

console.log(user)

// Object desctruction