import { CircularProgress, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useHomePageStore } from "../stores/hooks";

export const HomePage = observer((): React.ReactElement => {
  const homePageStore = useHomePageStore();

  useEffect(() => {
    homePageStore.dummyAPI();
  }, [homePageStore]);

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      {homePageStore.isLoading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h1">{homePageStore.dummyData}</Typography>
      )}
    </Stack>
  );
});
