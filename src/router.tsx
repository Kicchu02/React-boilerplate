import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "signUp", element: <SignUpPage /> },
      { path: "signIn", element: <SignInPage /> },
    ],
  },
]);
