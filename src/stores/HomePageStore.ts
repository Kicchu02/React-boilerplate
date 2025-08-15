import axios from "axios";
import { flow, types, type Instance } from "mobx-state-tree";
import { EMPTY_STRING } from "../constants";

export const HomePageStore = types
  .model("HomePageStore", {
    isLoading: types.optional(types.boolean, false),
    dummyData: types.optional(types.string, EMPTY_STRING),
  })
  .actions((store) => ({
    dummyAPI: flow(function* () {
      store.isLoading = true;
      try {
        const response = yield axios.post(
          "http://localhost:8080/dummy/dummy",
          {},
          {
            withCredentials: true,
          }
        );
        store.dummyData = response.data.message;
      } catch (e) {
        console.error(e);
      } finally {
        store.isLoading = false;
      }
    }),
  }));

export const createHomePageStore = (): Instance<typeof HomePageStore> => {
  return HomePageStore.create({});
};
