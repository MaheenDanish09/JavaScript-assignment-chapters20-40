//////////FUNCTION//////////

// QUESTION 1 //
// function date (){
// document.writeln(new Date());
// }
// date();

// QUESTION 2 //
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// function fullName (){
    // alert("Hello " + firstName + " " + lastName);
// }
// fullName();

// QUESTION 3 //
// function add (){
    // let num1 = parseFloat(prompt("Enter the first number"));
    // let num2 = parseFloat(prompt("Enter the second number"));
    // let sum = num1 + num2;
    // return sum;
// }
// let result = add();
// alert("The sum is " + result);

// QUESTION 4 //
// function calculate (){
    // let num1 = parseFloat(prompt("Enter first number:"));
    // let num2 = parseFloat(prompt("Enter second number:"));
    // let operator = prompt("Enter operation (+, -, *, /):");
    // let result;
    // if(operator === "+"){
        // result = num1 + num2;
    // }else if(operator === "-"){
        // result = num2 - num1;
    // }else if(operator === "*"){
        // result = num1 * num2;
    // }else if(operator === "/"){
    //   result = num1 / num2;  
    // }else{
        // return "Invalid operation";
    // }
    // return result;
// }
// let answer = calculate();
// alert("Result: " + answer);

// QUESTION 5 //
// function square(num){
    // return num*num;
// }
// let result = square(5);
// alert("Squared value is: " + result);

// QUESTION 6 //
// function factorial (n){
    // if(n < 0){
        // return "Factorial is not defined for negative numbers";
    // }
    // let result = 1;
    // for(let i = 2; i <= n; i++){
        // result *= i;
    // }
    // return result;
// }
// document.writeln(factorial(10));

// QUESTION 7 //
// function counting (){
    // let num1 = Number(prompt("Enter the first number"));
    // let num2 = Number(prompt("Enter the second number"));
// for(let i = num1; i <= num2; i++){
    // document.writeln(i + "<br>");
// }}
// counting();

// QUESTION 8 //
// function calculateHypotenuse (base, perpendicular){
    // function calculateSquare (x){
// return x * x;}
    // let baseSquare = calculateSquare(base);
    // let perpendicularSquare = calculateSquare(perpendicular);
    // let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    // return hypotenuse;}
// let base = parseInt(prompt("Enter the base value:"));
// let perpendicular = parseInt(prompt("Enter the perpendicular value:"));
// let result = calculateHypotenuse(base, perpendicular);
// alert("Hypotenuse = " + result);

// QUESTION 9 //
// function calculateArea (width,height){
    // return width * height;}
// let area1 = calculateArea(5,10);
// document.writeln("Area (arguments as values): " + area1 + "<br>");
// let width = 2;
// let height = 15;
// let area2 = calculateArea(width,height);
// document.writeln("Area (arguments as variables): " + area2);

// QUESTION 10 //
// function isPalindrome(){
    // let input = prompt("Enter a string to check if it is a palindrome");
    // let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // let reversed = cleaned.split("").reverse().join("");
    // if(cleaned === reversed){
        // alert("It is a palidrome!");
    // }else{
        // alert("It is not a palindrome");
    // }}
// isPalindrome();

// QUESTION 11 //
// function capitalize(str){
    // let words = str.split(" ");
    // let result = [];
    // for (let i = 0; i < words.length; i++) {
    // let word = words[i];
    // let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    // result.push(capitalized);}
//   return result.join(" ");}
// let input = prompt("Enter a lowercase string to capitalize it");
// let output = capitalize(input);
// document.writeln(output);

// QUESTION 12 //
// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
// for (let i = 0; i < words.length; i++) {
// if (words[i].length > longest.length) {
// longest = words[i];
// }}
// return longest;}
// let input = prompt("Enter a string to find the longest word in it");
// let output = findLongestWord(input);
// document.writeln("The longest word is " + "'" + output +"'");

// QUESTION 13 //
// function countLetter(str, letter) {
//   let count = 0;
// for (let i = 0; i < str.length; i++) {
// if (str[i] === letter) {
// count++;
// }}
//   return count;}
// let result = countLetter("JSResourceS.com", "o");
// alert(result);

// QUESTION 14 //
// function calcCircumference(radius) {
//   let circumference = 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//   let area = Math.PI * radius * radius;
// }
// let input = prompt("Enter the radius of the circle:");

// let radius = parseFloat(input);

// if (isNaN(radius) || radius <= 0) {
//   alert("Please enter a valid positive number for the radius!");
// } else {
//   let circumference = calcCircumference(radius);
//   let area = calcArea(radius);

//   alert("The circumference is " + circumference.toFixed(2));
//   alert("The area is " + area.toFixed(2));}