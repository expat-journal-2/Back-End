/* jshint esversion: 8 */
const request = require("supertest");
const server = require("../api/server.js");
const test = "tesPost75";
let token;

// beforeAll(done => {
//   request(server)
//     .post("api/auth/login")
//     .send({ username: test, password: test })
//     .end((err, response) => {
//       token = response.body.token; // save the token!
//       done();
//     });
// });

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
  });
});

//test login
describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  describe("POST /api/auth/login", () => {
    it("should return 200 logged in", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: test, password: test });
      console.log(res.body.token);
      let token = res.body.token;
      expect(res.status).toBe(200);
    });
  });
});
// describe("users router", function() {
//   it("should run the tests", function() {
//     expect(true).toBe(true);
//   });
//
//   describe("GET /api/users", function() {
//     it("should return 400 OK", function() {
//       return request(server)
//         .get("/api/users")
//         .set("Authorization", `Bearer ${token}`)
//         .then(res => {
//           expect(res.status).toBe(201);
//         });
//     });
//     it("should return JSON formatted body", function() {
//       return request(server);
//         .get("/api/users")
//         .set("Authorization", `${token}`)
//         .then(res => {
//           expect(res.type).toBe("application/json");
//         });
//     });
//   });
// });
// describe("GET /", () => {
//   // token not being sent - should respond with a 401
//   test("It should require authorization", () => {
//     return request(server)
//       .get("/api/users")
//       .then(response => {
//         expect(response.statusCode).toBe(401);
//       });
//   });
//   // send the token - should respond with a 200
//   test("It responds with JSON", () => {
//     return request(server)
//       .get("/api/users")
//       .set("Authorization", `Bearer ${token}`)
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         expect(response.type).toBe("application/json");
//       });
//   });
// });
