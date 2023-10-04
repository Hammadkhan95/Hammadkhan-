1. var cityName = prompt("Enter the name of your city:");

if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights!");
} else {
  alert("Welcome to " + cityName);
}

2. var gender = prompt("Enter your gender (male):");

if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
  alert("Good Morning!");
}

3. var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");

switch (color.toLowerCase()) {
  case "red":
    alert("Stop! The traffic signal is red.");
    break;
  case "yellow":
    alert("Prepare to stop. The traffic signal is yellow.");
    break;
  case "green":
    alert("Go ahead. The traffic signal is green.");
    break;
  default:
    alert("Invalid color. Please enter red, yellow, or green.");
}
4.var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert("You have enough fuel.");
}


5. (a). var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
Alert: "given condition for variable a is true"

(b). var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
(c).  var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

(d). var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
(e). if (true){
    alert("True");
  }
  if (false){
    alert("False");
  }
(f) .if("car" < "cat"){
    alert("car is smaller than cat");
  }
   
  6. 
  var subject1Marks = parseFloat(prompt("Enter marks for Subject 1:"));
  var subject2Marks = parseFloat(prompt("Enter marks for Subject 2:"));
  var subject3Marks = parseFloat(prompt("Enter marks for Subject 3:"));
  var totalMarks = parseFloat(prompt("Enter the total marks:"));
  
 
  var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
  var percentage = (obtainedMarks / totalMarks) * 100;

  var grade;
  
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  
  
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Obtained Marks: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br>");
  document.write("Grade: " + grade + "<br>");

7.
var secretNumber = Math.floor(Math.random() * 10) + 1;


var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
}


8.
var userInput = parseInt(prompt("Enter a number:"));


if (userInput % 3 === 0) {
  alert(userInput + " is divisible by 3.");
} else {
  alert(userInput + " is not divisible by 3.");
}
9. 
var userInput = parseInt(prompt("Enter a number:"));


if (userInput % 2 === 0) {
  alert(userInput + " is an even number.");
} else {
  alert(userInput + " is an odd number.");
}
10.

var temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));


if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so cool.");
} else {
  alert("It's freezing outside!");
}
11.
var num1 = parseFloat(prompt("Enter the first number:"));


var num2 = parseFloat(prompt("Enter the second number:"));


var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    alert("Division by zero is not allowed.");
  }
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation. Please enter +, -, *, /, or %.");
}


if (result !== undefined) {
  alert("Result: " + result);
}





  chapter 2

  1.
  var inputChar = prompt("Enter a character:");
  
 
  var charCode = inputChar.charCodeAt(0);
  
  
  if (!isNaN(inputChar)) {
    alert(inputChar + " is a number.");
  }
 
  else if (charCode >= 65 && charCode <= 90) {
    alert(inputChar + " is an uppercase letter.");
  }
  
  else if (charCode >= 97 && charCode <= 122) {
    alert(inputChar + " is a lowercase letter.");
  }
 
  else {
    alert(inputChar + " is not a number or a letter.");
  }
  2.

var num1 = parseInt(prompt("Enter the first integer:"));


var num2 = parseInt(prompt("Enter the second integer:"));


if (num1 > num2) {
  alert(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  alert(num2 + " is larger than " + num1);
} else {
  alert("Both integers are equal: " + num1);
}
3.

const userInput = prompt("Enter a number:");


const number = parseFloat(userInput);


if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
 
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}
4.

function isVowel(char) {
  
    char = char.toLowerCase();

    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
  }
  
  const userInput = prompt("Enter a character:");

  if (userInput.length === 1) {
    const character = userInput[0];
    const result = isVowel(character);
  
    
    if (result) {
      console.log(`${character} is a vowel.`);
    } else {
      console.log(`${character} is not a vowel.`);
    }
  } else {
    console.log("Please enter a single character.");
  }
  5.
  const correctPassword = "mySecretPassword";
  

  const userEnteredPassword = prompt("Enter your password:");
  
  
  if (!userEnteredPassword) {
    console.log("Please enter your password.");
  } else if (userEnteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
  } else {
    console.log("Incorrect password.");
  }
  6.
  var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
7.

const userInput = prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):");


const time = parseInt(userInput);


if (!isNaN(time)) {
  if (time >= 0 && time < 1200) {
    console.log("Good morning!");
  } else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
  } else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
  } else if (time >= 2100 && time < 2400) {
    console.log("Good night!");
  } else {
    console.log("Invalid time input.");
  }
} else {
  console.log("Invalid input. Please enter a valid time in 24-hour format.");
}



