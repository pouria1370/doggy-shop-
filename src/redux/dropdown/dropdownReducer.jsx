import  dropdownTypes from '../dropdown/dropdownTypes'

const INITIAL_STATE = {
  hidden:true,
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropdownTypes.TOGGLE_TO_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden,
      };
      case dropdownTypes.SET_HIDDEN_FROM_HEADER:
        return{
          ...state,
          hidden:true,
        }

    default:
      return state;
  }
};

export default dropdownReducer;
