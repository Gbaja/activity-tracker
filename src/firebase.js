import firebase from "firebase";

const config = {
    apiKey: "AIzaSyD8muEEPuNRmA1583gGAjsK65T5vrpPXes",
    authDomain: "activity-tracker-ecf61.firebaseapp.com",
    databaseURL: "https://activity-tracker-ecf61.firebaseio.com",
    projectId: "activity-tracker-ecf61",
    storageBucket: "activity-tracker-ecf61.appspot.com",
    messagingSenderId: "529382901702"
  };
  firebase.initializeApp(config);
export default firebase;