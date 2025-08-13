import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useAppNavigation } from "../RoutesHelper";
import { useSignUpPageStore } from "../stores/hooks";

export const SignUpPage = observer((): React.ReactElement => {
  const navigateHelper = useAppNavigation();
  const signUpPageStore = useSignUpPageStore();

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Stack gap={4} width="400px" alignItems="center">
        <Typography variant="h4">Sign Up</Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={signUpPageStore.email}
          onChange={(e) => signUpPageStore.setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={signUpPageStore.password}
          onChange={(e) => signUpPageStore.setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={signUpPageStore.isButtonDisabled}
          onClick={signUpPageStore.signUp}
          loading={signUpPageStore.isLoading}
        >
          Sign Up
        </Button>
        <Typography variant="body2">
          Already have an account?{" "}
          <Link
            onClick={navigateHelper.navigateToSignIn}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
});
