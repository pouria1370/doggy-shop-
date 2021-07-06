import { takeEvery, put, call, all } from "redux-saga/effects";
import Shoptypes from "./shopTypes";
import {
  fireStore,
  FetchingShopDataFromDB,
} from "../../firebase/firebase.utils.js";
import { FetchCollectionfailure, FetchCollectionSuccess } from "./shopActions";

export function* fetchingCollectionHandler() {
    try {
        const ref = fireStore.collection("collections");
        const snapShotObject = yield ref.get();
        const collectoinMap = yield call(FetchingShopDataFromDB, snapShotObject);
         yield put(FetchCollectionSuccess(collectoinMap));
      } catch (error) {
        yield put(FetchCollectionfailure(error.message));
      }
}
export function* fetchingCollectionStart() {
  yield takeEvery(Shoptypes.FETCH_COLLECTION_START, fetchingCollectionHandler);
}

export default function*shopSagas(){
  yield all([call(fetchingCollectionStart)])
}