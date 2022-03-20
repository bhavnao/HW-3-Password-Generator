
var generateBtn = document.querySelector("#generate");

// declaring all the characters for the password
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var number = ("1234567890");
var specialCharacter = ("!#$&,+,=><?@*");

var addLength = "";
var addUpperCase;
var addLowerCase; 
var addNumber; 
var addSpecialCharacter; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Your password is "+password;

}

// this function will take the input from user and generate the random password
  function generatePassword() {
    var addLength = (prompt("How many characters do you want your password to be? (8 - 128 characters)."));
  
  
    while (addLength <= 7 || addLength >= 128) {
      alert("Password length must be between 8 - 128 characters. Please try again."); 
      var addLength = (prompt("How many characters do you want your password to be? (8 - 128 characters).")); 
    }
  
  
    alert("Your password length will be " + addLength + " characters."); 
  
  
    var addUpperCase = confirm("Should Password include uppercase characters? Press 'OK' to add and 'Cancel' to remove."); 
    var addLowerCase = confirm("Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."); 
    var addNumber = confirm("Should Password include numbers? Press 'OK' to add and 'Cancel' to remove."); 
    var addSpecialCharacter = confirm("Should password include special characters? Press 'OK' to add and 'Cancel' to remove."); 

    while (
      addUpperCase === false &&
      addLowerCase === false &&
      addNumber === false &&
      addSpecialCharacter === false) {
          alert("Please select at least one criteria to generate password."); 
  
          var addUpperCase = confirm("Should Password include uppercase characters? Press 'OK' to add and 'Cancel' to remove."); 
          var addLowerCase = confirm("Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."); 
          var addNumber = confirm("Should Password include numbers? Press 'OK' to add and 'Cancel' to remove.");
          var addSpecialCharacter = confirm("Should password include special characters? Press 'OK' to add and 'Cancel' to remove."); 
  
      }

      // create the string of only the required vharacters
      var passwordName = "" ;
      if (addUpperCase) {passwordName = passwordName.concat(upperCase)}
      if (addLowerCase) {passwordName = passwordName.concat(lowerCase)}
      if (addNumber) {passwordName = passwordName.concat(number)}
      if (addSpecialCharacter) {passwordName = passwordName.concat(specialCharacter)}

      // generate the random password
  var randomizedPassword = ""

    for (var i=0; i < addLength; i++) {
      randomizedPassword = randomizedPassword + passwordName.charAt(Math.floor(Math.random() * passwordName.length)); 
      
    }
console.log(randomizedPassword);
    return randomizedPassword; 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
