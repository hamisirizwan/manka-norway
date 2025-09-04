// create a user object with properties name and initial_deposit

// should also contain transaction array with objects with type and value

// write code to get user balance based on the transactions

// if the blance is negative then console the user has overdraft the balance. otherwise display the balance

const user = {
  name: "Amaan",
  initial_deposit: 20,
  transactions: [
    {
      type: "deposit",
      value: 300,
    },
    {
      type: "withdrawal",
      value: 400,
    },
    {
      type: "deposit",
      value: 50,
    },
    {
      type: "deposit",
      value: 100,
    },
  ],
};

let balance = user.initial_deposit;

for (let i = 0; i < user.transactions.length; i++) {
  const t = user.transactions[i];

  if (t.type === "deposit") {
    // balance += t.value
    balance = balance + t.value;
  } else {
    balance = balance - t.value;
  }
}

if (balance < 0) {
  console.log(`You have an overdraft of ${balance}`);
} else {
  console.log(`Your balance is ${balance}`);
}

