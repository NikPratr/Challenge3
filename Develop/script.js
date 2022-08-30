// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase   = "abcdefghijklmnopqrstuvwxyz"
var uppercase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums        = "0123456789"
var symbols     = "!@#$%^&*()"
var newPassword = ""

var c1 = window.prompt("How many characters do you want your password to be? (8-25)");
var c2 = window.confirm("Would you like uppercase letters? (Press ok for yes or cancel for no)");
var c3 = window.confirm("Would you like numbers? (Press ok for yes or cancel for no)");
var c4 = window.confirm("Would you like symbols? (Press ok for yes or cancel for no)");

if(c1 >=8 && c1 <= 25) {
    var passLength = c1;
  } else {
    var passLength = 8;
  }

if (c2) {
  var passLibrary = lowercase.concat(uppercase);
} else {
  var passLibrary = lowercase;
}

if (c3) {
  passLibrary = passLibrary.concat(nums);
}

if(c4) {
  passLibrary = passLibrary.concat(symbols);
}

for(var i=0; i < passLength; i++) {
  var index = Math.floor(Math.random() * passLibrary.length);
  newPassword + passLibrary[index];
  console.log(newPassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
