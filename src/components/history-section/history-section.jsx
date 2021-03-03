import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import historyImage1 from "../../assets/company/img-history-1.png";
import historyImage2 from "../../assets/company/img-history-2.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import useStyles from "./history-section.style";
import { Trans } from "react-i18next";

export const HistorySection = ({ t }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box className={classes.containerHistory}>
        <Box marginTop={10}>
          <Box>
            <Grid
              container
              direction={matches ? "column-reverse" : "row"}
              justify="space-between"
            >
              <Grid item lg={6} md={12} sm={12}>
                <Box className={classes.historyContent}>
                  <Typography className={classes.historyTitle}>
                    <Trans count={1}>{t("OverviewHeader.1")}</Trans>
                  </Typography>
                  <Typography className={classes.historyDescription}>
                    <Trans count={1}>{t("OverviewDescription.1")}</Trans>
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <Grid container direction="row" justify="flex-end">
                  <img
                    src={historyImage1}
                    alt="Image History 1"
                    className={classes.imageHistory}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container direction="row" justify="space-between">
              <Grid item lg={6} md={12} sm={12}>
                <Grid container direction="row">
                  <img
                    src={historyImage2}
                    alt="Image History 2"
                    className={classes.imageHistory}
                  />
                </Grid>
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <Box className={classes.historyContent2}>
                  <Typography className={classes.historyTitle}>
                    <Trans count={1}>{t("HistoryHeader.1")}</Trans>
                  </Typography>
                  <Typography className={classes.historyDescription}>
                    <Trans count={1}>{t("HistoryDescription.1")}</Trans>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
