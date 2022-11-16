const { initializeApp   } = require('firebase/app');
const { getFirestore  } = require('firebase/firestore');
const config = require('./config');

initializeApp(config.firebaseConfig)

const db = getFirestore();

module.exports = db;

// export default db;
 