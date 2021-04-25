import { createSelector } from "reselect";

const collectionssstate = (state) => state.shop;

export const collectionssSelector = createSelector(
  [collectionssstate],
  (shop) => shop.collections
);
export const colectionOfCollectionsSelector = (idCollection) =>
  createSelector(
    [collectionssSelector],
    (collections) =>   Object.keys(collections).map((collection) =>
  collection === idCollection ? collections[collection] : collection
)
  );

