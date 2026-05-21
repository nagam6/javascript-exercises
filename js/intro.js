// Task 1  - OUTPUT: 
//number
//string
//boolean
//undefined
//object
//object

// Task 2
const firstName = "Sara";
let myAge = 22;
let score = 0;
score = 100; 
let bad = "bad";
// Variable names can’t start with numbers, use -, or reserved words. Use let if value changes.


// Task 3
const name = "Sara";
const age = 20;
const grade = "B";
const isPassed = true;
console.log(`Student ${name}, age ${age}, got grade ${grade}. Passed: ${isPassed}`);

// Task 4
const msg = "I love javascript programming";
console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.slice(7, 17));
console.log(msg.includes("love"));

// Task 5  - OUTPUT:
//true
//false
//true
//false
//true
//true
//false
// == converts types, but === checks type and value exactly.


// Task 6
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

// Task 7
//"hello" → TRUE
//"" → FALSE
//0 → FALSE
//1 → TRUE
//null → FALSE
//undefined → FALSE
//false → FALSE
//[] → TRUE
//NaN → FALSE

// Task 8  - OUTPUT:
//14
//20
//16
//2
//true

// Task 9 
//hello
//false
//default
//value
//fallback

// Task 10
const price = 120;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;
const discount = subtotal * discountPercent / 100;
const total = subtotal - discount;

console.log(`subtotal: ${subtotal} | discount: ${discount} | total: ${total}`);

// Task 11
let number = 17;
console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);

// Task 12
//x += 5;
//x *= 2;
//x -= 3;
//x **= 2;
//x %= 7;

// Task 13
const weight = 70;
const height = 1.75;
const bmi = weight / (height ** 2);
console.log(`BMI: ${bmi.toFixed(1)}`);

// Task 14
const isLoggedIn = true;
const isAdmin = false;
const userAge = 20;

console.log(isLoggedIn && userAge >= 18);
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || userAge >= 21);

// Task 15
let light = "yellow";

if (light === "green") {
  console.log("Go!");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop!");
} else {
  console.log("Unknown signal");
}

// Task 16
const age2 = 25;
const isMember = true;

if (age2 >= 18 && isMember) {
  console.log("Full access — welcome member!");
} else if (age2 >= 18 && !isMember) {
  console.log("Guest access — consider joining");
} else if (age2 < 18 && isMember) {
  console.log("Junior member access");
} else {
  console.log("No access");
}

// Task 17
let msg2 = 10 > 5 ? "yes" : "no";
let fee = isMember ? 5 : 20;
let label = score >= 50 ? "pass" : "fail";

// Task 18
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
}

// Task 19
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}

// Task 20
let password = "Hello1!";

if (password.length < 6) {
  console.log("Weak");
} else if (password.length < 10) {
  console.log("Medium");
} else {
  console.log("Strong");
}

// Task 21 - OUTPUT:
//in range
//false
//true
//match

// Task 22
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Task 23
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}

// Task 24
let num = 1;

while (!(num % 6 === 0 && num % 8 === 0)) {
  num++;
}
console.log(num);

// Task 25
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Task 26
let rockets = 5;

do {
  console.log(`${rockets}...`);
  rockets--;
} while (rockets > 0);

console.log("Blast off!");

// Task 27
for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

// Task 28
for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

//+++ FUNCTIONS 

// Task 29
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));

// Task 30
const isEven = (n) => {
  return n % 2 === 0;
};
const isOdd = (n) => {
  return !isEven(n);
};
console.log(isEven(4));
console.log(isOdd(7));
console.log(isEven(3));

// Task 31
function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}
greet("Omar", "Good morning");
greet("Sara");

// Task 32
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  else if (b >= a && b >= c) {
    return b;
  }
  else {
    return c;
  }
}
console.log(maxOfThree(3, 17, 9));

// Task 33
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World"));

// Task 34
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(7));

// Task 35
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replaceAll(" ", "");
  let reversed = "";

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }
  return cleaned === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Never Odd Or Even"));

// Task 36
let studentName = "Sara";
let scores = [80, 70, 75, 90, 68];

function generateReport(name, scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  let average = total / scores.length;
  let grade;

  if (average >= 90) {
    grade = "A";
  }
  else if (average >= 80) {
    grade = "B";
  }
  else if (average >= 70) {
    grade = "C";
  }
  else if (average >= 60) {
    grade = "D";
  }
  else {
    grade = "F";
  }
  console.log(`${name} | Avg: ${average.toFixed(1)} | Grade: ${grade}`);
}
generateReport(studentName, scores);

// Task 37
const secretNumber = 42;
function checkGuess(guess) {
  if (guess < secretNumber) {
    return "Too low";
  }
  else if (guess > secretNumber) {
    return "Too high";
  }
  else {
    return "Correct!";
  }
}
let guesses = [10, 60, 42];

for (let i = 0; i < guesses.length; i++) {
  console.log(checkGuess(guesses[i]));
}

// Task 38
function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Error: division by zero";
      }
      return a / b;

    default:
      return "Error: unknown operator";
  }
}
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 4));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 0));

// Task 39
function pyramid(rows) {

  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i * 2 - 1; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
pyramid(5);

// Task 40
function collatz(n) {
  // If n is already 1 
  if (n === 1) { 
    return 1; 
  }

  let steps = 0;
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      }
      else {
        n = n * 3 + 1;
      }
    // Print each step 
    console.log(n);
    steps++;
  }
  return `${steps} steps`;
}
console.log(collatz(6));

// Task 41
function numberToWord(n) {
  const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];

  if (n < 1 || n > 20) {
    return "out of range";
  }
  return words[n];
}
console.log(numberToWord(7));
console.log(numberToWord(15));
console.log(numberToWord(25));

// Task 42
let balance = 1000;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`Deposited ${amount}`);
  }
  else {
    console.log("Invalid deposit amount");
  }
}

function withdraw(amount) {

  if (amount > 0 && amount <= balance) {
    balance -= amount;
    console.log(`Withdrew ${amount}`);
  }
  else {
    console.log("Withdrawal failed");
  }
}

function getBalance() {
  return balance;
}

console.log(`Balance: ${getBalance()}`);

deposit(500);
console.log(getBalance());

withdraw(200);
console.log(getBalance());

withdraw(2000);
console.log(getBalance());
