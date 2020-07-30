# express-test
https://bezkoder.com/node-js-mongodb-auth-jwt/

```
npm init -y
```
* entry point: server.js

```
npm install
```

* get your own user and pass from MongoDB, create a new file in config folder 'db.config.js':
* past the code below and fill it in for db.config.js
```
    module.exports = {
        HOST: "localhost",
        PORT: 27017,
        USER: '...',
        PASS: '...',
        DB: "Trip"
    };
```
```
node server.js
```

* use postman to test
