import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCqJ3_9UnwsrjbrykqC3HX4RN2d0O3a-6A",
  authDomain: "e-ride-6af54.firebaseapp.com",
  projectId: "e-ride-6af54",
  storageBucket: "e-ride-6af54.appspot.com",
  messagingSenderId: "864283074949",
  appId: "1:864283074949:web:b640315c56c78bd303a4ec"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
