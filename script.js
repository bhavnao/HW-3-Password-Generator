
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];

var addLength = "";
var addUpperCase;
var addLowerCase; 
var addNumber; 
var addSpecialCharacter; 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
      var passwordName = [] 
      if (addUpperCase) {passwordName = passwordName.concat(upperCase)}
      if (addLowerCase) {passwordName = passwordName.concat(lowerCase)}
      if (addNumber) {passwordName = passwordName.concat(number)}
      if (addSpecialCharacter) {passwordName = passwordName.concat(specialCharacter)}

  var randomizedPassword = ""

    for (var i=0; i < addLength; i++) {
      randomizedPassword = randomizedPassword + passwordName[Math.floor(Math.random() * passwordName.length)]; 
    }

    return randomizedPassword; 
}


function randomString(){
  
  var characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var random_str ="";
  for(var j=0; j<characters.length; j++)
  {   
    random_str= random_str + characters.charAt(Math.floor(Math.random()*characters.length))
  }
  console.log(random_str);
}


randomString();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
