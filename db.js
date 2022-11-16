import firebase from 'firebase';
import config from './config.js';

const db = firebase.initializeApp({
    apiKey: "AIzaSyAM76apksRb45hAOdBYo1ViSdCCABKTQnE",
    authDomain: "sisehat-api-4c78d.firebaseapp.com",
    projectId: "sisehat-api-4c78d",
    storageBucket: "sisehat-api-4c78d.appspot.com",
    messagingSenderId: "482710330133",
    appId: "1:482710330133:web:3070f173cba2178459e71c"
})

export default db;