import {dropdownItemTypes} from "./dropdownItemTypes";
export const setItemToDropdown = (item) => ({
  type: dropdownItemTypes.SET_DROPDOWN_ITEM,
  payload: item,
});
export const removeItemToDropdown = (item) => ({
  type: dropdownItemTypes.REMOVE_DROPDOWN_ITEM,
  payload: item,
});
export const addItemToDropdown = (item) => ({
  type: dropdownItemTypes.ADD_DROPDOWN_ITEM,
  payload: item,
});
export const reduceItemToDropdown = (item) => ({
  type: dropdownItemTypes.REDUCE_DROPDOWN_ITEM,
  payload: item,
});
