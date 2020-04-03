const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const agent = request.agent(app);
const db = require('../db/db');
const User = db.model('users');

describe('User routes', () => {


    describe('POST /', () => {
        it('creates a new user',  () => {
            return agent
                .post('/api/users')
                .send({
                    firstName: "Perry",
                    lastName: "Mason",
                    DOB: "1933-03-06",
                    phone: "222-222-22-22",
                    address: "33 Criminal Lawyer",
                    state: "LA",
                    zip: "23330"
                })
                .expect(200)
        })
    })
}) ;// end describe('User routes')