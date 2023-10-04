
// Q: no 1

function displayCurrentDateTime() {
   
    const currentDate = new Date();
  
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
 
    alert(dateTimeString); 
  displayCurrentDateTime();
  

//   Q: no 2
  
  function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    alert(`Hello, ${fullName}!`);
  }
  
  greetUser("John", "Doe");
  
//   Q: no 3

  function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  

  const number1 = parseFloat(prompt("Enter the first number:"));
  const number2 = parseFloat(prompt("Enter the second number:"));
  
  const result = addNumbers(number1, number2);
  alert(`The sum is: ${result}`);
  
//   Q: no 4

  function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Division by zero is not allowed";
        }
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }
  
  
  const number1 = 10;
  const number2 = 5;
  const operation = "+";
  const result = calculator(number1, number2, operation);
  alert(`Result: ${result}`);
  
//   Q: no 5

  function square(number) {
    return number * number;
  }
  
  
  const numberToSquare = 5;
  const squaredNumber = square(numberToSquare);
  alert(`Square of ${numberToSquare} is ${squaredNumber}`);
  
//   Q: no 6

  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  
  const numToCalculateFactorial = 5;
  const resultFactorial = factorial(numToCalculateFactorial);
  alert(`Factorial of ${numToCalculateFactorial} is ${resultFactorial}`);
  

//   Q: no 7

  function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }
  
  displayCounting(1, 10); 
  Q: no 8
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
      return number * number;
    }
  
    const baseSquared = calculateSquare(base);
    const perpendicularSquared = calculateSquare(perpendicular);
  
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
  }
  
 
  const baseLength = 3;
  const perpendicularLength = 4;
  const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
  console.log(`Hypotenuse: ${hypotenuse}`);
  
// /  Q: no 9
 
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  
  const width = 5;
  const height = 8;
  const area = calculateRectangleArea(width, height);
  console.log(`Rectangle Area: ${area}`);
  
//   Q: no 10

  function isPalindrome(str) {
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }
  
  
  const inputString = "madam";
  const isPalindromic = isPalindrome(inputString);
  console.log(`Is "${inputString}" a palindrome? ${isPalindromic}`);
  
//   Q: no 11

  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }
  
  const inputString = "the quick brown fox";
  const capitalizedString = capitalizeWords(inputString);
  console.log(`Capitalized: ${capitalizedString}`);
  
//   Q: no 12

  function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  

  const inputString = "Web Development Tutorial";
  const longestWord = findLongestWord(inputString);
  console.log(`Longest word: ${longestWord}`);
  
//   Q: no 13

  function countLetterOccurrences(str, letter) {
    const regex = new RegExp(letter, 'g');
    const count = (str.match(regex) || []).length;
    return count;
  }
  

  const inputString = 'JSResourceS.com';
  const letterToCount = 'o';
  const occurrences = countLetterOccurrences(inputString, letterToCount);
  console.log(`Number of occurrences of '${letterToCount}' in '${inputString}': ${occurrences}`);
  
  //   Q: no 14

 
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
  }

  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
  }
  

  const circleRadius = 5;
  calcCircumference(circleRadius);
  calcArea(circleRadius);
  