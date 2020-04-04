const {expect} = require('chai');
const supertest = require('supertest');
const db = require('../db/index');
const app = require('../index');
const User = db.model('users');
const agent = supertest.agent(app);

describe('User routes', () => {

    beforeEach(() => {
        return db.sync({force: true})
    });

    describe('POST /', () => {
        it('creates a new user', async () => {
            await agent
                .post('/')
                .send({
                    firstName: "Perry",
                    lastName: "Mason",
                    DOB: "1854-01-06",
                    phone: "222-222-22-22",
                    address: "221B Baker Street",
                    state: "New York",
                    zip: "10001"
                })
                .expect(200)
        })
    })
}) // end describe('User routes')