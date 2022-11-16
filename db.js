import firebase from 'firebase';
import config from './config.js';

// const { initializeApp } = require('firebase/app');
// const firestore = require('@firebase/firestore');
// const config = require('./config');

const db = firebase.initializeApp(config.firebaseConfig)

export default db;