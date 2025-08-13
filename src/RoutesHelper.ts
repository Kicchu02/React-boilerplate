import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Routes = {
  SignUp: "signUp",
  SignIn: "signIn",
} as const;

export const SearchParams = {} as const;

export type NavigateHelper = {
  navigateToSignIn: () => void;
  navigateToSignUp: () => void;
};

export const useAppNavigation = (): NavigateHelper => {
  const navigate = useNavigate();

  const navigateToSignIn = useCallback(() => {
    navigate(`/${Routes.SignIn}`);
  }, [navigate]);

  const navigateToSignUp = useCallback(() => {
    navigate(`/${Routes.SignUp}`);
  }, [navigate]);

  return { navigateToSignIn, navigateToSignUp };
};
