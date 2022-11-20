require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.json({message: 'Home route'})
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

module.exports = app;