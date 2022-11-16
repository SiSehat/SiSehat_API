import admin from 'firebase-admin'
import * as config from './config.js';
import serviceAccount from './sisehat-api-4c78d-firebase-adminsdk-698pu-8c65ba3ce1.json' assert { type: 'json' }

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

export default db;
