const express = require('express');
const CORS = require('cors');
const connect = require('./db/connect');

const app = express();
app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(CORS());

connect();

app.listen(3000, () => console.log('http://localhost:3000'));