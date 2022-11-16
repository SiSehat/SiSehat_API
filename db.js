const { initializeApp } = require('firebase/app');
const firestore = require('firebase/firestore');
const config = require('./config');

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import * as config from './config.js';
// import serviceAccount from './sisehat-api-4c78d-firebase-adminsdk-698pu-8c65ba3ce1.json' assert { type: 'json' }

initializeApp(config.firebaseConfig)

const db = firestore;

module.exports = db

// export default db;
 