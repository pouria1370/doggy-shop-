import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD3cJ863SszLSfWcLC80565VUeTnPGKBJU",
  authDomain: "doggy-crwn.firebaseapp.com",
  projectId: "doggy-crwn",
  storageBucket: "doggy-crwn.appspot.com",
  messagingSenderId: "211378990204",
  appId: "1:211378990204:web:f84026f51517fa658cadf9",
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
    console.log("this is a error", error.message);
  }
  return objectRefrence;
};

export const FetchingShopDataFromDB=(snapShotref)=>{
  const docs=snapShotref.docs.map(entitiy=>{

    const {dogs,title}=entitiy.data();
    return {
      id:entitiy.id,
      rootName:encodeURI(title.toLowerCase()),
      dogs,
      title
      
    }
  });
  return docs.reduce((accumulator,collection)=>{
 accumulator[collection.title.toLowerCase()]=collection;
 return accumulator 
  },{})
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
