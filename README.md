# express-test
https://bezkoder.com/node-js-mongodb-auth-jwt/

npm init -y
entry point: server.js
npm install express mongoose body-parser cors jsonwebtoken bcryptjs --save
create files and folder structure like so

make your own db.config.js from a role assigned to you with content:
module.exports = {
    HOST: "localhost",
    PORT: 27017,
    USER: '...',
    PASS: '...',
    DB: "Trip"
};

make .gitignore file with content:
node_modules/
package-lock.json
app/config/db.config.js

run node server.js
use postman
