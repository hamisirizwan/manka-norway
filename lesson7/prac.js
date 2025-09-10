const school = {
  name: "Nairobi",
  location: "kenya",
  teachers: [
    {
      name: "rizwan",
      subject: "coding",
    },

    {
      name: "boss",
      subject: "math",
    },
  ],

  students: [
    {
      name: "Yusuf",
      Grade: 68,
    },

    {
      name: "Peter",
      Grade: 55,
    },
  ],
};

// console.log(
//   `${school.name} is located in ${school.location} has ${school.teachers.length} teachers and ${school.students.length} students`
// );

// create a function that will rename the school

function renameSchool(newName) {
  console.log(
    `.....renaming the school from ${school.name} to ${newName}.....`
  );
  school.name = newName;
}

// renameSchool("Mangu");

// console.log(
// `${school.name} is located in ${school.location} has ${school.teachers.length} teachers and ${school.students.length} students`
// );

// create a function that will console the total grade of the students in the school

function totalGrade() {
  let total = 0;
  for (let i = 0; i < school.students.length; i++) {
    totalGrade = total + school.students.length;
  }
  console.log(total)
}
totalGrade();
