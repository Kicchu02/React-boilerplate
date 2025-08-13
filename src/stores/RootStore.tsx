import { types } from "mobx-state-tree";
import React from "react";
import { RootStoreContext } from "./RootStoreContext";
import { createSignInPageStore, SignInPageStore } from "./SignInPageStore";
import { createSignUpPageStore, SignUpPageStore } from "./SignUpPageStore";

export const RootStore = types
  .model("RootStore", {
    showFeatureInDevPopup: types.optional(types.boolean, false),
    isUserLoggedIn: types.optional(types.boolean, false),
    signUpPageStore: SignUpPageStore,
    signInPageStore: SignInPageStore,
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
  const store = RootStore.create({
    signUpPageStore: createSignUpPageStore(),
    signInPageStore: createSignInPageStore(),
  });
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
