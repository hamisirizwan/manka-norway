// forEach ,
//  map ,
// reverse ,
//  push,
//  pop ,
// unshift ,
//  shift ,
//  find ,
// filter ,
//  reduce
// sort

// mock up a school management system

// entities
// school
// teachers
// students

const school = {
  name: "Lakewood Academy",
  teachers: [
    {
      name: "Rizwan",
      class: 8,
    },
    {
      name: "Lucy",
      class: 4,
    },
  ],
  students: [
    {
      name: "Amaan",
      age: 8,
      marks: 80,
    },
    {
      name: "Fred",
      age: 7,
      marks: 76,
    },

    {
      name: "Jane",
      age: 6,
      marks: 20,
    },
    {
      name: "Gatere",
      age: 6,
      marks: 92,
    },
    {
      name: "John",
      age: 6,
      marks: 45,
    },
  ],
};

console.log("\n\n------ Initial teacher -----")
console.log( school.teachers);

// function that employs a new teacher

function employNewTeacher(name, c) {
  school.teachers.push({
    name,
    class: c,
  });
}

employNewTeacher("Leticia", 10);

console.log("\n\n------ new teachers -----")
console.log(school.teachers);

// give us the avarage age of students t/n

function avarageAge() {
  const totalAges = school.students.reduce((acc, std) => {
    return acc + std.age;
  }, 0);

  const totalStudents = school.students.length;

  return totalAges / totalStudents;
}

const avarage = avarageAge();

console.log("\n\n------ avarage age -----")
console.log(avarage);

// get the student who performed best

function findBestStudent() {
  school.students.sort((a, b) => {
    return b.marks - a.marks;
  });

  return school.students[0];
}

const bestStudent = findBestStudent();

console.log("\n\n------ best student -----")
console.log(bestStudent);

// find student below avarage
function findStudentsBelowAvarage(){
    const belowAvStds = school.students.filter((std)=>{
        return std.marks < 50
    })

    return belowAvStds
}

const belowAvStudents = findStudentsBelowAvarage()

console.log("\n\n------ below avarage -----")
console.log(belowAvStudents)