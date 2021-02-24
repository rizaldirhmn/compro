import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { DescriptionText } from "../../components/mui-typography/description-text/description-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import useStyles from "./project.style";
import { useTranslation } from "react-i18next";

export const ProjectPage = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <>
      <Box className={classes.container}>
        <Box marginTop={7}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            <Grid item md={7} sm={12} xs={12}>
              <SubtitleText text={`${t("ProjectText.1")}`} />
              <HeaderText
                className={classes.header}
                text={`${t("ProjectHeader.1")}`}
              />
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <Box>
                <DescriptionText
                  className={classes.description}
                  text={`${t("ProjectDescription.1")}`}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={7}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={5}
          >
            {Array(8)
              .fill("")
              .map((_, idx) => (
                <Grid key={idx} lg={3} md={4} sm={6} xs={12} item>
                  <Box className={classes.flex}>
                    <Box className={classes.pict}></Box>
                    <Box className={classes.space}>
                      <Box>
                        <Typography className={classes.title}>
                          D'Syirkah
                        </Typography>
                      </Box>
                      <Box className={classes.footerSpace}>
                        <Box className={classes.circle}></Box>
                        <Box>
                          <Typography className={classes.category}>
                            Category Service
                          </Typography>
                        </Box>
                      </Box>
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
