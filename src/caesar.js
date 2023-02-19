// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function alphabetLoop(characterIndex, shift) {
    let shiftedAlphabetIndex = characterIndex + shift
    if (shiftedAlphabetIndex > 25) {
      shiftedAlphabetIndex -= 26
    } else if (shiftedAlphabetIndex < 0) {
      shiftedAlphabetIndex += 26
    }
    return shiftedAlphabetIndex
  }

  function decode(encode, shift) {
    if (encode === false) {
      shift *= -1
    }
    return shift
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let resultMessage = ""
    let lowerCaseInput = input.toLowerCase()
    shift = decode(encode, shift)
    for (let i = 0; i < lowerCaseInput.length; i++) {
      const letter = lowerCaseInput[i]
      if (/[a-zA-Z]/.test(letter)) {
        const characterIndex = alphabet.indexOf(letter)
        const shiftedAlphabetIndex = alphabetLoop(characterIndex, shift)
        const shiftedCharacter = alphabet[shiftedAlphabetIndex]
        resultMessage += shiftedCharacter
      } else {
        resultMessage += letter
      }
    }
    return resultMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
