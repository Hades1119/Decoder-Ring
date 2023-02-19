// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false
    alphabet = alphabet.toLowerCase()
    let uniqueAlphabet = ""
    let resultMessage = ""
    input = input.toLowerCase()
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alphabet.length; i++) {
      const character = alphabet[i]
      if (uniqueAlphabet.includes(character)) {
        return false
      } else {
        uniqueAlphabet += character
      }
    }
      if (!encode) {
      for (let a = 0; a < input.length; a++) {
        const letter = input[a]
        if (letter === " ") {
          resultMessage += letter
        } else {
          for (let b = 0; b < uniqueAlphabet.length; b++) {
            const char = uniqueAlphabet[b]
            if (char === letter) {
              const index = b
              resultMessage += normalAlphabet[b]
            }
          }
        }
      }
      return resultMessage
    }
    for (let a = 0; a < input.length; a++) {
      const letter = input[a]
      if (letter === " ") {
        resultMessage += letter
      } else {
        for (let b = 0; b < normalAlphabet.length; b++) {
          const char = normalAlphabet[b]
          if (char === letter) {
            const index = b
            resultMessage += uniqueAlphabet[b]
          }
        }
      }
    }
    return resultMessage
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
