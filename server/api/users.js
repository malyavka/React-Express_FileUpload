const router = require('express').Router();
const db = require('../db/index');
const User = db.model('users');
module.exports = router;

router.get('/', async (req, res, next) => {
    try{
        const users = await User.findAll();
        res.send(users);
    } catch(err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try{
        const { firstName, lastName, DOB, phone, address, state, zip } = req.body;
        console.log('REQ.BODY>>>>>', req.body);
        await User.create({firstName, lastName, DOB, phone, address, state, zip});
        res.status(201).json();
    } catch(err){
        next(err);
    }
});