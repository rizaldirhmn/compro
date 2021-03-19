import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import { DescriptionText } from "../../components/mui-typography/description-text/description-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import useStyles from "./project.style";
import { useTranslation } from "react-i18next";
import data from "../../data/project";
import { CardTitleText } from "../../components/mui-typography/card-title-text/card-title-text";
import { CardSubtitleText } from "../../components/mui-typography/card-subtitle-text/card-subtitle-text";
import { PrimaryButton } from "../../components/mui-button/primary-button/primary-button";
import arrowRight from "@iconify-icons/akar-icons/arrow-right";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router";

export const ProjectPage = React.memo(() => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Box marginTop={10}>
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
        <Box marginTop={10}>
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            spacing={4}
          >
            {data.map((d, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <Box className={classes.card}>
                  <Box className={classes.containerPict}>
                    <img
                      src={d.project_img}
                      className={classes.pict}
                      alt={`${d.project_name} image`}
                    />
                  </Box>
                  <Box className={classes.cardBody}>
                    <Box className={classes.cardTitle}>
                      <Box>
                        <Box>
                          <CardSubtitleText text={`${d.project_category}`} />
                        </Box>
                        <Box className={classes.titleTextSpace}>
                          <CardTitleText text={`${d.project_name}`} />
                        </Box>
                      </Box>
                    </Box>
                    <Box className={classes.cardFooter}>
                      <PrimaryButton
                        endIcon={
                          <Icon icon={arrowRight} className={classes.icon} />
                        }
                        onClick={() => history.push(`project/${d.id}`)}
                        type="projectButton"
                        text={`${t("ProjectDetailText.1")}`}
                        id={d.id}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
});
