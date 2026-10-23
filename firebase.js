// Replace every placeholder with your Firebase project's real values.
// Never put a service-account/private admin key in this file.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoekFd-DfeypBkSfmhCcVLg2s4N4Z1BL0",
  authDomain: "animeworld-e8424.firebaseapp.com",
  projectId: "animeworld-e8424",
  storageBucket: "animeworld-e8424.firebasestorage.app",
  messagingSenderId: "982148190554",
  appId: "1:982148190554:web:978f19e60c620fc4d6e363",
  measurementId: "G-YNQNW5FNG9"
};

// Paste the UID of your own admin account from Firebase Authentication.
export const ADMIN_UID = 'NTnbJ0CqZ2Mk2jsxWmLEzaM34Rm2';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
