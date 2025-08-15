import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const Routes = {
  SignUp: "signUp",
  SignIn: "signIn",
  Home: "home",
} as const;

export const SearchParams = {} as const;

export type NavigateHelper = {
  navigateToSignIn: () => void;
  navigateToSignUp: () => void;
  navigateToHome: () => void;
};

export const useNavigateHelper = (): NavigateHelper => {
  const navigate = useNavigate();

  const navigateToSignIn = useCallback(() => {
    navigate(`/${Routes.SignIn}`);
  }, [navigate]);

  const navigateToSignUp = useCallback(() => {
    navigate(`/${Routes.SignUp}`);
  }, [navigate]);

  const navigateToHome = useCallback(() => {
    navigate(`/${Routes.Home}`);
  }, [navigate]);

  return useMemo(
    () => ({
      navigateToSignIn,
      navigateToSignUp,
      navigateToHome,
    }),
    [navigateToSignIn, navigateToSignUp, navigateToHome]
  );
};
