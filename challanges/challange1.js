const students = [
  "Abdirahman Ahmed",
  "Rizwan Hamisi",
  "Jane Walowe",
  "Christopher Martin",
  "Sofia Abdulkadir",
];

// task : create a new array with student objects with first name and last name properties from the students array

// const resultArr = []

// for(let i = 0; i < students.length;i++){
//      const student = students[i]

//      const parts = student.split(" ")

//      const studentObject = {
//         firstName:parts[0],
//         lastName:parts[1]
//      }

//      resultArr.push(studentObject)
// }

// console.log(resultArr)

const newArray = students.map((student) => {

  const [ first , last] = student.split(" ")

  return {
    firstName: first,
    lastName: last,
  };

});

console.log(newArray)

// object destructuring

// const myObject = {
//     name:"Hello",
//     points: 40
// }

// // destructiring
// const {points , name} = myObject

// console.log(points)
// console.log(name)

// const names = ["edward", "mark"]

// const [a , b] = names

// console.log(a)
// console.log(b)


