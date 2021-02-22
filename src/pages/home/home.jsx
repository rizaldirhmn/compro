import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import bg from "../../assets/home/bg-1.png";
import useStyles from "./home.style";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <img src={bg} alt="Background" className={classes.image} />
        <Box className={classes.overlay}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box p={2}>
              <Grid item xs={12}>
                <Typography variant="h2">We Code With High Quality</Typography>
              </Grid>
              <Grid item xs={12}>
                a
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
