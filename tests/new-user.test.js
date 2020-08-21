const request = require('supertest');
const app = require('../app');

describe('User', () => {
    it('should create a new user', async () => {
        const response = await request(app).
        post('/new-user').
        send({
            example : 'test'
        });
        expect(response.body).toHaveProperty('id');

    })
})