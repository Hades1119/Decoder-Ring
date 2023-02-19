const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybuis", () => {

  describe("encoding", () => {
    it("should encode the message by changing them into number pairs", () => {
      const actual = polybius("hello")
      const expected = "3251131343"
      expect(actual).to.equal(expected)
    })

    it("should recognize i and j to 42", () => {
      const actual = polybius("jinx")
      const expected = "42423335"
      expect(actual).to.equal(expected)
    })

    it("should leave spaces", () => {
      const actual = polybius("jin x")
      const expected = "424233 35"
      expect(actual).to.equal(expected)
    })
  })

  describe("decoding", () => {
    it("should decode the message", () => {
      const actual = polybius("32322143", false)
      const expected = "hhbo"
      expect(actual).to.equal(expected)
    })

    it("should translate 42 to an I and a J", () => {
      const actual = polybius("3232422143", false)
      const expected = "hh(i/j)bo"
      expect(actual).to.equal(expected)
    })

    it("should decode the message and leave spaces be", () => {
      const actual = polybius("32 322143", false)
      const expected = "h hbo"
      expect(actual).to.equal(expected)
    })

    it("should return false if the length of the numbers input was odd", () => {
      const actual = polybius("3232214", false)
      expect(actual).to.be.false
    })
  })
})
