import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { DescriptionText } from "../../components/mui-typography/description-text/description-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import useStyles from "./detail-project.style";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../components/mui-button/primary-button/primary-button";
import detailProject from "../../data/project";

export const ProjectDetailPage = ({ match }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const params = match.params.id;
  const matchedData = detailProject.find((data) => {
    return data.id === parseInt(params);
  });

  return (
    <Container>
      <Box marginTop={10}>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item md={7} sm={12} xs={12}>
            <SubtitleText text={`${matchedData.project_category}`} />
            <HeaderText
              className={classes.header}
              text={`${matchedData.project_name}`}
            />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Box>
              <DescriptionText
                className={classes.description}
                text="There have been many projects we have built according to the necessary spesifications and needs. With the development using sophisticated technologies"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.detailProjectSpacing}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={7} lg={7} xl={7}>
            <Box className={classes.containerPict}>
              <img
                src={`${matchedData.project_detail_image}`}
                className={classes.pict}
                alt="test"
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={5} lg={5} xl={5}>
            <Box className={classes.descriptionProject}>
              <Box className={classes.spacingText}>
                <SubtitleText text="Description" />
              </Box>
              <Box className={classes.spacingText}>
                <DescriptionText
                  className={classes.descriptionProjectText}
                  text={`${matchedData.project_description}`}
                />
                {matchedData.project_description_items ? (
                  <Box marginTop={2}>
                    {matchedData.project_description_items.map((data, idx) => (
                      <ul key={idx} style={{ margin: 0, padding: 0 }}>
                        <li style={{ marginLeft: "15px" }}>
                          <DescriptionText
                            className={classes.descriptionProjectText}
                            text={`${data.text}`}
                          />
                        </li>
                      </ul>
                    ))}
                  </Box>
                ) : null}
              </Box>
              <Box className={classes.spacingText}>
                {matchedData.project_name === "Chatbot" ? null : (
                  <PrimaryButton
                    text="Visit Website"
                    type="detailProjectButton"
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
