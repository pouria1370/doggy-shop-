import autheneticationTypes from './authenticationsTypes'
const INITIAL_STATE = {
  currentUser: null,
};
const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case autheneticationTypes.SET_AUTHENTICATION:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
