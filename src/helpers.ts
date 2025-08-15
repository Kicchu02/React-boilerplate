import { getRoot, type IAnyStateTreeNode } from "mobx-state-tree";
import type { PopupVariant, RootStore } from "./stores/RootStore";

export const showFeatureInDevPopup = (store: IAnyStateTreeNode): void => {
  const rootStore = getRoot<typeof RootStore>(store);
  rootStore.setShowFeatureInDevPopup(true);
  setTimeout(() => {
    rootStore.setShowFeatureInDevPopup(false);
  }, 3000);
};

export const showPopup = (
  store: IAnyStateTreeNode,
  message: string,
  variant: PopupVariant
): void => {
  const rootStore = getRoot<typeof RootStore>(store);
  rootStore.setPopupMessage(message);
  rootStore.setPopupVariant(variant);
  rootStore.setIsPopupOpen(true);
  setTimeout(() => {
    rootStore.setIsPopupOpen(false);
  }, 3000);
};
