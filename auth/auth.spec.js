/* jshint esversion: 6 */
const request = require("supertest");
const server = require("../api/server.js");
const test = "newTestValue12"
describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  describe("POST /api/auth/register", () => {
    it("should return 201 created", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          username: test,
          password: test,
          email: test
        });
      expect(res.status).toBe(201);
    });
    it("should not register a user without a unique email", async () =>{
      const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "err",
        password:"err",
        email: test
      });
      expect(res.status).toBe(500) 
    });
})
});
describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  describe("POST /api/auth/login", () => {
    it("should return 200 logged in", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: test, password: test });
      expect(res.status).toBe(200);
    });
    it('should not log in a user with an incorrect password', async() =>{
      const res = await request(server)
      .post("/api/auth/login")
      .send({ username: test, password: "incorrect" });
    expect(res.status).toBe(401);
    })
  });
});
