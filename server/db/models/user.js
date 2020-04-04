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
        values: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
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