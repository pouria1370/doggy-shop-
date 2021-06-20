import shopTypes from "./shopTypes";
import {
  fireStore,
  FetchingShopDataFromDB,
} from "../../firebase/firebase.utils.js";
export const FetchCollectionStart = () => ({
  type: shopTypes.FETCH_COLLECTION_START,
});
export const FetchCollectionfailure = (error) => ({
  type: shopTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});
export const FetchCollectionSuccess = (objectCollection) => ({
  type: shopTypes.FETCH_COLLECTION_SUCCESS,
  payload: objectCollection,
});
export const FetchCollectionAsyncStart = () => {
  return (dispatch) => {
    
      const ref = fireStore.collection("collections");

      dispatch(FetchCollectionStart());
      ref.get().then( (snapShot) => {
        const collectoinMap = FetchingShopDataFromDB(snapShot);
        dispatch(FetchCollectionSuccess(collectoinMap));
      }).catch(ERROR=>FetchCollectionfailure(ERROR.message));

    } 
  
};
