/* jshint esversion: 6 */

const request = require("supertest");

const server = require("../api/server.js");

describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  describe("POST /api/auth/register", () => {
    it("should return 201 created", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          username: "testPost4",
          password: "testPost4",
          email: "testPost4"
        });
      expect(res.status).toBe(201);
    });
  });
});

describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("POST /api/auth/login", () => {
    it("should return 200 logged in", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "testPost3", password: "testPost3" });
      expect(res.status).toBe(200);
    });
  });
});
