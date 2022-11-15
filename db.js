import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import * as config from './config.js';
import serviceAccount from './sisehat-api-4c78d-firebase-adminsdk-698pu-8c65ba3ce1.json' assert { type: 'json' }

initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = getFirestore();

export default db;
