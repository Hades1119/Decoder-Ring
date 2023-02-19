const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Cipher", () => {
  describe("error handling", () => {
    it("should return false if shift value is not present", () => {
      const actual = caesar("thinkful")
      const expected = false
      expect(actual).to.be.false
    })

    it("should return false if shift is equal to 0", () => {
      const actual = caesar("thinkful", 0)
      const expected = false
      expect(actual).to.be.false
    })

    it("should return false if shift is greater than 25", () => {
      const actual = caesar("thinkful", 34)
      const expected = false
      expect(actual).to.be.false
    })

    it("should return false if shift is less than 25", () => {
      const actual = caesar("thinkful", -45)
      const expected = false
      expect(actual).to.be.false
    })
  })

  describe("encoding messages", () => {
    it("should maintain spaces and other non alphabetic symbols", () => {
      const actual = caesar("th inkful!", 3)
      const expected = "wk lqnixo!"
      expect(actual).to.equal(expected)
    })
  
    it("should ignore capital letters", () => {
       const actual = caesar("Thinkful", 3)
       const expected = "wklqnixo"
       expect(actual).to.equal(expected)
    })
  
    it("should loop through alphabet if a letter is shifted 'off'", () => {
      const actual = caesar("Zebra", 5)
      const expected = "ejgwf"
      expect(actual).to.equal(expected)
    })

    it("should allow for a negative shift", () => {
      const actual = caesar("Zebra", -5)
      const expected = "uzwmv"
      expect(actual).to.equal(expected)
    })
  })

  describe("decoding messages", () => {
    it("should decode the mssage by shifting the opposite direction", () => {
      const actual = caesar("Zsdaasd", -5, false)
      const expected = "exiffxi"
      expect(actual).to.equal(expected)
    })

    it("should leaves spaces and other symbols as is", () => {
      const actual = caesar("#sh bibi", 2, false);
      const expected = "#qf zgzg";
      expect(actual).to.equal(expected);
    })

    it("should ignore all capital letters", () => {
      const actual = caesar("#SH bibi", 2, false);
      const expected = "#qf zgzg";
      expect(actual).to.equal(expected);
    })

    it("should handle all letters at the end of the alphabet", () => {
      const actual = caesar("zsadas wqe", 7, false);
      const expected = "sltwtl pjx";
      expect(actual).to.equal(expected);
    })

    it("should allow for a negative shift", () => {
      const actual = caesar("zsadas wqe", -7, false);
      const expected = "gzhkhz dxl";
      expect(actual).to.equal(expected);
    })
  })
})