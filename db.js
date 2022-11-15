import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import * as config from './config.js';
import serviceAccount from './sisehat-api-4c78d-firebase-adminsdk-698pu-8c65ba3ce1.json' assert { type: 'json' }

initializeApp(config.default.firebaseConfig)

const db = getFirestore();

export default db;
