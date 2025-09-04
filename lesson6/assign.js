const user = {
  name: "riz",
  initial_deposit: 2000,

  transactions: [
    {
      type: "deposit",
      value: 100,
    },
     {
      type: "deposit",
      value: 100,
    },
     {
      type: "deposit",
      value: 100,
    },
    {
      type: "withdraw",
      value: 50,
    },
  ],
};

let balance = user.initial_deposit
for (let i = 0; i < user.transactions.length; i++){
     let cash = user.transactions[i]
     if (cash.type == "deposit"){
       balance = balance + cash.value
   
     }
     else{
        balance = balance - cash.value
     }

}

console.log(balance)
