import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDf-36xHzaEE1Yz-RwIDesh-US5vXMynDY",
  authDomain: "leadminerv2.firebaseapp.com",
  databaseURL: "https://leadminerv2.firebaseio.com",
  projectId: "leadminerv2",
  storageBucket: "leadminerv2.appspot.com",
  messagingSenderId: "923108816655",
  appId: "1:923108816655:web:07cb12ef4ff9c17f6b707a",
};

const fire = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const signInWithGoogle = async () => {
  auth.signInWithRedirect(provider);
};

export default fire;
