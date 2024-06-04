// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?




type Student = {
    name: string;
    isSenior: boolean;
    assignmentCompleted: boolean;
   
}

const student1: Student = {
    name: "Shaista",
    isSenior: true,
    assignmentCompleted: false
};
const student2: Student = {
    name: "Hassan",
    isSenior: false,
    assignmentCompleted: true
};
const student3: Student = {
    name: "Rayyan",
    isSenior: false,
    assignmentCompleted: false
};
const student4: Student = {
    name: "Ahmed",
    isSenior: true,
    assignmentCompleted: true
}
const student5: Student = {
    name: "Shazia",
    isSenior: true,
    assignmentCompleted: true
}
const student6: Student = {
    name: "Haniya",
    isSenior: false,
    assignmentCompleted: false
}




const students: Student[] = [student1, student2, student3, student4, student5, student6];
console.log(students);
let seniorCompleted: Student[] = [];



 for (let student of students) {
 if (student.isSenior && student.assignmentCompleted) {
     seniorCompleted.push(student);
 }
}
   console.log(seniorCompleted, "seniorCompleted");

   function updateClassList (student: Student[]): Student[] {
    return students.filter(student => !(student.isSenior && !student.assignmentCompleted));
   }
   const updatedClassList = updateClassList(students);
   console.log(updatedClassList, "updatedClassList");
