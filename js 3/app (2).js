// Question no 1.

let futureStudentNames = [];

futureStudentNames.push("John");
futureStudentNames.push("Jane");


console.log(futureStudentNames)


// Question no 3..

var colors = ["red", "green", "blue", "yellow"];

// Question no 4..

var numbers = [1, 2, 3, 4, 5];

// Question no 5..


var booleanValues = [true, false, true, false];

// Question no 6..

var mixedArray = ["apple", 42, true, "banana", 7.5, false];

// Question no 7..

// Declare and initialize an array of education qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the list of qualifications in the browser
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ol>");

for (let i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ol>");


// Question no 8..

// Create arrays to store student names and scores
let studentNames = ["John", "Jane", "Alice"];
let studentScores = [420, 480, 380]; // Assuming scores out of 500

// Calculate percentages and display the information
document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<ul>");

for (let i = 0; i < studentNames.length; i++) {
  let name = studentNames[i];
  let score = studentScores[i];
  let percentage = (score / 500) * 100;

  document.write("<li>");
  document.write("<strong>Name:</strong> " + name + "<br>");
  document.write("<strong>Score:</strong> " + score + " out of 500<br>");
  document.write("<strong>Percentage:</strong> " + percentage.toFixed(2) + "%");
  document.write("</li>");
}

document.write("</ul>");


// Question no 8...
// Initialize an array with color names
let colorNames = ["Red", "Green", "Blue", "Yellow"];

// Display the original array in the browser
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// a. Ask the user what color to add to the beginning
let colorToAddToBeginning = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(colorToAddToBeginning);

// Display the updated array after adding to the beginning
document.write("<h2>Updated Array After Adding to the Beginning:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// b. Ask the user what color to add to the end
let colorToAddToEnd = prompt("Enter a color to add to the end of the array:");
colorNames.push(colorToAddToEnd);

// Display the updated array after adding to the end
document.write("<h2>Updated Array After Adding to the End:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// c. Add two more colors to the beginning
colorNames.unshift("Purple", "Orange");

// Display the updated array after adding two more to the beginning
document.write("<h2>Updated Array After Adding Two More to the Beginning:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// d. Delete the first color in the array
colorNames.shift();

// Display the updated array after deleting the first color
document.write("<h2>Updated Array After Deleting the First Color:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// e. Delete the last color in the array
colorNames.pop();

// Display the updated array after deleting the last color
document.write("<h2>Updated Array After Deleting the Last Color:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// f. Ask the user at which index to add a color
let indexToAddColor = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color name to add at the specified index:");
colorNames.splice(indexToAddColor, 0, colorToAddAtIndex);

// Display the updated array after adding a color at the specified index
document.write("<h2>Updated Array After Adding a Color at a Specific Index:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// g. Ask the user at which index to delete color(s) and how many colors to delete
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorNames.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array after deleting color(s) at the specified index
document.write("<h2>Updated Array After Deleting Color(s) at a Specific Index:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");


// Question no 9...

// Array sort ??

// Question no 11..

// list of city arays.

let cityNames = ["karachi", "lahore", "islamabad", "Quetta","thattha"];

document.write( "Origional cites <br> " + cityNames)

 selectedCities = cityNames.slice(0,3);

document.write(" <strong> Selected Cities </strong> " + "")
document.write("<h4> City copies: </h4> " + "<br>" + selectedCities + "<br>" )

// Question no 12..


// Array join method ??/

// Question no 13..

// Create an empty array
let fifoArray = [];

// Add values to the array in FIFO order
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Monitor");

// Access values in the order they were stored (FIFO)
let firstValue = fifoArray.shift(); // Removes and returns "Value 1"
let secondValue = fifoArray.shift(); // Removes and returns "Value 2"
let thirdValue = fifoArray.shift(); // Removes and returns "Value 3"

console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);
console.log("Third Value:", thirdValue);


// Question no 14...

// Create an array of phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Begin the HTML code to create the dropdown/select menu
document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
document.write("<select id='manufacturer' name='manufacturer'>");

// Loop through the array and create an option for each manufacturer
for (let i = 0; i < phoneManufacturers.length; i++) {
  let manufacturer = phoneManufacturers[i];
  document.write("<option value='" + manufacturer + "'>" + manufacturer + "</option>");
}

// Close the select element and display it in the browser
document.write("</select>");
 