const {expect} = require('chai');
const db = require('../index');
const User = db.model('users');

describe('User model', () => {
    beforeEach(() => {
        return db.sync({force: true})
    });

    describe('column definitions and validations', () => {
        it('has a `firstName`, `lastName`, `DOB`, `phone`, `address`, `state` and `zip`', async () => {
            const customer = await User.create({
                firstName: 'Sherlock',
                lastName: 'Holmes',
                DOB: '1854-01-06',
                phone: '222-222-22-22',
                address: '221B Baker Street',
                state: 'New York',
                zip: '10001'
            })

            expect(customer.firstName).to.equal('Sherlock');
            expect(customer.lastName).to.equal('Holmes');
            expect(customer.DOB).to.equal('1854-01-06');
            expect(customer.phone).to.equal('222-222-22-22');
            expect(customer.address).to.equal('221B Baker Street');
            expect(customer.state).to.equal('New York');
            expect(customer.zip).to.equal('10001');
        });
        it('`firstName`, `lastName`, `DOB`, `phone`, `address`, `state` and `zip` are required', async () => {
            const guest = User.build();
            return guest.validate().then(
                () => {
                    throw new Error('Validation should have failed!')
                },
                err => {
                    expect(err).to.be.an('error')
                }
            )
        });
        it('it has a VIRTUAL  column `fullName`', async () => {
            const valuedCustomer = await User.create({
                firstName: 'Perry',
                lastName: 'Mason',
                DOB: '1854-01-06',
                phone: '222-222-22-22',
                address: '221B Baker Street',
                state: 'New York',
                zip: '10001'
            });
            expect(valuedCustomer.fullName).to.equal('Perry Mason')
        });
        it('has a hook and capitalizes the first letter of the first and last name before save to the DB', async () => {
            const favCustomer = await User.create({
                firstName: 'miss',
                lastName: 'marple',
                DOB: '1854-01-06',
                phone: '222-222-22-22',
                address: '221B Baker Street',
                state: 'New York',
                zip: '10001'
            });
            expect(favCustomer.firstName).to.equal('Miss');
            expect(favCustomer.fullName).to.equal('Miss Marple')
        })
    });
});// end describe('User model')