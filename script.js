const setNumberOfCharacters = document.getElementById("numberInput");
const includeUppercase = document.getElementById("uppercase");
const includeSymbols = document.getElementById("symbols");
const includeNumbers = document.getElementById("numbers");

const resultPara = document.getElementById("result-para");

// character variables for random generation
const lowercaseLetters = "abcdefghijklmnopqrstuvwyxz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
const numbers = "1234567890";
const symbols = "!@#$%&*?";
const characters = lowercaseLetters + uppercaseLetters + numbers + symbols; //length = 70;
const allLetters = lowercaseLetters + uppercaseLetters;
const lettersAndSymbols = allLetters + symbols;
const lettersAndNumbers = allLetters + numbers;
const symbolsAndNumbers = symbols + numbers;

let password = lowercaseLetters;

function detectPasswordRequirements() {
  if (
    includeUppercase.checked &&
    includeNumbers.checked &&
    includeSymbols.checked
  ) {
    password = password + uppercaseLetters + numbers + symbols;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeUppercase.checked && includeNumbers.checked) {
    password = password + uppercaseLetters + numbers;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeUppercase.checked && includeSymbols.checked) {
    password = password + uppercaseLetters + symbols;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeUppercase.checked) {
    password = password + uppercaseLetters;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeNumbers.checked && includeSymbols.checked) {
    password = password + numbers + symbols;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeNumbers.checked) {
    password = password + numbers;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else if (includeSymbols.checked) {
    password = password + symbols;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  } else {
    password = password;
    resultPara.innerText = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .slice(0, setNumberOfCharacters.value)
      .join("");
  }
}


function clearGenerator() {
  location.reload();
  console.log("cleared");
}
