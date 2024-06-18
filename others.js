//Age
var currentYear = new Date().getFullYear();
// Changing the age to a desired number
var desiredAge = currentYear-2003;

// Select the <p> element by its id
var ageElement = document.getElementById('currentYear');

// Update the text content inside the <p> element
ageElement.childNodes[1].textContent = ' '+ desiredAge;

//cgpa
// Changing the CGPA to a desired number
var desiredCGPA = 7.98;

// Select the <h4> element by its id
var cgpaElement = document.getElementById('cgpa');

// Update the text content inside the <h4> element
cgpaElement.textContent = 'CGPA - ' + desiredCGPA.toFixed(2); // Using toFixed to format to two decimal places