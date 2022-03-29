  import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIDpHAwRvDOA9HSuTXxVIER2wc1sFD_sc",
  authDomain: "instagram-clone-6ee6f.firebaseapp.com",
  projectId: "instagram-clone-6ee6f",
  storageBucket: "instagram-clone-6ee6f.appspot.com",
  messagingSenderId: "767222714721",
  appId: "1:767222714721:web:ef06be3cc85e667f57f520",
  measurementId: "G-3MBLWNW5ET"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


