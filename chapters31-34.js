//////////DATE METHODS//////////

// QUESTION 1 //
// let date = new Date();
// document.writeln(date);

// QUESTION 2 //
// let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// let currentMonth = new Date().getMonth();
// document.writeln("Current Month: " + months[currentMonth]);

// QUESTION 3 //
// let days = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"];
// let currentDay = new Date().getDay();
// document.writeln("Today is " + days[currentDay]);

// QUESTION 4 //
// let currentDay = new Date().getDay();
// if(currentDay === "0" || currentDay === "6"){
// alert("It's Fun Day");
// };

// QUESTION 5 //
// var date = new Date().getMonth();
// if(date <= 16){
// document.writeln("First fifteen days of the month");
// }else{
// document.writeln("Last fifteen days of the month");
// };

// QUESTION 6 //
// document.writeln("Current Date: " + new Date() + "<br>" + "Elapsed milliseconds since January 1, 1970: " + new Date().getTime() + "<br>" + "Elapsed minutes since January 1, 1970: " + new Date().getTime()/60000);

// QUESTION 7 //
// let time = new Date().getHours();
// if(time < 12){
// alert("It's AM");
// }else{
// alert("It's PM");
// };

// QUESTION 8 //
// let laterDate = new Date(2030, 11, 31);
// document.writeln("Later Date: " + laterDate);

// QUESTION 9 //
// var ramadanStart = new Date("February 18, 2026");
// var today = new Date();
// var daysPassed = Math.floor((today - ramadanStart)/(1000 * 60 * 60 * 24));
// document.writeln(daysPassed + " days have passed since 1st Ramadan");

// QUESTION 10 //
// var referenceDate = new Date();
// var startDate = new Date("January 1, 2026 00:00:00");
// var difference = referenceDate - startDate;
// document.writeln("On reference date " + referenceDate + ",<br>" + Math.floor(difference/1000) + " seconds have passed since beginning of 2026");

// QUESTION 11 //
// var date = new Date();
// var time = date.getHours();
// date.setHours(time - 1);
// document.writeln("Current Date: " + new Date() + "<br>" + "1 hour ago,it was " + date);

// QUESTION 12 //
// var date = new Date();
// var setBackDate = date.getFullYear();
// date.setFullYear(setBackDate - 100);
// document.writeln("Current Date: " + new Date() + "<br>" + "100 years back,it was " + date);

// QUESTION 13 //
// let age = prompt("Enter your age");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.writeln("Your age is " + age + "<br>" + "Your birth year is " + birthYear);

// QUESTION 14 //
// document.writeln("<h1>K-Electric Bill</h1>");
// let userName = "Maheen";
// let month ="March";
// let units = 410;
// let charges = 16;
// let netAmntPayable = units * charges;
// let paySurcharge = 350;
// let grossAmntPayable = netAmntPayable + paySurcharge;
// document.writeln("Customer name: " + userName + "<br>" + "Current month: " + month + "<br>" + "Number of units: " + units + "<br>" + "Charges per unit: " + charges + "<br><br>" + "Net Amount Payable (within Due Date): " + netAmntPayable + "<br>" + "Late payment surcharge: " + paySurcharge + "<br>" + "Gross Amount Payable (after Due Date): " + grossAmntPayable);