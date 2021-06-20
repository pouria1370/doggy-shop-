import shopTypes from "./shopTypes";

const INITIAL_STATE = {
  collections: null,
  isFetching:false,
  error:undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTION_START:
      return{
        ...state,
        isFetching:true,

      }
    case shopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching:false
      };
    case shopTypes.FETCH_COLLECTION_FAILURE:
      return{
        ...state,
        error:action.payload,
        isFetching:false

      }
      
    default:
      return state;
  }
};

export default shopReducer;
