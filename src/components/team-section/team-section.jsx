import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./team-section.style";
import { DescriptionText } from "../mui-typography/description-text/description-text";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";

export const TeamSection = ({ t }) => {
  const classes = useStyles();

  return (
    <>
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
              text={`${t("TeamText.1")}`}
            />
            <HeaderText
              className={classes.header}
              text={`${t("TeamHeader.1")}`}
            />
          </Grid>
          <Grid item md={5} sm={12}>
            <Box>
              <DescriptionText
                className={classes.description}
                text={`${t("TeamDescription.1")}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={10}>
        <Grid container justify="space-between">
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <Grid key={idx} item lg={3} md={4} sm={6} xs={6}>
                <Box className={classes.teamContainer}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box className={classes.teamAvatar}></Box>
                    <Box marginTop={1}>
                      <Typography className={classes.teamName}>Name</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography className={classes.teamPosition}>
                      Position
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
