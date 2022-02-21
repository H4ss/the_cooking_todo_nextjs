import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// initializeApp({
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// });

// NEXT_PUBLIC_FIREBASE_API_KEY = "AIzaSyDBEEvixYE6E2cZYbgdky0wojqOCMUjWX0"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "nextjs-cooking-todos.firebaseapp.com"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID = "nextjs-cooking-todos"
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "nextjs-cooking-todos.appspot.com"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "979437420814"
// NEXT_PUBLIC_FIREBASE_APP_ID = "1:979437420814:web:872d9c487b7c2d70e2975f"

initializeApp({
    apiKey: "AIzaSyDBEEvixYE6E2cZYbgdky0wojqOCMUjWX0",
    authDomain: "nextjs-cooking-todos.firebaseapp.com",
    projectId: "nextjs-cooking-todos",
    storageBucket: "nextjs-cooking-todos.appspot.com",
    messagingSenderId: "979437420814",
    appId: "1:979437420814:web:872d9c487b7c2d70e2975f"
});

const firestore = getFirestore();

export {firestore};