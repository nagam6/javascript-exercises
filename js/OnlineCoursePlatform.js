class Course {
    
  constructor(title, instructor, maxStudents) {
    this.title = title;
    this.instructor = instructor;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0;
  }
  // Part 2
  enrollStudent() {
    if (this.enrolledStudents < this.maxStudents) {
      this.enrolledStudents++;
    }
  }
}

// Part 3
const course1 = new Course("JavaScript Basics", "Dania", 30);
const course2 = new Course("Python Fundamentals", "Mohammad", 25);

console.log(course1);
console.log(course2);

// Part 4
course1.enrollStudent();
course1.enrollStudent();
course1.enrollStudent();

course2.enrollStudent();
course2.enrollStudent();

console.log(course1);
console.log(course2);