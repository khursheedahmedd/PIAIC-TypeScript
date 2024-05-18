var _a;
// 1. Hello Variable
var greeting = "Hello, World!";
console.log(greeting);
// 2. Basic Math
var num1 = 10;
var num2 = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
// 3. Swapping Values
var a = 1;
var b = 2;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a:", a, "b:", b);
// 4. Type Annotation (TypeScript)
var message;
// Assigning a number to a string variable will result in a TypeScript compilation error.
// message = 10; // This line will cause a TypeScript error.
// 5. Modulus Operator
var num3 = 10;
var num4 = 3;
console.log("Remainder:", num3 % num4);
// 6. Increment Challenge
var counter = 0;
counter++; // Increment by 1 using postfix increment
counter += 1; // Increment by 1 using compound assignment operator
console.log("Counter:", counter);
// 7. Logical Gates
var aGate = true;
var bGate = false;
var cGate = true;
console.log("AND Gate:", aGate && bGate && cGate);
console.log("OR Gate:", aGate || bGate || cGate);
console.log("NOT Gate (for 'a'):", !aGate);
// 8. Compound Assignment
var compoundNum = 10;
compoundNum += 5; // Adding 5
console.log("After +=:", compoundNum);
compoundNum -= 3; // Subtracting 3
console.log("After -=:", compoundNum);
compoundNum *= 2; // Multiplying by 2
console.log("After *=:", compoundNum);
compoundNum /= 4; // Dividing by 4
console.log("After /=:", compoundNum);
// 9. Even or Odd
var numEvenOrOdd = 7;
if (numEvenOrOdd % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// 10. Voting Eligibility
var age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}
// 11. Grading System
var score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
// 12. Max of Three
var x = 10, y = 20, z = 15;
var maxNum = Math.max(x, y, z);
console.log("Max number:", maxNum);
// 13. Leap Year Checker
var yearToCheck = 2024;
if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}
// 14. Fahrenheit to Celsius Converter
var fahrenheitTemp = 32;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
console.log("Temperature in Celsius:", celsiusTemp);
// 15. Positive, Negative, or Zero
var numToCheck = -5;
if (numToCheck > 0) {
    console.log("Positive");
}
else if (numToCheck < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
var numberForTable = 7;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(numberForTable, " x ").concat(i, " = ").concat(numberForTable * i));
}
