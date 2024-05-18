// Question-1
console.log("Question-1: Hello world!");

// Question-2
let temperature1: number = 19;
console.log("Question-2: It's " + (temperature1 < 20 ? "cold!" : "hot!"));

// Question-3
let apple: number = 10;
console.log(`Question-3: The remaining apples are: ${apple - 3}`);

// Question-4
let firstName: string = 'Khursheed';
let lastName: string = 'Ahmed';
let fullName: string = firstName + ' ' + lastName;
console.log(`Question-4: The full name is: ${fullName}`);

// Question-5
let num: number = 7;
console.log(`Question-5: ${num > 5 ? "Yes" : "No"}`);

// Question-6
function calculateArea(radius: number): number {
    return 3.14 * (radius * radius);
}
let radius: number = 7;
console.log(`Question-6: The area is: ${calculateArea(radius)}`);

// Question-7
console.log("Question-7:");
for (let i = 1; i < 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Question-8
let temperature = [7, 23, 12, 9, 29, 12];
let temp = 0;
for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > temp) {
        temp = temperature[i];
    }
}
console.log(`Question-8: The highest temperature is ${temp}`);

// Question-9
let age: number = 21;
console.log(`Question-9: You are ${age >= 18 ? "an adult" : "a minor"}`);

// Question-10
let array = [1, -7, 8, -4, -4, 8, 9, -7];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        count++;
    }
}
console.log(`Question-10: Number of positive values: ${count}`);

// Question-11
function Words(str: string[]): string[] {
    let newStr: string[] = [];
    let j: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i][0] == 'A' || str[i][0] == 'a') {
            newStr[j] = str[i];
            j++;
        }
    }
    return newStr;
}
let str: string[] = ['Ali', 'Khursheed', 'Huzaifa', "Ahmad"];
let newStr = Words(str);
console.log(`Question-11: Names starting with A or a: ${newStr}`);

// Question-12
let fruits: string[] = ['Banana', 'Apple', 'Mango', 'Strawberry'];
console.log("Question-12:");
for (let i = 1; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Question-13
function Squire(numArray: number[]): number[] {
    let newArray: number[] = [];
    for (let i = 0; i < numArray.length; i++) {
        newArray[i] = numArray[i] * numArray[i];
    }
    return newArray;
}
let numArray: number[] = [6, 3, 9, 5, 9, 5, 9, 5];
let newArray: number[] = Squire(numArray);
console.log("Question-13: Squared numbers:");
newArray.forEach(n => console.log(n));

// Question-14
function reverseArray(arr: number[]): number[] {
    let newArray: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
let arr = [6, 1, 2, 3, 4, 9, 3, 2, 4];
let reverseArr = reverseArray(arr);
console.log("Question-14: Array in reverse:");
reverseArr.forEach(n => console.log(n));

// Question-15
function maxMinScrore(arr: number[], min: number, max: number) {
    let minScore: number = 0;
    let maxScore: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            maxScore++;
        if (arr[i] < min)
            minScore++;
    }
    console.log(`Question-15: Number of times score are minimum: ${minScore}, maximum: ${maxScore}`);
}

let arr1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let min: number = 7;
let max: number = 15;
maxMinScrore(arr1, min, max);

// Question-16
function removeFalseyValues(array: any[]): any[] {
    return array.filter(item => item);
}
let array1 = [3, "9", false, NaN, 0, null];
let array2 = removeFalseyValues(array1);
console.log("Question-16: Array without falsey values:");
array2.forEach(item => console.log(item));

// Question-17
function Concatenate(array1: number[], array2: number[]): number[] {
    return array1.concat(array2);
}
let arr3: number[] = [1, 2, 3];
let arr4: number[] = [4, 5, 6];
let newArray1 = Concatenate(arr3, arr4);
console.log("Question-17: Concatenated array:");
newArray1.forEach(item => console.log(item));

// Question-18
function sumOfElements(arr: number[]): number {
    return arr.reduce((sum, current) => sum + current, 0);
}
let arr5: number[] = [7, 3, 35, 6];
console.log(`Question-18: Sum of elements: ${sumOfElements(arr5)}`);

// Question-19
function findElement(arr: number[], num: number): number {
    return arr.indexOf(num);
}
let arr6: number[] = [6, 3, 6, 4, 8, 5, 9, 10];
let num1: number = 9;
let check = findElement(arr6, num1);
console.log(`Question-19: The element ${num1} is ${check !== -1 ? "found at index " + check : "not found"}`);

// Question-20
function findSmallestNumber(array: number[]): number {
    return Math.min(...array);
}
const numb = [5, 3, 9, 1, 7, 2];
const smallestNumber = findSmallestNumber(numb);
console.log(`Question-20: The smallest number is: ${smallestNumber}`);

// Question-21
function calculateProduct(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}
const numbers = [1, 2, 3, 4, 5];
console.log(`Question-21: Product: ${calculateProduct(numbers)}`);

// Question-22
function filterByLength(strings: string[], n: number): string[] {
    return strings.filter(str => str.length > n);
}
const strings = ["apple", "banana", "orange", "kiwi"];
console.log(`Question-22: Strings longer than 5 characters: ${filterByLength(strings, 5)}`);

// Question-23
function findDuplicates(array: any[]): void {
    const duplicates: any[] = [];
    const checkedElements: any[] = [];

    array.forEach((element, index) => {
        if (checkedElements.indexOf(element) !== -1 && duplicates.indexOf(element) === -1) {
            duplicates.push(element);
        } else {
            checkedElements.push(element);
        }
    });

    console.log(`Question-23: Duplicates: ${duplicates}`);
}
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 6, 1];
findDuplicates(arrayWithDuplicates);

