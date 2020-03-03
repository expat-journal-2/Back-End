require("dotenv").config();
const request = require('supertest');
const server = require('./server.js');
describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe('welcome GET / message', () =>{
    it('should return a status 200 upon connection', async () =>{
      const res = await request(server)
      .get("/")
      expect(res.status).toBe(200)
    })
    it('should return text', async () =>{
      const res = await request(server)
      .get('/')
      expect(res.type).toBe("text/html")
    })
  
  })

});

