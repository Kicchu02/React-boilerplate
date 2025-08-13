import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useAppNavigation } from "../RoutesHelper";
import { useSignInPageStore } from "../stores/hooks";

export const SignInPage = observer((): React.ReactElement => {
  const navigateHelper = useAppNavigation();
  const signInPageStore = useSignInPageStore();

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Stack gap={4} width="400px" alignItems="center">
        <Typography variant="h4">Sign In</Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={signInPageStore.email}
          onChange={(e) => signInPageStore.setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={signInPageStore.password}
          onChange={(e) => signInPageStore.setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={signInPageStore.isButtonDisabled}
          onClick={signInPageStore.signIn}
          loading={signInPageStore.isLoading}
        >
          Sign In
        </Button>
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link
            onClick={navigateHelper.navigateToSignUp}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
});
