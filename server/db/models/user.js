const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DOB: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    },
    state: {
        type:   Sequelize.ENUM,
        values: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return (
                this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
            )
        }
    },
});

module.exports = User;

/**
 * hooks
 */
User.afterValidate(user => {
    if (user.firstName && user.lastName) {
        const nameFirst = user.firstName;
        const nameLast = user.lastName;

        user.firstName = nameFirst[0].toUpperCase() + nameFirst.slice(1);
        user.lastName = nameLast[0].toUpperCase() + nameLast.slice(1);
    }
});