import type { Instance } from "mobx-state-tree";
import { useContext } from "react";
import type { RootStore } from "./RootStore";
import { RootStoreContext } from "./RootStoreContext";

export function useRootStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
