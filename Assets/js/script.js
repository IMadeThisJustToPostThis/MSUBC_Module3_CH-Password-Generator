// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  
  // retrieves list of returned values
  var choiceValues = getPassword();
  // assigns values to appropriate variable
  var lengthChoice = choiceValues[0];
  var charChoice = choiceValues[1];
  // writes password to the screen
  writePassword(lengthChoice, charChoice);

});

// generates the password given the users criteria
// code for password generation from: https://dev.to/code_mystery/random-password-generator-using-javascript-6a
function generatePassword(lengthChoice, charChoice) {
  var password = "";
  if(lengthChoice != 0 && charChoice != 'N'){
    for(var i = 0; i < lengthChoice; i++) {
      var randomNumber = Math.floor(Math.random() * charChoice.length)
      password += charChoice.substring(randomNumber, randomNumber +1);
    }
  }
  return password;
}

// Write password to the #password input
function writePassword(lengthChoice, charChoice) {
  var password = generatePassword(lengthChoice, charChoice);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// gets and returns users password parameters
function getPassword(){
  var lengthPrompt = prompt("How long would you like your password to be? Valid Inputs: 8,12,16","8");
  var lengthChoice = 0;
  if (lengthPrompt == null || lengthPrompt == "") {
    alert("User cancelled the prompt.");
    // if input is null, assume user cancelled the prompt and end function
    return;
  } else if (lengthPrompt == "8") {
    lengthChoice = 8;
  } else if (lengthPrompt == "12") {
    lengthChoice = 12;
  } else if (lengthPrompt == "16") {
    lengthChoice = 16;
  } else {
    alert("Error: Invalid Input");
    // if input is invalid, try function again and return those values instead
    return getPassword();
  }

  var charPrompt = prompt("What criteria would you like for your password? Valid Inputs: lowercase,uppercase,numeric,unicode","unicode");
  var charChoice = "N";
  if (charPrompt == null || charPrompt == "") {
    alert("User cancelled the prompt.");
    return;
  } else if (charPrompt == "lowercase") {
    charChoice = "abcdefghijklmnopqrstuvwxyz"
  } else if (charPrompt == "uppercase") {
    charChoice = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (charPrompt == "numeric") {
    charChoice = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (charPrompt == "unicode") {
    charChoice = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    alert("Error: Invalid Input");
    return getPassword();
  }

  return [lengthChoice, charChoice];
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
