// 

const car1 = {
    brand:"Toyota",
    model:"Auris",
    year: 2020,
    displayInfo(){
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
}

const car2 = {
    brand:"Toyota",
    model:"Harrier",
    year: 2020,
     displayInfo(){
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
}


// car1.displayInfo()
// car2.displayInfo()
// Toyota auris 2020

const school = {
    name:"Alliance",
    location:"Kikuyu",
    displayInfo: function(){
        console.log(`${this.name} school which is located at ${this.location} has a pricipal called ${this.pricipal.name} who is ${this.pricipal.age} years old`)
    },
    pricipal:{
        name:"Mwangi kiarie",
        age:63
    }
}

const school2 = {
    name:"Mangu",
    location:"Thika",
    displayScholInfo: function(){
        console.log(`${this.name} school which is located at ${this.location} has a pricipal called ${this.pricipal.name} who is ${this.pricipal.age} years old`)
    },
    pricipal:{
        name:"Naomi Shabaan",
        age:51
    }
}

// school.displayInfo()
// school2.displayScholInfo()

const bootcampt = {
   location:"Norway",
   instructors:[
    "Rizwan", "James" ,"Jane" , "Smith"
   ],
   students:[
    {
        name:"Abdillahi",
        marks: 40
    },
        {
        name:"Sophia",
        marks: 55
    }
   ],
   showNumberOfInstructors: function(){
      console.log(`A bootcamp in ${this.location} has ${this.instructors.length} instructors`)
   },
   employAnewTeacher: function (name){
    const nextIndex = (this.instructors.length - 1) + 1
        this.instructors[nextIndex] = name

        console.log(this.instructors)
   },
   showTotalMarks: function(){
    let total = 0;
    for(let i = 0 ; i < this.students.length; i++){
        const marksOfCurrentStudent = this.students[i].marks

        total = total + marksOfCurrentStudent
    }

    console.log(total)
   }
}

bootcampt.employAnewTeacher("Mary")
bootcampt.showNumberOfInstructors()

bootcampt.employAnewTeacher("Ismael")
bootcampt.showNumberOfInstructors()

bootcampt.showTotalMarks()