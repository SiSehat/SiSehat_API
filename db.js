const { initializeApp   } = require('firebase/app');
const { collection, addDoc, getFirestore  } = require('firebase/firestore');
const config = require('./config');

initializeApp(config.firebaseConfig)

module.exports = { collection, addDoc, getFirestore }

// export default db;
 