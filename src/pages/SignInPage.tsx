import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignInPage = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Stack gap={4} width="400px" alignItems="center">
        <Typography variant="h4">Sign In</Typography>
        <TextField label="Email" fullWidth required />
        <TextField label="Password" fullWidth required />
        <Button variant="contained" fullWidth size="large">
          Sign In
        </Button>
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link
            onClick={() => navigate("/signUp")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
