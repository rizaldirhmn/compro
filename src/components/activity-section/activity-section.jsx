import React from "react";
import activity1 from "../../assets/company/activity/activity-1.png";
import activity2 from "../../assets/company/activity/activity-2.png";
import activity3 from "../../assets/company/activity/activity-3.png";
import activity4 from "../../assets/company/activity/activity-4.png";
import activity5 from "../../assets/company/activity/activity-5.png";
import activity6 from "../../assets/company/activity/activity-6.png";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./activity-section.style";

export const ActivitySection = () => {
  const classes = useStyles();
  return (
    <>
      <Box marginTop={10}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity1}
                alt="Activity 1"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity2}
                alt="Activity 2"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity3}
                alt="Activity 3"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity4}
                alt="Activity 4"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity5}
                alt="Activity 5"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Box>
              <img
                src={activity6}
                alt="Activity 6"
                className={classes.imageActivity}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
