import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDju2lC26kSY7INUCske8UN92ly8OBZ7nE",
  authDomain: "doggy-shop-96630.firebaseapp.com",
  projectId: "doggy-shop-96630",
  storageBucket: "doggy-shop-96630.appspot.com",
  messagingSenderId: "881586774243",
  appId: "1:881586774243:web:7080753f8a2999f9aa65d6",
  measurementId: "G-MESXGRCPYJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const objectCRUD = async (userAuth, ...aditonalData) => {
  if (!userAuth) {
    return;
  }
  const objectRefrence = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await objectRefrence.get();

  try {
    if (!snapShot.exists) {
      const newDate = new Date();
      const { displayName, email } = userAuth;     
      await objectRefrence.set({
        newDate,
        displayName,
        email,
        ...aditonalData,
      });
    }
  } catch (error) {
    console.log("this is a error",error.message);
  }
  return objectRefrence
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
