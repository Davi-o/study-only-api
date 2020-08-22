const request = require('supertest');
const app = require('../app');

describe('User', () => {
    it('should create a new user', async () => {
        const response = await request(app).
        post('/new-user').
        send({
            name : "user senderson2",
            phone_number : "777-666-555",
            password : "just_a_simplestring_12345",
        });
        expect(response.body).toHaveProperty("id");

    })
})