import { CodeSharp } from "@material-ui/icons";
import { createSelector } from "reselect";

const collectionssstate = (state) => state.shop;

export const collectionssSelector = createSelector(
  [collectionssstate],
  (shop) => shop.collections
);
export const colectionOfCollectionsSelector = (idCollection) =>
  createSelector(
    [collectionssSelector],
    (collections) =>collections? collections[idCollection]:null
  );

export const collectionssSelectorToArray = createSelector(
  [collectionssstate],
  (shop) => {
   const collections=shop.collections;

    return collections? Object.keys(collections).map(
      (collection) => collections[collection]
    ):[];
  }
);

export const isFetchingGrabbing=createSelector(
  [collectionssstate],
  shop=>shop.isFetching
)

export const isCollectionLoaded=createSelector(
  [collectionssstate],
  shop=>!!shop.collections
)