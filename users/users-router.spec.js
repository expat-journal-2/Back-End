const request = require("supertest");

const server = require("../api/server.js");

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/users", function() {
    it("should return 400 OK", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(400);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
