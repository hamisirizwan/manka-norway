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

        {
      name: "Jane",
      Grade: 1,
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


// creating a function
function totalGrade() {

  // initializing the total to 0
  let total = 0;

  // looping through each student of the school object
  for (let i = 0; i < school.students.length; i++) {
    // for every student in the school object
    const currentStudent = school.students[i]
    
    total = total + currentStudent.Grade;

  }

  console.log(total)
}


totalGrade();

