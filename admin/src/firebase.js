import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDYt5vefsIIoH5VV5pVoN31ZMKaUZEYyF0",
    authDomain: "rochakmovies-9a994.firebaseapp.com",
    projectId: "rochakmovies-9a994",
    storageBucket: "rochakmovies-9a994.appspot.com",
    messagingSenderId: "661023909554",
    appId: "1:661023909554:web:ffbbf7ffffe826a02c4bab",
    measurementId: "G-S7D8DS9H70"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;