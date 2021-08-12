import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMKbzGNzBe7sNoDGk6U8G02-lUtDAaxyg",
    authDomain: "disneyplus-clone-95661.firebaseapp.com",
    projectId: "disneyplus-clone-95661",
    storageBucket: "disneyplus-clone-95661.appspot.com",
    messagingSenderId: "375330354860",
    appId: "1:375330354860:web:9118ef19e82c388d4ad109",
    measurementId: "G-4P0F6J17TQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;