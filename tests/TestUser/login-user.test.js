const request = require('supertest');
const app = require('../../api/app');

describe('User', () => {
    it('should the user successfully login', async () => {
        const response = await request(app).
        post('/new-user').
        send({
            mail : "senderson@user.com",
            password : "just_a_simplestring_123",
        });
        expect(response.body).toHaveProperty("id");
    })
});