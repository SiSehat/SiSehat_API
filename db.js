import { initializeApp } from 'firebase/app';
import * as firestore from  'firebase/firestore/dist/firestore'
import config from './config.js';

// const { initializeApp } = require('firebase/app');
// const firestore = require('@firebase/firestore');
// const config = require('./config');

initializeApp(config.firebaseConfig)

export default firestore;