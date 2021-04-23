import { setDropdownItem } from "../utils";
import { addDropdownItem} from "../utils";
import { reduceDropdownItem} from "../utils";
import { removeDropdownItem} from "../utils";
import { dropdownItemTypes } from "../dropdown-item/dropdownItemTypes";
const INITIAL_STATE = {
  dropdownItems: [],
  number: 0,
};

const dropdownItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropdownItemTypes.SET_DROPDOWN_ITEM:
      return {
        ...state,
        dropdownItems: setDropdownItem(action.payload, state.dropdownItems),
        //number:quantityAccumulator(state.dropdownItems)
      };
      
    case dropdownItemTypes.REMOVE_DROPDOWN_ITEM:
      return {
        ...state,
        dropdownItems: removeDropdownItem(action.payload, state.dropdownItems),
      };
      
    case dropdownItemTypes.REDUCE_DROPDOWN_ITEM:
      return {
        ...state,
        dropdownItems: reduceDropdownItem(action.payload, state.dropdownItems),
      };
    case dropdownItemTypes.ADD_DROPDOWN_ITEM:
      return {
        ...state,
        dropdownItems: addDropdownItem(action.payload, state.dropdownItems),
      };
      

    default:
      return state;
  }
};
export default dropdownItemReducer;
