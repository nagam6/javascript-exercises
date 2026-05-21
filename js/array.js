// STEP 1 
let students = ["Dania", "Omar", "Lina", "Rami"];

// STEP 2
students.push("Sara");

// STEP 3 
students.unshift("Adam");

// STEP 4 
students[students.indexOf("Lina")] = "Lamar";

// STEP 5 
let removedLast = students.pop();

// STEP 6 
let removedFirst = students.shift();

// STEP 7 
let hasRami = students.includes("Rami");

// STEP 8 
let omarIndex = students.indexOf("Omar");

// STEP 9 
let groupA = students.slice(0, 2);

// STEP 10 
let groupB = ["Nour", "Tala"];
let allGroups = groupA.concat(groupB);

// STEP 11 
let groupString = allGroups.join(" | ");

// STEP 12
students.sort();

// STEP 13.
students.reverse();

// STEP 14 
let seats = [1, 2, 3, 4, 5];
seats.splice(1, 3, "Reserved", "Reserved", "Reserved");
let reservedSeats = seats;

// STEP 15 
let studentsString = students.join(", ");

// STEP 16 — Final Output
console.log(students);
console.log(removedLast);
console.log(removedFirst);
console.log(hasRami);
console.log(omarIndex);
console.log(groupA);
console.log(allGroups);
console.log(groupString);
console.log(reservedSeats);
console.log(studentsString);