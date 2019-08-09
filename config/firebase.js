import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvERcNS8y_C-V_SEWRA0IzFkhWtT3m5MM",
  authDomain: "ezfood-75840.firebaseapp.com",
  databaseURL: "https://ezfood-75840.firebaseio.com",
  projectId: "ezfood-75840",
  storageBucket: "",
  messagingSenderId: "80407576968",
  appId: "1:80407576968:web:7a92fffc1af144b6"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;

export default fire;
