import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYiK2ywoQ74riKAC3eZ8UWEdVPWHgni8Q",
  authDomain: "linkedin-clone-cdaef.firebaseapp.com",
  projectId: "linkedin-clone-cdaef",
  storageBucket: "linkedin-clone-cdaef.appspot.com",
  messagingSenderId: "388400056580",
  appId: "1:388400056580:web:6761e86553dd4a25896851",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
