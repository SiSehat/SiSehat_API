const { initializeApp } = require('@firebase/app');
const firestore = require('@firebase/firestore');
const config = require('./config');

initializeApp(config.firebaseConfig)

module.exports = firestore

// export default db;
 