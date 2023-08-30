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
