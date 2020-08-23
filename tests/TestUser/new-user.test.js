const request = require('supertest');
const app = require('../../api/app');

describe('User', () => {
    it('should create a new user', async () => {
        const response = await request(app).
        post('/new-user').
        send({
            name : "user senderson3",
            mail : "senderson@user.com",
            phone_number : "777-666-555",
            password : "just_a_simplestring_123",
        });
        expect(response.body.id).toBe(true);
    })
});

describe('User', () => {
    it('should throw an error when posting invalid data', async () => {
        const response = await request(app).
        post('/new-user').
        send({
            name : "",
            mail : "",
            phone_number : "",
            password : "",
        });
        expect(response.status).toBe(400);

    })
});