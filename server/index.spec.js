const request = require('supertest');
const app = require('./server').server;

describe('System tests', () => {
    it('Get phones', async () => {
        await request(app)
        .get('/phones')
        .expect(200)
        .then(response => {
            expect(response.body.length).toBeGreaterThan(0);
            response.body.forEach(item => {
                expect(item).toHaveProperty('id');
                expect(item).toHaveProperty('name');
                expect(item).toHaveProperty('description');
                expect(item).toHaveProperty('color');
                expect(item).toHaveProperty('price');
                expect(item).toHaveProperty('imageFileName');
                expect(item).toHaveProperty('screen');
                expect(item).toHaveProperty('processor');
                expect(item).toHaveProperty('ram');
            });
        });
    });
});
