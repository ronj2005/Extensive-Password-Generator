// variable queryselector to access through elements within the current HTML
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// variables
var charSetLower = "abcdefghijklmnopqrstuvwxyz";
var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "1234567890"
var specialCharSet = String.fromCharCode(33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63);


// Fuction writes password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Fuction generates password promp gather input string value
function generatePassword () {
  var userSelection = "";
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters");
  
  // if statement end the statment if user input does not meet set perameter requirements
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("PLEASE ENTER A VALID LENGTH ENTRY!")
    return;
  }
// if statement checks to make sure string value is within set perameter limits
var numConfirm = confirm("Would you like to use numbers?");
if (numConfirm) {
  userSelection += numSet; 
}
 // if statement checks if user wants to select lowercase character variable
var CSLower = confirm("Would you like to use lower case characters?")
if (CSLower) {
  userSelection += charSetLower;
}
 // if statement checks if user wants to select uppercase character variable
var CSUpper = confirm("Would you like to use upper case characters?")
  if (CSUpper) {
    userSelection += charSetUpper;
}
 // if statement checks if user wants to select special character variable
var CSSpecial = confirm("Would you like to use special characters?")
  if (CSSpecial) {
    userSelection += specialCharSet;
}

// resets the password form then randomly selects from each character type through a for loop
var passwordString = ""
  for (i = 1; i <= passwordLength; i++) {
    passwordString += userSelection.charAt(Math.floor(Math.random() * userSelection.length));
  }
    return passwordString;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
