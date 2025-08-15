import { Alert, Snackbar, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import type React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigateHelper } from "./RoutesHelper";
import { useRootStore } from "./stores/hooks";

export const App = observer((): React.ReactElement => {
  const navigateHelper = useNavigateHelper();
  const rootStore = useRootStore();

  useEffect(() => {
    if (!rootStore.isUserLoggedIn) {
      navigateHelper.navigateToSignIn();
    } else {
      navigateHelper.navigateToHome();
    }
  }, [navigateHelper, rootStore.isUserLoggedIn]);

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
