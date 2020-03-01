const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors'); //do we need this if the fe connects via heroku?

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

server.get('/', (req, res) =>{
    res.send("API running");
})

module.exports = server;