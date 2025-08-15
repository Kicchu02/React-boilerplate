import { types } from "mobx-state-tree";
import React from "react";
import { RootStoreContext } from "./RootStoreContext";
import { createSignInPageStore, SignInPageStore } from "./SignInPageStore";
import { createSignUpPageStore, SignUpPageStore } from "./SignUpPageStore";

export type PopupVariant = "success" | "error" | "warning" | "info";

export const RootStore = types
  .model("RootStore", {
    isUserLoggedIn: types.optional(types.boolean, false),
    signUpPageStore: SignUpPageStore,
    signInPageStore: SignInPageStore,
    showFeatureInDevPopup: types.optional(types.boolean, false),
    isPopupOpen: types.optional(types.boolean, false),
    popupMessage: types.optional(types.string, ""),
    popupVariant: types.optional(
      types.union(
        types.literal("success"),
        types.literal("error"),
        types.literal("warning"),
        types.literal("info")
      ),
      "info"
    ),
  })
  .actions((store) => ({
    setIsUserLoggedIn: (isUserLoggedIn: boolean): void => {
      store.isUserLoggedIn = isUserLoggedIn;
    },
    setShowFeatureInDevPopup: (showFeatureInDevPopup: boolean): void => {
      store.showFeatureInDevPopup = showFeatureInDevPopup;
    },
    setIsPopupOpen: (isPopupOpen: boolean): void => {
      store.isPopupOpen = isPopupOpen;
    },
    setPopupMessage: (popupMessage: string): void => {
      store.popupMessage = popupMessage;
    },
    setPopupVariant: (popupVariant: PopupVariant): void => {
      store.popupVariant = popupVariant;
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
