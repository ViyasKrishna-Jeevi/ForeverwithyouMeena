// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAIKB7dXqmJ4CSmyFnR3QslGjlGGOTh-J4",
    authDomain: "forever-with-you-2426c.firebaseapp.com",
    projectId: "forever-with-you-2426c",
    storageBucket: "forever-with-you-2426c.firebasestorage.app",
    messagingSenderId: "907381539150",
    appId: "1:907381539150:web:16d874a2e8bca97a2fde1f",
    measurementId: "G-XQ1TCF62HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Make available globally
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.serverTimestamp = serverTimestamp;