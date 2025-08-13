import { types } from "mobx-state-tree";
import React from "react";
import { RootStoreContext } from "./RootStoreContext";

export const RootStore = types
  .model("RootStore", {
    showFeatureInDevPopup: types.optional(types.boolean, false),
    isUserLoggedIn: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setShowFeatureInDevPopup: (showFeatureInDevPopup: boolean): void => {
      store.showFeatureInDevPopup = showFeatureInDevPopup;
    },
    setIsUserLoggedIn: (isUserLoggedIn: boolean): void => {
      store.isUserLoggedIn = isUserLoggedIn;
    },
  }));

export const RootStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const store = RootStore.create({});
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