// Question-24
function incrementAll(array: number[]): number[] {
    return array.map(num => num + 1);
}
const incrementedNumbers = incrementAll(numbers);
console.log("Question-24: Incremented numbers:");
incrementedNumbers.forEach(n => console.log(n));

// Question-25
function countOccurrences(array: any[], element: any): number {
    return array.reduce((count, current) => current === element ? count + 1 : count, 0);
}
console.log(`Question-25: Occurrences of 2: ${countOccurrences(arrayWithDuplicates, 2)}`);

// Question-26
function isSorted(array: number[]): boolean {
    return array.every((value, index) => index === 0 || value >= array[index - 1]);
}
console.log(`Question-26: Is sorted? ${isSorted([1, 2, 3, 4, 5])}`);
console.log(`Is sorted? ${isSorted([1, 3, 2, 4, 5])}`);

// Question-27
function formatNames(names: string[]): string {
    if (names.length <= 2) {
        return names.join(" and ");
    }
    var lastTwo = names.slice(-2).join(" and ");
    var rest = names.slice(0, -2).join(", ");
    return rest + ", " + lastTwo;
}
const names = ["John", "Jane", "Doe", "Alice", "Bob"];
console.log(`Question-27: Formatted names: ${formatNames(names)}`);

// Question-29
function convertToFahrenheit(temperaturesF: number[]): number[] {
    return temperaturesF.map(tempF => (tempF - 32) * (5 / 9));
}
const temperaturesFahrenheit = [32, 68, 86, 104];
console.log(`Question-29: Temperatures in Celsius: ${convertToFahrenheit(temperaturesFahrenheit)}`);

// Question-30
function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    var min = Math.min.apply(null, numbers);
    var max = Math.max.apply(null, numbers);
    var sum = numbers.reduce((acc, curr) => acc + curr, 0);
    var average = sum / numbers.length;
    return { min: min, max: max, average: average };
}
console.log(`Question-30: Min, max, and average: ${JSON.stringify(minMaxAverage(numbers))}`);

// Question-31
function swapElements<T>(array: T[], index1: number, index2: number): void {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new Error("Indices out of range.");
    }
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
const elements = ["a", "b", "c", "d"];
swapElements(elements, 1, 3);
console.log(`Question-31: Swapped elements: ${elements}`);

// Question-32
function countCharacterOccurrences(inputString: string, character: string): number {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === character) {
            count++;
        }
    }
    return count;
}
const inputString = "hello world";
const character = "o";
console.log(`Question-32: The character '${character}' appears ${countCharacterOccurrences(inputString, character)} times in the string.`);

// Question-33
interface ToDoItem {
    task: string;
    completed: boolean;
}
function logIncompleteTasks(toDoList: ToDoItem[]): void {
    console.log("Question-33: Incomplete tasks:");
    toDoList.forEach(function(item) {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}
const toDoList: ToDoItem[] = [
    { task: "Complete assignment", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Go for a run", completed: true }
];
logIncompleteTasks(toDoList);

// Question-34
function sortIntegers(array: number[]): number[] {
    return array.slice().sort(function(a, b) {
        return a - b;
    });
}
const integers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Question-34: Sorted integers:", sortIntegers(integers));

// Question-35
function logArrayInReverse(array: any[]): void {
    console.log("Question-35: Array in reverse:");
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
const array7 = [1, 2, 3, 4, 5];
logArrayInReverse(array7);

// Question-36
function basicCalculator(operand1: number, operand2: number, operator: string): number {
    let result: number;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            result = operand1 / operand2;
            break;
        default:
            throw new Error("Invalid operator.");
    }
    return result;
}
const operand1 = 10;
const operand2 = 5;
const operator = '/';
console.log(`Question-36: ${operand1} ${operator} ${operand2} = ${basicCalculator(operand1, operand2, operator)}`);
