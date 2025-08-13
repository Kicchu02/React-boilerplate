import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import type React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const App = observer((): React.ReactElement => {
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
});
