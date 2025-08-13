import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Routes } from "./RoutesHelper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: Routes.SignUp, element: <SignUpPage /> },
      { path: Routes.SignIn, element: <SignInPage /> },
    ],
  },
]);
