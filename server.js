const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require ('./db/mongoose');
const argv = require('yargs').argv;
const http = require('http');
const app = express();

app.use(bodyParser.json())












app.listen(3000, ()=> console.log('Listening on port 3000'));
