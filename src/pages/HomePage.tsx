import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { WEB_TOKEN_COOKIE_NAME } from "../constants";
import { useNavigateHelper } from "../RoutesHelper";
import { useHomePageStore } from "../stores/hooks";

export const HomePage = observer((): React.ReactElement => {
  const homePageStore = useHomePageStore();
  const navigateHelper = useNavigateHelper();

  useEffect(() => {
    homePageStore.dummyAPI();
    return homePageStore.reset;
  }, [homePageStore]);

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      {homePageStore.isLoading ? (
        <CircularProgress />
      ) : (
        <Stack gap={2} alignItems="center">
          <Typography variant="h1">{homePageStore.dummyData}</Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              localStorage.removeItem(WEB_TOKEN_COOKIE_NAME);
              console.log(localStorage.getItem(WEB_TOKEN_COOKIE_NAME));
              homePageStore.reset();
              navigateHelper.navigateToSignIn();
            }}
          >
            Sign Out
          </Button>
        </Stack>
      )}
    </Stack>
  );
});
