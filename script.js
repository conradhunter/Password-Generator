const setNumberOfCharacters = document.getElementById("numberInput");
const includeUppercase = document.getElementById("uppercase");
const includeLowercase = document.getElementById("lowercase");
const includeSymbols = document.getElementById("symbols");
const includeNumbers = document.getElementById("numbers");

const resultHeading = document.getElementById("result");

// character variables for random generation
const lowercaseLetters = "abcdefghijklmnopqrstuvwyxz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
const numbers = "1234567890";
const symbols = "!@#$%&*?";
const characters = lowercaseLetters + uppercaseLetters + numbers + symbols; //length = 70;

let passwordLength = setNumberOfCharacters.value;

function areBoxesChecked() {
  if (includeUppercase.checked) {
    let randomUppercase =
      uppercaseLetters[Math.floor(uppercaseLetters.length * Math.random())];
    console.log(randomUppercase);
  }

  if (includeLowercase.checked) {
    let randomLowercase =
      lowercaseLetters[Math.floor(lowercaseLetters.length * Math.random())];
    console.log(randomLowercase);
  }

  if (includeSymbols.checked) {
    let randomSymbol = symbols[Math.floor(symbols.length * Math.random())];
    console.log(randomSymbol);
  }

  if (includeNumbers.checked) {
    let randomNumber = numbers[Math.floor(numbers.length * Math.random())];
    console.log(randomNumber);
  }
}

function generatePassword() {
  resultHeading.innerHTML = shuffledCharacters;
}

const shuffledCharacters = characters
  .split("")
  .sort(function () {
    return 0.5 - Math.random();
  })
  .slice(0, passwordLength)
  .join("");
console.log(shuffledCharacters);
