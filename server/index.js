const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const path = require('path');

const db = require('./db');
const PORT = process.env.PORT || 3000;

const app = express();
module.exports = app;

const createApp = () => {
    //logging middleware
    app.use(morgan('dev'));

    //body parser
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    // upload files
    app.use(fileUpload());
    //api route(s)
    app.use('/api', require('./api'));

    //statuc file-serving middleware
    app.use(express.static(path.join(__dirname, '..', 'public')));



    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })

};

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () =>
        console.log(`Collecting investors info on ${PORT}`)
    )

};

const syncDb = () => db.sync();

async function bootApp() {
    await syncDb();
    await createApp();
    await startListening()
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
    bootApp()
} else {
    createApp()
}