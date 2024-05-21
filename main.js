const express = require('express');
const CORS = require('cors');
const routes = require('./routes');

const connect = require('./db/connect');
connect();

const app = express();
app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(CORS())
    .use('/', routes)

app.listen(3000, () => console.log('http://localhost:3000'));