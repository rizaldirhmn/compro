import { Box } from "@material-ui/core";
import React, { useRef } from "react";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import useStyles from "./technology-section.style";
import Carousel from "react-elastic-carousel";
import data from "../../data/technology";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify-icons/akar-icons/arrow-right";
import arrowLeft from "@iconify-icons/akar-icons/arrow-left";

export const TechnologySection = ({ t }) => {
  let arrowButton = useRef(null);
  const classes = useStyles();

  const breakpoints = [
    { width: 600, itemsToShow: 2, itemsToScroll: 1 },
    { width: 960, itemsToShow: 6, itemsToScroll: 1 },
    { width: 1280, itemsToShow: 6, itemsToScroll: 1 },
    { width: 1920, itemsToShow: 8, itemsToScroll: 1 },
  ];

  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginBottom={10}
        >
          <Box marginTop={10}>
            <SubtitleText text={`${t("DevelopmentText.1")}`} />
          </Box>
          <Box marginTop={3} textAlign="center">
            <HeaderText text={`${t("DevelopmentHeader.1")}`} />
          </Box>
        </Box>
      </Box>
      <Box marginTop={5}>
        <Box>
          <Carousel
            breakPoints={breakpoints}
            showArrows={false}
            ref={(ref) => (arrowButton.current = ref)}
            renderPagination={() => {
              return <></>;
            }}
          >
            {data.map((d, idx) => (
              <Box key={idx}>
                <Icon icon={d.icon} className={classes.icon} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={10}
        marginBottom={7}
      >
        <Box
          marginRight={4}
          className={classes.cursor}
          onClick={() => arrowButton.current.slidePrev()}
        >
          <Icon icon={arrowLeft} className={classes.arrow} />
        </Box>
        <Box
          marginLeft={4}
          className={classes.cursor}
          onClick={() => arrowButton.current.slideNext()}
        >
          <Icon icon={arrowRight} className={classes.arrow} />
        </Box>
      </Box>
    </>
  );
};
