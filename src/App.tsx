import { Stack } from "@mui/material";
import type React from "react";
import { Outlet } from "react-router-dom";

export const App = (): React.ReactElement => {
  return (
    <Stack height="100%">
      <Outlet />
    </Stack>
  );
};
