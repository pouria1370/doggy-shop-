import { createSelector } from "reselect";

const dropdownItemState = (state) => state.dropdownItem;
export const dropdownItemSelector = createSelector(
  [dropdownItemState],
  (dropdownItem) => dropdownItem.dropdownItems
);

export const accumulatorDropdownItemSelector = createSelector(
  [dropdownItemSelector],
  (dropdownItems) =>
    dropdownItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);
export const accumulatorPriceCheckOutSelector = createSelector(
  [dropdownItemSelector],
  (dropdownItems) =>
    dropdownItems.reduce((accumulator, item) => accumulator + item.quantity*item.price, 0)
);
