## React-Express-FileUpload
A react-express web application that allows a user to input an user's information and at least 1 file into a form.

## MVP
>Taken from a challenge description

The user should be able to submit the form and then enter the next user's information.  
When the form is submitted, the user information should be stored in a relational database, 
and the file should be stored on the server's filesystem. 
The user information that should be accepted (along with at least 1 file for upload) includes:
1. User first name
2. User last name
3. User date of birth
4. User phone number
5. User street address (assume US addresses only)
6. User state (assume US addresses only)
7. User zip code  (assume US addresses only)

## Tech/framework used

<b>Built with</b>
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Express-fileupload](https://www.npmjs.com/package/express-fileupload)

Database:
- [PostgreSQL](https://www.postgresql.org/)

ORM:
- [Sequelize](https://sequelize.org/)

Test:
- [Mocha](https://mochajs.org/)

Bundler
- [Webpack](https://webpack.js.org/)

Compiler
- [Babel](https://babeljs.io/)

## Installation
- Create a database (PostgreSQL) named
```$xslt
    parallel-markets-challenge
```
- Clone repository
```$xslt
    git clone git@github.com:malyavka/React-Express_FileUpload.git
```
- Install npm packages
```$xslt
    npm install
```
- To run an app
```$xslt
    npm run start-dev     
```
- In your browser
```$xslt
    http://localhost:3000/
```

## Tests
1.Create a database (PostgreSQL) named 
```$xslt
    parallel-markets-challenge-test
```
2.To run tests
```$xslt
    npm test
```


[Masha Obaturova](https://github.com/malyavka)
