




// percentage of password per character type or how to completely randomise this

// totally randomise order of characters


const shuffledLowercase = lowercaseLetters
  .split("")
  .sort(function () {
    return 0.5 - Math.random();
  })
  .join("");


const shuffledUppercase = uppercaseLetters
  .split("")
  .sort(function () {
    return 0.5 - Math.random();
  })
  .join("");


const shuffledNumbers = numbers
  .split("")
  .sort(function () {
    return 0.5 - Math.random();
  })
  .join("");


const shuffledSymbols = symbols
  .split("")
  .sort(function () {
    return 0.5 - Math.random();
  })
  .join("");