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

console.log(
  `${school.name} is located in ${school.location} has ${school.teachers.length} teachers and ${school.students.length} students`
);
