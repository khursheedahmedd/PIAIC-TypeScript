// 1. Hello Variable
let greeting: string = "Hello, World!";
console.log(greeting);

// 2. Basic Math
let num1: number = 10;
let num2: number = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 3. Swapping Values
let a: number = 1;
let b: number = 2;
[a, b] = [b, a];
console.log("a:", a, "b:", b);

// 4. Type Annotation (TypeScript)
let message: string;
// Assigning a number to a string variable will result in a TypeScript compilation error.
// message = 10; // This line will cause a TypeScript error.

// 5. Modulus Operator
let num3: number = 10;
let num4: number = 3;
console.log("Remainder:", num3 % num4);

// 6. Increment Challenge
let counter: number = 0;
counter++; // Increment by 1 using postfix increment
counter += 1; // Increment by 1 using compound assignment operator
console.log("Counter:", counter);

// 7. Logical Gates
let aGate: boolean = true;
let bGate: boolean = false;
let cGate: boolean = true;
console.log("AND Gate:", aGate && bGate && cGate);
console.log("OR Gate:", aGate || bGate || cGate);
console.log("NOT Gate (for 'a'):", !aGate);

// 8. Compound Assignment
let compoundNum: number = 10;
compoundNum += 5; // Adding 5
console.log("After +=:", compoundNum);
compoundNum -= 3; // Subtracting 3
console.log("After -=:", compoundNum);
compoundNum *= 2; // Multiplying by 2
console.log("After *=:", compoundNum);
compoundNum /= 4; // Dividing by 4
console.log("After /=:", compoundNum);

// 9. Even or Odd
let numEvenOrOdd: number = 7;
if (numEvenOrOdd % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 10. Voting Eligibility
let age: number = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 11. Grading System
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 12. Max of Three
let x: number = 10, y: number = 20, z: number = 15;
let maxNum: number = Math.max(x, y, z);
console.log("Max number:", maxNum);

// 13. Leap Year Checker
let yearToCheck: number = 2024;
if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// 14. Fahrenheit to Celsius Converter
let fahrenheitTemp: number = 32;
let celsiusTemp: number = (fahrenheitTemp - 32) * 5 / 9;
console.log("Temperature in Celsius:", celsiusTemp);

// 15. Positive, Negative, or Zero
let numToCheck: number = -5;
if (numToCheck > 0) {
    console.log("Positive");
} else if (numToCheck < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 16. Multiplication Table
let numberForTable: number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${numberForTable} x ${i} = ${numberForTable * i}`);
}
