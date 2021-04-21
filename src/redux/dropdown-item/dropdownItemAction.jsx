import {dropdownItemTypes} from "./dropdownItemTypes";
export const setItemToDropdown = (item) => ({
  type: dropdownItemTypes.SET_DROPDOWN_ITEM,
  payload: item,
});
