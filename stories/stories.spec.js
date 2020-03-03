///<reference types ="jest"/>
const request = require('supertest');
const server = require('../api/server.js');

// const test= "test";
// const token = '';

describe('stories router', () =>{
    describe('GET / all stories', () =>{
        it('should return a 200 status', async () =>{
            const res = await request(server)
            .get('/api/stories')
            expect(res.status).toBe(200)
        })
        it('should return json', async () =>{
            const res = await request(server)
            .get('/api/stories')
            expect(res.type).toBe('application/json')
        })

    })
    describe('GET /:id a story', () =>{
        it('should return a 200 status', async () =>{
            const res = await request(server)
            .get('/api/stories/1')
            expect(res.status).toBe(200)
        })
        it('should return json', async () =>{
            const res = await request(server)
            .get('/api/stories/1')
            expect(res.type).toBe('application/json')
        })
        it('should return a story if there is one', async () =>{
            const res = await request(server)
            .get('/api/stories/1')
            expect(res.body).toBe("")
        })
    })

    // describe('POST / a story', () =>{
    //     it('should register and login a user getting a token', async () =>{
    //         const res = await request(server)
    //         .post('/api/auth/register')
    //         .send({username: test, password: test, email: test})
    //         .post('api/auth/login')
    //         .send({username: test, password: test})
    //         .set("Authorization", token)
    //     })
    // })
  
})