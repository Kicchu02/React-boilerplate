import axios, { AxiosError } from "axios";
import {
  applySnapshot,
  flow,
  getSnapshot,
  types,
  type Instance,
} from "mobx-state-tree";
import { EMPTY_STRING } from "../constants";

export const SignInPageStore = types
  .model("SignInPageStore", {
    email: types.optional(types.string, EMPTY_STRING),
    password: types.optional(types.string, EMPTY_STRING),
    isLoading: types.optional(types.boolean, false),
    isEmailInvalid: types.optional(types.boolean, false),
    isPasswordInvalid: types.optional(types.boolean, false),
  })
  .volatile(() => ({
    initialState: {} as ReturnType<typeof getSnapshot>,
  }))
  .actions((store) => ({
    afterCreate: (): void => {
      store.initialState = getSnapshot(store);
    },
    reset: (): void => {
      applySnapshot(store, store.initialState);
    },
    setEmail: (email: string): void => {
      store.email = email;
    },
    setPassword: (password: string): void => {
      store.password = password;
    },
    signIn: flow(function* () {
      store.isLoading = true;
      store.isEmailInvalid = false;
      store.isPasswordInvalid = false;
      try {
        yield axios.post("http://localhost:8080/user/signIn", {
          emailId: { emailId: store.email },
          password: store.password,
        });
      } catch (e) {
        const error = e as AxiosError;
        if (error.response) {
          const { status, data } = error.response;
          switch (status) {
            case 400:
              store.isEmailInvalid = true;
              break;
            case 401:
              if (data === "Email doesn't exist.") {
                store.isEmailInvalid = true;
              } else if (data === "Invalid password.") {
                store.isPasswordInvalid = true;
              }
              break;
          }
        }
      } finally {
        store.isLoading = false;
      }
    }),
  }))
  .views((store) => ({
    get isButtonDisabled(): boolean {
      return (
        store.email.trim() === EMPTY_STRING ||
        store.password.trim() === EMPTY_STRING
      );
    },
    get isAPIErrored(): boolean {
      return store.isEmailInvalid || store.isPasswordInvalid;
    },
  }));

export const createSignInPageStore = (): Instance<typeof SignInPageStore> => {
  return SignInPageStore.create({});
};
