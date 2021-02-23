import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { DescriptionText } from "../../components/mui-typography/description-text/description-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import useStyles from "./job-section.style";
import data from "../../data/job";

export const JobSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box marginTop={10}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item md={7} sm={12}>
              <SubtitleText className={classes.subtitle} text="Position" />
              <HeaderText className={classes.header} text="Careers" />
            </Grid>
            <Grid item md={5} sm={12}>
              <Box>
                <DescriptionText
                  className={classes.description}
                  text="We keep looking for all levels of software developers from junior to senior developers in all range of skills"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={2}>
          <Grid container spacing={5} justify="center">
            {data.map((d, idx) => (
              <Grid key={idx} item lg={3} md={4} sm={6} xs={6}>
                <Box className={classes.jobContainer}>
                  <img
                    src={d.poster}
                    alt={`${d.position} Illustration`}
                    className={classes.teamAvatar}
                  />
                  <Box>
                    <Typography className={classes.teamName}>
                      {d.position}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
