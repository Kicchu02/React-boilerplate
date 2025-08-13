import { Stack } from "@mui/material";
import type React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const App = (): React.ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("webToken");
    if (!token) {
      navigate("/signIn");
    }
  }, [navigate]);

  return (
    <Stack height="100%">
      <Outlet />
    </Stack>
  );
};
