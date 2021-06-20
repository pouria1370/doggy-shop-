import { createSelector } from "reselect";

const Directoriesstate = (state) => state.directory;

export const directoriesSelector = createSelector(
  [Directoriesstate],
  (directory) => directory.directories
);
export const directoriesSelectorToArray = createSelector(
  [directoriesSelector],
  (directories) => Object.keys(directories).
  map((entity) => directories[entity])
);
