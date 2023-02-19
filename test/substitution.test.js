const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {

  describe("error handling", () => {
    it("should return false if there is no substitution alphabet inputted", () => {
      const actual = substitution("hello")
      expect(actual).to.be.false
    })

    it("should return false if the given alphabet is not exactly 26 characters", () => {
      const message = "hello"
      const alphabet = "qwertyui"
      const actual = substitution(message, alphabet)
      expect(actual).to.be.false
    })

    it("should return false if the alphabet given does not contain only unique characters", () => {
      const message = "hello"
      const alphabet = "aaaaaaddddsdsvxcvas"
      const actual = substitution(message, alphabet)
      expect(actual).to.be.false
    })
  })

  describe("encoding message", () => {
    it("should properly encode the message using given alphabet", () => {
      const message = "hello"
      const alphabet = "zxcvbnmasdfghjklqwertyuiop"
      const actual = substitution(message, alphabet)
      const expected = "abggk"
      expect(actual).to.equal(expected)
    })

    it("should properly encode the message using given alphabet with unique characters", () => {
      const message = "fhello"
      const alphabet = "zxcvb.masdfghjklqwertyuiop"
      const actual = substitution(message, alphabet)
      const expected = ".abggk"
      expect(actual).to.equal(expected)
    })

    it("should leave spaces", () => {
      const message = "he llo"
      const alphabet = "zxcvbnmasdfghjklqwertyuiop"
      const actual = substitution(message, alphabet)
      const expected = "ab ggk"
      expect(actual).to.equal(expected)
    })
  })

  describe("decoding", () => {
    it("should decode the mssage using the same given alphabet", () => {
      const message = "asdasdasd"
      const alphabet = "zxcvbnmasdfghjklqwertyuiop"
      const actual = substitution(message, alphabet, false)
      const expected = "hijhijhij"
      expect(actual).to.equal(expected)
    })

    it("should work with any kind of unique characters as well", () => {
      const message = "asda...sdasd"
      const alphabet = "zxc.bnmasdfghjklqwertyuiop"
      const actual = substitution(message, alphabet, false)
      const expected = "hijhdddijhij"
      expect(actual).to.equal(expected)
    })

    it("should leave the spaces", () => {
      const message = "asda...sdas d"
      const alphabet = "zxc.bnmasdfghjklqwertyuiop"
      const actual = substitution(message, alphabet, false)
      const expected = "hijhdddijhi j"
      expect(actual).to.equal(expected)
    })
  })
})
