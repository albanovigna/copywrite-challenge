const request = require("supertest");

const app = require("../../src/app");

describe("GET /iecho", () => {
  it("responde with json", (done) => {
    request(app)
      .get("/iecho?text=test")
      .set("Accept", "application/json")
      .expect(200, done);
  });
  it("debe devolver la string invertida", () => {
    const str = "Hello";
    request(app).expect(str.reverse()).toBe("olleH");
  });
});
