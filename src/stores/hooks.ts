import type { Instance } from "mobx-state-tree";
import { useContext } from "react";
import type { RootStore } from "./RootStore";
import { RootStoreContext } from "./RootStoreContext";
import { SignInPageStore } from "./SignInPageStore";
import { SignUpPageStore } from "./SignUpPageStore";

export function useRootStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

export const useSignUpPageStore = (): Instance<typeof SignUpPageStore> => {
  const store = useRootStore();
  return store.signUpPageStore;
};

export const useSignInPageStore = (): Instance<typeof SignInPageStore> => {
  const store = useRootStore();
  return store.signInPageStore;
};
