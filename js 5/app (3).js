
//         Chapter 21 (Changing Case)


//  Question no 1...

userInput = "Hammad";
var allLower = userInput.toLowerCase();


// Question no 2....

x = "pakistan"

x = x.toLowerCase();

// Question no 3....

y = "muhammad"

y = y.toUpperCase();

// Question no 4....

var originalVariable = "Muhammad Hammad"; 
var newVariable = originalVariable.toLowerCase();


// Question no 5....


var myArray = ["Hello","World","Hammad"]; 
var newArrayElement = myArray[0].toLowerCase();

// Question no 6....

var myString = "Muhammad Hammad"; 
var uppercaseString = myString.toUpperCase();
alert(uppercaseString);

// Question no 7....

var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedName);


//      Chapter 22 - 25 (Strings)

// Question no 1....


var words = "captain";

words = words.slice(1,3)

console.log(words)


// Question no 2....

var cityName = "Karachi";
var characterCount = cityName.length;

// Question no 3...


var animal = "elephant";

var seg = animal.slice(2,6)

console.log(seg)

// Question no 4...


var inputString = "MUhammad Hammad";
var characterCount = inputString.length;

console.log("Muhammad asif word has; " + characterCount + " Lenghts.." )

// Question no 5...

var myString = "Hammad Shahid"; 
var characterCount = myString.length;
var newString = myString.slice(1, -3); 

console.log(newString)


// Question no 6...
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx)

// Question no 7...


var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

console.log(indx)


// Question no 8...

var text = "You can go wherever you want to go.";
var indx = text.lastIndexOf("go");
indx = text.lastIndexOf("go", indx - 1);
console.log(indx)


// Question no 9...

var indexNum = 23432;
var yourString = "Hammad"

if (indexNum >= 0 && indexNum < yourString.length) {
    
  }

//   QUestion no 10..


var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);
console.log(characterAtIndex2); 

// Question no 11...


var text = "YourStringHere"; // Replace with your actual string
var cha = text.charAt(9); // Get the 10th character (index 9)

// question no 12...

var str = "YourStringHere"; // Replace with your actual string
var x = str.charAt(str.length - 1); // Get the last character

// Question no 13...

var input = "YourStringHere"; // Replace with your actual string
var cha = input.charAt(4); // Get the 5th character (index 4)

// Question no 14...

if (yourString.length >= 3 && yourString.charAt(2) === 'YourCharacter') {
  }

//   Question no 15...

var reply = "no, I don't know. no, I'm not sure.";
var characterArray = []; // Declare an empty array to hold characters

for (var i = 0; i < reply.length; i++) {
  characterArray.push(reply.charAt(i)); // Push each character to the array
}

var revisedReply = reply.replace("no", "yes"); // Replace the first "no" with "yes"

// Question no 16...

var str = "Your string with 1 and more 1s.";
var newStr = str.replace("1", "one");

console.log(newStr)


// Question no 17...

var y = x.replace(/a/g, "z");

//      Chapter 26 (Rounding Numbers)

// Question no 1...

var roundedNumber = Math.round(5.7);
console.log(roundedNumber)

// Question no 2...

var roundNum = Math.ceil(7.6);

console.log(roundNum);


// Question no 3...

var roundNum = Math.floor(20.6);
console.log(roundNum)

// Question no 4...

var yourNumber = 3.14159; // Replace with your actual number
var roundedNumber = Math.round(yourNumber);
console.log(yourNumber)

// Question no 5...

var roundedValue = Math.round(0.5);
console.log(roundedValue)

//          Chapter 27 (Random Numbers)




// Question no 1...

var randomNumber = Math.floor(Math.random() * 50) + 1;

console.log(randomNumber);

// Question no 2...

var randomValue = Math.random();

console.log(randomNumber);

// Question no 3..

var diceRoll = Math.floor(Math.random() * 6) + 1;

console.log("your dice roll is; " + diceRoll  )

// Question no 4...
var coinToss = Math.random() < 0.5 ? "head" : "tail";
console.log(coinToss)



// Chapter 28, 29 (Converting Strings)


// Question no 1....

var str = "42";
var integer = parseInt(str);

console.log(integer)

// Question no 2...

var str = "3.14";
var floatingPoint = parseFloat(str);

console.log(floatingPoint)

// Question no 3...


var str = "42";
if (!isNaN(str)) {
  // Conversion to a number is possible
  var number = parseFloat(str);
}

// Question no 4...

var num = 42;
var str1 = num.toString();
var str2 = num + "";

// Question no 5...


var str = "3.14";
var integer = parseInt(str); // This will result in 3

// Question no 6

//      Chapter 30 (Controlling the length of  decimals)

// Question no 1...

var num = 12.34567;
var newNum = num.toFixed(4).toString();
console.log(newNum)


// Question no 2...

var num = 9.87654;
num = parseFloat(num.toFixed(2));

console.log(num)

// Question no 3...



if (num.toFixed(2).toString().length > 4) {
    // Rest of your code goes here if the condition is met.
  }


// Question no 4...
var largeNumber = 123.456789;
var roundedString = largeNumber.toFixed(2).toString();
alert(roundedString);

// Question no 5..










