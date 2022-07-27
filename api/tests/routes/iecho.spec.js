const { expect } = require("chai");

const request = require("supertest");

const app = require("../../src/app");

const { reverseString, isPalindrome } = require("../../src/utils");

describe("GET /iecho", () => {
  it("responde con un json y status 200 cuando se pasa un texto", (done) => {
    request(app)
      .get("/iecho?text=test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("responde con un error si no se pasan parametros y status 400", (done) => {
    request(app)
      .get("/iecho")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
  it("debe devolver la string invertida", () => {
    expect("tset").to.equal(reverseString("test"));
    expect("menem").to.equal(reverseString("menem"));
    expect("65").to.equal(reverseString("56"));
  });
  it("debe devolver true si es palindromo", () => {
    expect(true).to.equal(isPalindrome("Yo hago yoga hoy"));
    expect(true).to.equal(isPalindrome("menem"));
    expect(false).to.equal(isPalindrome("test"));
  });
});
