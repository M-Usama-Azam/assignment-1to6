"use strict";
//Assignment 1
//  - Print a message like "Hey Abu Hurairah, I have started learning TYPESCRIPT."
console.log("Hey M Usama Azam, I have started learning TYPESCRIPT.");
//  - Store your name in a variable and print it.
var name1 = "M Usama Azam";
console.log(name1);
//  - Store 10 numbers in different variables.
var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;
var num7 = 7;
var num8 = 8;
var num9 = 9;
var num10 = 10;
//  - Add all of them and print the SUM.
var sum = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10);
console.log(sum);
//  - Print the Difference (subtraction).
var subtraction = (num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10);
console.log(subtraction);
//  - Print the result after multiplying all.
var multiplying = (num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10);
console.log(multiplying);
// - Take two numbers and print the division result.
var division = (num6 / num2);
console.log(division);
// - Now, perform all four operations with the given numbers, print the results, and observe the order in which the operations take place.
var performAllOPerations = (num1 + num2 - num3 * num4 / num5);
console.log(performAllOPerations);
//  Assignment 2
// Exercise 1:  Write a program that calculates the area of a rectangle. 
var rectangleLength = 12;
var rectangleWeigth = 30;
var area = (rectangleLength * rectangleWeigth);
console.log(area);
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
var input = 4;
var areaOfCube = (input * input);
console.log(areaOfCube);
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
var inputNumber = 2;
if (inputNumber > 0) {
    console.log("number is positive");
}
else if (inputNumber < 0) {
    console.log("number is negative or zero");
}
// Exercise 4:   Write a program that checks if a given number is even or odd.
var num = 5;
if (num % 2 == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd");
}
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
var age = 19;
if (age >= 19) {
    console.log("you are eligible for vote");
}
else if (age < 19) {
    console.log("you are nit eligible for this vote");
}
else {
    console.log("please enter a valid age");
}
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
var calculates = ((10 + 5) * 3 - 2) / ((4 % 3) - 7);
console.log(calculates);
// Assignment 3
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice versa.
var temCelsius = 34;
var tempFahrenheit = temCelsius * (9 / 5) + 32;
console.log("temperature in Fahrenheit", tempFahrenheit);
//  - Write a program that calculates the percentage.
var eng = 80;
var urd = 70;
var math = 85;
var total = 300;
var sum = eng + urd + math;
var percentage = (sum / total) * 100;
console.log(percentage);
// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var days = 62;
var weeks = Math.floor(days / 7);
var day = days % 7;
console.log(`Weeks are ${weeks} and days is ${day}`);
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var totalPrice = 500;
if (totalPrice > 100) {
    var discount = totalPrice * 10 / 100;
    console.log("10% discount of total price = ", discount);
}
else if (totalPrice < 100) {
    var discount = totalPrice * 5 / 100;
    console.log("5% discount of total price = ", discount);
}
else {
    console.log("enter a valid amount.");
}
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userAge = 12;
if (userAge <= 12) {
    console.log("Child");
}
else if (userAge <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 16;
if (temperature <= 17) {
    console.log("wear warm clothes");
}
else if (temperature >= 25) {
    console.log("wear normal clothes");
}
else {
    console.log("wear thin clothes");
}
// - Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var userNum = 24;
if (userNum % 3 == 0 && userNum % 5 == 0) {
    console.log("the given number is divisible by both 3 or 5");
}
else if (userNum % 3 == 0) {
    console.log("the given number is divisible by 3");
}
else if (userNum % 5 == 0) {
    console.log("the given number is divisible by 5");
}
else {
    console.log("the given number is not divisible by both 3 or 5");
}
// - Write a program that checks if the given year is leap year or not.
var year = 2023;
if (year % 4 == 0) {
    console.log("It is a leap year");
}
else {
    console.log("It is not a leap year");
}
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var weekDay = 3;
if (weekDay == 1) {
    console.log("today is monday");
}
else if (weekDay == 2) {
    console.log("today is tuesday");
}
else if (weekDay == 3) {
    console.log("today is wednesday");
}
else if (weekDay == 4) {
    console.log("today is thursday");
}
else if (weekDay == 5) {
    console.log("today is friday");
}
else if (weekDay == 6) {
    console.log("today is sathurday");
}
else if (weekDay == 7) {
    console.log("today is suday");
}
else {
    console.log("wrong input");
}
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater
// than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var units = 149;
var costOfUnit = 43;
if (units > 100 && units < 200) {
    units = units * 10 / 100 + units;
    console.log(units);
}
else if (units > 200 && units < 300) {
    units = units * 15 / 100 + units;
    console.log(units);
}
else if (units > 300 && units < 500) {
    units = units * 20 / 100 + units;
    console.log(units);
}
else if (units > 500) {
    units = units * 25 / 100 + units;
    console.log(units);
}
else {
    console.log("valid input");
}
var bill = units * costOfUnit;
console.log(bill);
// Assignment 4
// - Create a function that takes an array, an index, and a value as parameters. Inside the function,
// use the splice method to insert the value at the specified index in the array. Return the modified array.
function modify(arry, index, value) {
    arry.splice(index, 0, value);
    return arry;
}
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valu = 17;
let indx = 4;
console.log(modify(arra, indx, valu));
// 2  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var shopingcart = ["books", "stationary", "bag", "watch", "uniform"];
function modifycart(arys, indexe, value) {
    arys.splice(indexe, 3, value);
    // console.log(arys);
    return arys;
}
var val = "choclate";
var indexe = 2;
console.log(modifycart(shopingcart, indexe, val));
// 3 - Write a program that uses a while loop to print the first 25 integers.
var n1 = 1;
while (n1 <= 25) {
    console.log(n1);
    n1++;
}
// 4 - Write a program that uses a while loop to print the first 10 even numbers.
var n2 = 1;
while (n2 <= 20) {
    if (n2 % 2 == 0) {
        console.log(n2);
    }
    n2++;
}
//5- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function fact(num1) {
    var num2 = num1 - 1;
    if (num1 > 0) {
        while (num1 > 0) {
            num2 = num2 * num1;
            num1--;
        }
        console.log(num2);
    }
    return num1;
}
var factoria = fact(5);
console.log(factoria);
// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegatives(array) {
    // Create a new array to store the positive numbers.
    const positiveNumbers = [];
    // Iterate over the original array.
    for (const number of array) {
        // If the number is positive, add it to the new array.
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }
    // Return the new array.
    return positiveNumbers;
}
const aray = [1, -2, 3, -4, 5, 7, 23, -1234, 50];
const positiveNumbers = removeNegatives(aray);
console.log(positiveNumbers); // [1, 3, 5]
// 7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
var numbAry = [1, 2, 3, 6, 7, 8, 9];
function numbArry(num8) {
    var ind = 0;
    var sums = 0;
    while (ind < num8.length) {
        sums = sums + num8[ind];
        ind++;
    }
    return sums;
}
console.log(numbArry(numbAry));
// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var tempinc1 = [9, 20, 1, 17];
var tempinf1 = tempinc1[0] * 9 / 5 + 32;
console.log(tempinf1);
var tempinf2 = tempinc1[1] * 9 / 5 + 32;
console.log(tempinf2);
var tempinf3 = tempinc1[2] * 9 / 5 + 32;
console.log(tempinf3);
var tempinf4 = tempinc1[3] * 9 / 5 + 32;
console.log(tempinf4);
var tempinf5 = tempinc1[3] * 9 / 5 + 32;
console.log(tempinf5);
// Assignment 5
// Write the program that uses filter to remove all negative numbers from an array of number
let arr2 = [2, 4, -5, -6, 12, -1];
console.log("Original Array", arr2);
let arriUpdated1 = arr2.filter((data) => {
    if (data > 0) {
        return data;
    }
});
console.log("Updated Data", arriUpdated1);
// Given an array of string [apple,banana,cheery, date, grape, ] use the filter method to create the new array containing only the fruits with more than 5 characters?
let FruitArray = ["apple", "banana", "cheery", "date", "grape"];
console.log('Fruits', FruitArray);
let NewFruitArray = FruitArray.filter((arr) => {
    return arr.length > 5;
});
console.log('Updated Fruits', NewFruitArray);
// Given of array of number[1,2,3,4,5], use the map method to create a new array where each number is multiply by 2?
let arr1 = [1, 2, 3, 4, 5];
console.log("Original Data ", arr1); //original array
let arriUpdated = arr1.map((data) => {
    return data * 2;
});
console.log("Updated Data", arriUpdated);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers?
let arrSaqure = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original Value of Array ', arrSaqure);
let SaqureEvenNumber = arrSaqure.filter((evenNum) => {
    return evenNum % 2 == 0;
}).map((evenNum) => {
    return evenNum * evenNum;
});
console.log('Saqure of evan number', SaqureEvenNumber);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.?
let tempOfCalsius = [0, 10, 20, 30, 40];
console.log('Temperature of Celsius', tempOfCalsius);
let tempToFahrnheit = tempOfCalsius.map((Celsius) => {
    return (Celsius * 9 / 5) + 32;
});
console.log('Celsius to Fahrnheit', tempToFahrnheit);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers in typescript?
let OldNumberValue = [3, 6, 9, 12, 15, 18];
console.log('Original Value of array', OldNumberValue);
let DoubleOddNumber = OldNumberValue.filter((value) => {
    return value % 2 !== 0;
}).map((OddValue) => {
    return OddValue * 2;
});
console.log('Double Odd Numbers', DoubleOddNumber);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"?
let UserName = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log('Original Name', UserName);
UserName.forEach((name) => {
    console.log(name + '!');
});
// Assignment 6
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfEvenNumber(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if ((i % 2) == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvenNumber(10));
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element % 2 == 0) {
        console.log(element);
    }
}
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let aryOfNumbers = [1, 2, 3, 4, 53, 34, 756, 324, 21];
for (let index = 0; index < aryOfNumbers.length; index++) {
    const element = aryOfNumbers[index];
    if (element % 2 == 1) {
        console.log(element);
    }
}
// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    let formula = 3.14 * (radius ** 2);
    return formula;
}
console.log("area of circle is aproximately ", areaOfCircle(7));
// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var Passinggrades = (gradesarry) => {
    for (let index = gradesarry.length - 1; index >= 0; index--) {
        if (gradesarry[index] < 50) {
            gradesarry.splice(index, 1);
        }
    }
    return gradesarry;
};
var Passinggrades1 = Passinggrades([43, 67, 58, 97, 19, 52, 34, 56, 34, 29, 13, 44, 23, 42, 8, 66, 23, 74, 39]);
console.log(Passinggrades1);
// - Write a program that uses a function to find the largest element in an array of numbers.
function findnumb(arry) {
    let largest = arry[0];
    for (let i = 0; i <= arry.length; i++) {
        if (arry[i] > largest) {
            largest = arry[i];
        }
    }
    return largest;
}
var findnumb1 = findnumb([1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 64, 227, 24, 7, 97]);
console.log(findnumb1);
