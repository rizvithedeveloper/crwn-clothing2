import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8tuZqas-yI-O5qZh4f0Fy4cNGam5Ox50",
  authDomain: "crwn-db-12353.firebaseapp.com",
  projectId: "crwn-db-12353",
  storageBucket: "crwn-db-12353.appspot.com",
  messagingSenderId: "1083385737006",
  appId: "1:1083385737006:web:2aa6e342568cd54a6414bf",
  measurementId: "G-BLT6JWLSS6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await docRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      docRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user ", error);
    }
  }

  return docRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
