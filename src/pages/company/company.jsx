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
import { useTranslation, Trans } from "react-i18next";

export const CompanyPage = React.memo(() => {
  const classes = useStyles();

  const { t } = useTranslation();

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
              <SubtitleText
                className={classes.subtitle}
                text={`${t("AboutUsText.1")}`}
              />
              <HeaderText
                className={classes.header}
                text={`${t("AboutUsHeader.1")}`}
              />
            </Grid>
            <Grid item md={5} sm={12}>
              <Box>
                <DescriptionText
                  className={classes.description}
                  text={`${t("AboutUsDescription.1")}`}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <HistorySection t={t} />
      <ActivitySection />
      <Box className={classes.background}>
        <Box className={classes.container}>
          <Box padding="50px 0">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="baseline"
            >
              <Grid item md={6} sm={12} xs={12}>
                <Box>
                  <Box className={classes.vissionText}>
                    <Typography color="textPrimary" className={classes.title}>
                      <Trans count={1}>{t("VissionHeader.1")}</Trans>
                    </Typography>
                  </Box>
                  <Box className={classes.sectionSpaceVission}>
                    <Typography
                      color="textSecondary"
                      className={classes.bottomSectionText}
                    >
                      <Trans count={1}>{t("VissionDescription.1")}</Trans>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Box>
                  <Box className={classes.missionText}>
                    <Typography color="textPrimary" className={classes.title}>
                      <Trans count={1}>{t("MissionHeader.1")}</Trans>
                    </Typography>
                  </Box>
                  <Box className={classes.sectionSpaceMission}>
                    <Typography
                      color="textSecondary"
                      className={classes.bottomSectionText}
                    >
                      <Trans count={1}>{t("MissionDescription.1")}</Trans>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <TeamSection t={t} />
      <JobSection t={t} />
      <Box display="flex" justifyContent="center">
        <Box marginTop={10} marginBottom={10}>
          <Typography className={classes.sendText}>
            <Trans count={1}>{t("ResumeText.1")}</Trans>
            <span
              style={{
                textDecoration: "underline",
                marginLeft: 7,
                cursor: "pointer",
              }}
            >
              <Trans count={1}>{t("ResumeTextEmail.1")}</Trans>
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
});
