// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = function() {

var lowercase   = "abcdefghijklmnopqrstuvwxyz"
var uppercase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums        = "01234567890123456789"
var symbols     = "!@#$%^&*()!@#$%^&*()"
var passLibrary = ""
var newPassword = ""

  var c1 = window.prompt("How many characters do you want your password to be? (8-25)");
  var c2 = window.confirm("Would you like lowercase letters? (Press ok for yes or cancel for no)");
  var c3 = window.confirm("Would you like uppercase letters? (Press ok for yes or cancel for no)");
  var c4 = window.confirm("Would you like numbers? (Press ok for yes or cancel for no)");
  var c5 = window.confirm("Would you like symbols? (Press ok for yes or cancel for no)");
  
  if(c1 < 8 || c1 > 128) {
    alert("Password is wrong size");
  }

if (c2) {
  passLibrary = passLibrary.concat(lowercase);
}

if (c3) {
  passLibrary = lowercase.concat(uppercase);
}

if (c4) {
  passLibrary = passLibrary.concat(nums);
}

if(c5) {
  passLibrary = passLibrary.concat(symbols);
}

if(!c2 && !c3 && !c4 && !c5) {
  return window.confirm("You have no password!")
}

function shuffle(passLibrary) {
  var xyz = passLibrary.split("");
  xyz.sort(function() {
    return 0.5 - Math.random();
  });

  passLibrary = xyz.join("");
  return passLibrary;
}

for(var i=0; i < c1; i++) {
  var index = Math.floor(Math.random() * passLibrary.length);
  newPassword = newPassword.concat(passLibrary[index]);
  console.log(newPassword);
}
  // window.alert("Your new password is " + newPassword)
  document.getElementById("password").value = newPassword
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
