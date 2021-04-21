import { setDropdownItem } from "../utils";
import {dropdownItemTypes} from '../dropdown-item/dropdownItemTypes'
const INITIAL_STATE = {
  dropdownItems: [],
};

const dropdownItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropdownItemTypes.SET_DROPDOWN_ITEM:
      return {
        ...state,
        dropdownItems: setDropdownItem(action.payload, state.dropdownItems),
      };
      break;
    // case dropdownItemTypes.REMOVE_DROPDOWN_ITEM:
    //   return {
    //     ...state,
    //     dropdownItems: removeDropdownItem(action.payload),
    //   };
    //   break;

    default:
      return state;
  }
};
export default dropdownItemReducer