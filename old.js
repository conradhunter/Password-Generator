
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





.split('').sort(function(){return 0.5-Math.random()}).join('');


