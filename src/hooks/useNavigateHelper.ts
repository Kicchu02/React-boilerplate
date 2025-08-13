import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type NavigateHelper = {
  navigateToSignIn: () => void;
  navigateToSignUp: () => void;
};

export const useNavigateHelper = (): NavigateHelper => {
  const navigate = useNavigate();

  const navigateToSignIn = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const navigateToSignUp = useCallback(() => {
    navigate("/signUp");
  }, [navigate]);

  return { navigateToSignIn, navigateToSignUp };
};
