// Assignment Code
var generateBtn = document.querySelector("#generate");

var str1 = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "()",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var str2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var str3 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var str4 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var pwLength;
var createPw = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = createPw;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//
function generatePassword() {
  pwLength = prompt("How many characters would you like?");
  if (pwLength < 8) {
    alert("you need at least 8");

    return generatePassword();
  };
  
  {
    var special = confirm("Would you like special characters?");
    var numbers = confirm("Do you want numeric?");
    var lower = confirm("Do you want lower case?");
    var upper = confirm("Do you want upper case?");
    console.log(special, numbers, lower, upper);
  };

  var aChars = [];

  if (special) {
    aChars.push(str1);
  };

  if (numbers) {
    aChars.push(str2);
  };

  if (lower) {
    aChars.push(str3);
  };

  if (upper) {
    aChars.push(str4);
  };

  
  for (let i = 0; i < pwLength; i++) {
    var index = Math.floor(Math.random() * aChars.length);
    let randomArray = aChars[index];
    let charIndex = Math.floor(Math.random() * randomArray.length);
    createPw += randomArray[charIndex];
  }
  console.log(createPw);
 
}
