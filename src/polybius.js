// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function stripString(input) {
    const strippedString = input.replace(/\s/g, '')
    return strippedString
  }

  function polybius(input, encode = true) {
    const grid = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ]
    let resultString = ""

    if (!encode) {
      if (stripString(input).length % 2 !== 0) {
        return false
      }
      const numberPairs = input.match(/\d{2}|\s/g)
      console.log(numberPairs)
      for (let pair = 0; pair < numberPairs.length; pair++) {
        const number = numberPairs[pair]
        if (number === " ") {
          resultString += number
        } else {
          const row = number[1] - 1
          const column = number[0] - 1
          const letter = grid[row][column]
          resultString += letter
        }
      }
      return resultString
    }
    
    if (encode) {
      input = input.toLowerCase()
    
      for (let i = 0; i < input.length; i++) {
        const letter = input[i]
        if (letter === " ") {
          resultString += letter
        }
        for (let r = 0; r < grid.length; r++) {
          for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c].includes(letter)) {
              const row = r + 1
              const column = c + 1
              resultString += column
              resultString += row
            }
          }
        }
      }
      console.log(resultString)
      return resultString
    }
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };










