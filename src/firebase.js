import firebase from "firebase";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "activity-tracker-ecf61.firebaseapp.com",
    databaseURL: "https://activity-tracker-ecf61.firebaseio.com",
  projectId: "activity-tracker-ecf61",
  storageBucket: "activity-tracker-ecf61.appspot.com",
  messagingSenderId: process.env.MESSENGER_ID
};
firebase.initializeApp(config);
export default firebase;
