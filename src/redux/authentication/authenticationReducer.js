import autheneticationTypes from "./authenticationsTypes";
const INITIAL_STATE = {
  currentUser: null,
  ERROR: null,
};
const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case autheneticationTypes.SIGN_IN_SUCCESS:
    // case autheneticationTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        ERROR: null,
      };
    case autheneticationTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        ERROR: null,
      };
    case autheneticationTypes.GOOGLE_SIGN_IN_FAILURE:
    case autheneticationTypes.EMAIL_SIGN_IN_FAILURE:
    case autheneticationTypes.SIGN_UP_FAILURE:
    case autheneticationTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        ERROR: action.payload,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
