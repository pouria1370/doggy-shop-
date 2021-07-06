import { all, put, call, takeLatest } from "redux-saga/effects";
import autheneticationTypes from "./authenticationsTypes";
import {
  auth,
  objectCRUD,
  provider,
  authenticationPersistor,
} from "../../firebase/firebase.utils";
import {
  googleSignInFailure,
  SignInSuccess,
  emailAndPassSignInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure
} from "../authentication/authenticationActions";


export function* authenticator ( user,dispalyName){
    const userRef = yield call(objectCRUD, user, dispalyName);
    const snapShot = yield userRef.get();
    yield put(
      SignInSuccess({
        id: snapShot.id,
        ...snapShot.data(),
      })
    );
} 

//GOOGLE AUTHENTCATION
export function* authenticationStartHandler() {
  try {
    const { user } = yield auth.signInWithPopup(provider);  
    yield authenticator(user);

  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* authenticationStart() {
  yield takeLatest(
    autheneticationTypes.GOOGLE_SIGN_IN_START,
    authenticationStartHandler
  );
}

//EMAIL AND PASSWEORD AUTHENTICATION
export function* emailAndPassAuthenticationStartHandler({
  payload: { email, password },
}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(authenticator,user);
  } catch (error) {
    yield put(emailAndPassSignInFailure(error));
  }
}

export function* emailAndPassAuthenticationStart() {
  yield takeLatest(
    autheneticationTypes.EMAIL_SIGN_IN_START,
    emailAndPassAuthenticationStartHandler
  );
}
//SIGNUP AUTHENTICSTION
export function* signUpAuthenticationStartHandler({
  payload: { email, password },
}) {
  try {
    const { user, dispalyName } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpSuccess);
    yield call(authenticator,user,dispalyName);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signUpAuthenticationStart() {
  yield takeLatest(
    autheneticationTypes.SIGN_UP_START,
    signUpAuthenticationStartHandler
  );
}

export function* authenticationCheckUpHandler() {
  const refAuth=yield authenticationPersistor();
  if(refAuth){
    const {user}=refAuth;
   yield call(authenticator,user);
  }
  else return;
}

export function* authenticationCheckUpListener() {
  yield takeLatest(
    autheneticationTypes.CHECK_AUTHENTICATON,
    authenticationCheckUpHandler
  );
}
export  function*signoutHandler(){
  try {
  yield  auth.signOut();
  yield put(signOutSuccess())
    
  } catch (error) {
    yield put(signOutFailure())
  }
}
export function* signOutListener() {
  yield takeLatest(
    autheneticationTypes.SIGN_OUT_START,
    signoutHandler
  );
}

export default function* authenticationSagas() {
  yield all([
    call(signUpAuthenticationStart),
    call(authenticationStart),
    call(emailAndPassAuthenticationStart),
    call(authenticationCheckUpListener),
    call(signOutListener)
  ]);
}
