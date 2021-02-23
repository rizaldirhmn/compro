import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import historyImage1 from "../../assets/company/img-history-1.png";
import historyImage2 from "../../assets/company/img-history-2.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import useStyles from "./history-section.style";

export const HistorySection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box className={classes.containerHistory}>
        <Box marginTop={12}>
          <Box>
            <Grid
              container
              direction={matches ? "column-reverse" : "row"}
              justify="space-between"
            >
              <Grid item lg={6} md={12}>
                <Box className={classes.historyContent}>
                  <Typography className={classes.historyTitle}>
                    Overview
                  </Typography>
                  <Typography className={classes.historyDescription}>
                    Eoa tech international is a software house, a company that
                    specializes in the development of software or apps. Eoa tech
                    has been a lot involved helping clients solve their
                    problems. As it grows, it wants to be known more and more,
                    and it brings in new clients. Hence eoa tech international
                    needs a website to introduce, promote, inform clients of eoa
                    tech international, prospective clients, and show previously
                    generated applications.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={12}>
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
                    History
                  </Typography>
                  <Typography className={classes.historyDescription}>
                    Eoa tech international is a software house, a company that
                    specializes in the development of software or apps. Eoa tech
                    has been a lot involved helping clients solve their
                    problems. As it grows, it wants to be known more and more,
                    and it brings in new clients. Hence eoa tech international
                    needs a website to introduce, promote, inform clients of eoa
                    tech international, prospective clients, and show previously
                    generated applications.
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
