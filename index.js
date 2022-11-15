'use strict';
const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const config = require('./config');
const healthRoutes = require('./routes/healthRoutes');
// import express from 'express';
// import cors from 'cors';
// import bodyParse from 'body-parser'
// import * as config from './config.js';
// import router from './routes/healthRoutes.js';

const port = process.env.PORT || config.port;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParse.json());

app.use('/api', healthRoutes.routes);



app.listen(port, () => console.log('App is listening on url http://localhost:' + port));
