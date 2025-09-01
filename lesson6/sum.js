const students = [
  {
    name: "Mark",
    marks: 40,
  },
  {
    name: "Amaan",
    marks: 55,
  },
  {
    name: "Riz",
    marks: 60,
  },
];


let total = 0

for(let i = 0 ; i < students.length; i++){
    // 
    const theCurrentStudent = students[i]
     total = total + theCurrentStudent.marks
    //  
}

console.log(total)

