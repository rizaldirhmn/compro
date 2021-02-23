import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { ActivitySection } from "../../components/activity-section/activity-section";
import { HistorySection } from "../../components/history-section/history-section";
import { DescriptionText } from "../../components/mui-typography/description-text/description-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import { TeamSection } from "../../components/team-section/team-section";
import useStyles from "./company.style";
import { JobSection } from "../../components/job-section/job-section";

export const CompanyPage = () => {
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
              <SubtitleText className={classes.subtitle} text="About us" />
              <HeaderText className={classes.header} text="EOA Tech" />
            </Grid>
            <Grid item md={5} sm={12}>
              <Box>
                <DescriptionText
                  className={classes.description}
                  text="How and what kind of sotware house company was formed, Mission Vission, a brief history and anyone behind the software house company"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <HistorySection />
      <ActivitySection />
      <TeamSection />
      <JobSection />
      <Box display="flex" justifyContent="center">
        <Box marginTop={10} marginBottom={10}>
          <Typography className={classes.sendText}>
            Please send your resume to{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Email
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
