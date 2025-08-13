import axios, { AxiosError } from "axios";
import { flow, types, type Instance } from "mobx-state-tree";

export const SignUpPageStore = types
  .model("SignUpPageStore", {
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setEmail: (email: string): void => {
      store.email = email;
    },
    setPassword: (password: string): void => {
      store.password = password;
    },
    signUp: flow(function* () {
      store.isLoading = true;
      try {
        yield axios.post("http://localhost:8080/user/signUp", {
          emailId: { emailId: store.email },
          password: store.password,
        });
      } catch (e) {
        const error = e as AxiosError;
        if (error.response) {
          const { status, data } = error.response;
          switch (status) {
            case 409:
              console.log(data);
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
      return store.email.trim() === "" || store.password.trim() === "";
    },
  }));

export const createSignUpPageStore = (): Instance<typeof SignUpPageStore> => {
  return SignUpPageStore.create({});
};
