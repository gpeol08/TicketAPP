const Server = require('./models/server');
require('dotenv').config();

const server = new Server();
console.log(process.env)

server.execute();






