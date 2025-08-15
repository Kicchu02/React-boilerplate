import { Alert, Snackbar, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import type React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRootStore } from "./stores/hooks";

export const App = observer((): React.ReactElement => {
  const navigate = useNavigate();
  const rootStore = useRootStore();

  useEffect(() => {
    const token = localStorage.getItem("webToken");
    if (!token) {
      navigate("/signIn");
    }
  }, [navigate]);

  return (
    <Stack height="100%">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={rootStore.showFeatureInDevPopup}
        message="This feature is still under development."
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={rootStore.isPopupOpen}
        message={rootStore.popupMessage}
      >
        <Alert severity={rootStore.popupVariant} variant="filled">
          {rootStore.popupMessage}
        </Alert>
      </Snackbar>
      <Outlet />
    </Stack>
  );
});
