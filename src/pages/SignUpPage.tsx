import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import type React from "react";
import { useNavigateHelper } from "../hooks/useNavigateHelper";

export const SignUpPage = (): React.ReactElement => {
  const navigateHelper = useNavigateHelper();

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Stack gap={4} width="400px" alignItems="center">
        <Typography variant="h4">Sign Up</Typography>
        <TextField label="Email" fullWidth required />
        <TextField label="Password" fullWidth required />
        <Button variant="contained" fullWidth size="large">
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
};
