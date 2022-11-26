import firebase from 'firebase';
import dotenv from 'dotenv'

dotenv.config();

const db = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.appId
})

export default db;