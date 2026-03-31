//////////FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS //////////
//QUESTION 1//
// function power(a,b){
// let result = 1;
// let exponent = b;
// if(b < 0){
// exponent = -b;}
// for(let i = 0; i < exponent; i++){
// result *= a;}
//  if (b < 0) {
// result = 1 / result;}
// return result;
// }
// console.log(power(2, 3));
// console.log(power(5, 0));
// console.log(power(2, -2));

//QUESTION 2//
// function isLeapYear(year){
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// return true;
// } else {
// return false;
// }}
// let input = prompt("Enter a year:");
// let year = parseInt(input);
// if (isNaN(year) || year <= 0) {
//   alert("Please enter a valid positive year!");
// } else {
//   if (isLeapYear(year)) {
//     alert(year + " is a leap year.");
//   } else {
//     alert(year + " is not a leap year.");
//   }
// }

//QUESTION 3//
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let S = calculateSemiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// let area = calculateArea(5, 6, 7);
// alert("Area of triangle:" + area);

//QUESTION 4//
// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//    let totalMarks = 300;
//     let obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction() {
//     let avg = average(80, 75, 90);
//     let perc = percentage(80, 75, 90);
//     alert("Average:"+ avg);
//     alert("Percentage:" + perc + "%");
// }
// mainFunction();

//QUESTION 5//
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//         return i;
// }}
//     return -1;
// }
// alert(customIndexOf("hello", "e"));
// alert(customIndexOf("world", "z"));

//QUESTION 6//
// function removeVowels(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         let ch = sentence[i].toLowerCase();
//         if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += sentence[i];
// }}
//     return result;
// }
// let sentence = "Hello World";
// let output = removeVowels(sentence);
// alert("Original: "+ sentence);
// alert("Without vowels: "+ output);

//QUESTION 7//
// function countVowelPairs(text) {
//     let count = 0;
//     let vowels = "aeiou";
//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i].toLowerCase();
//         let second = text[i + 1].toLowerCase();
//         if (vowels.includes(first) && vowels.includes(second)) {
//             count++;
//             console.log("Found pair:", first + second);
// }}
//     return count;
// }
// let sentence = "Pleases read this application and give me gratuity";

// let result = countVowelPairs(sentence);
// alert("Total consecutive vowel pairs: "+ result);

//QUESTION 8//
// function toMeters(km) {
//     return km * 1000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// function main() {
//     let distanceKm = 5;
//     document.writeln("Centimeters:", toCentimeters(distanceKm) + "<br>");
//     document.writeln("Distance in KM:", distanceKm + "<br>");
//     document.writeln("Meters:", toMeters(distanceKm) + "<br>");
//     document.writeln("Feet:", toFeet(distanceKm) + "<br>");
//     document.writeln("Inches:", toInches(distanceKm));
// }
// main();

//QUESTION 9//
// function calculateOvertime(hoursWorked) {
//     let overtimeRate = 12;
//     if (hoursWorked > 40) {
//         let overtimeHours = hoursWorked - 40;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
// }}
// function main() {
//     let hours = 50;
//     let overtimePay = calculateOvertime(hours);
//     document.writeln("Hours Worked: "+ hours + "<br>");
//     document.writeln("Overtime Pay: Rs. "+ overtimePay);
// }
// main();

//QUESTION 10//
// function calculateNotes(amount) {
//     let hundreds = 0, fifties = 0, tens = 0;
//     hundreds = Math.floor(amount / 100);
//     amount = amount % 100;
//     fifties = Math.floor(amount / 50);
//     amount = amount % 50;
//     tens = Math.floor(amount / 10);
// document.writeln("100 notes: "+ hundreds +"<br>");
// document.writeln("50 notes: "+ fifties +"<br>");
// document.writeln("10 notes: "+ tens);
// }
// function main() {
//      let input = prompt("Enter the amount to withdraw (multiple of 10):");
//      let amount = parseInt(input);
//      if (isNaN(amount) || amount <= 0 || amount % 10 !== 0) {
//         document.writeln("Invalid input! Enter a positive amount in multiples of 10.");
//         return;
//     }
//     calculateNotes(amount);
// }
// main();