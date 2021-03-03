import { Box } from "@material-ui/core";
import React, { useRef } from "react";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import useStyles from "./client-section.style";
import data from "../../data/client";
import arrowRight from "@iconify-icons/akar-icons/arrow-right";
import arrowLeft from "@iconify-icons/akar-icons/arrow-left";
import Carousel from "react-elastic-carousel";
import { Icon } from "@iconify/react";

export const ClientSection = ({ t }) => {
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
        >
          <Box marginTop={10} textAlign="center">
            <SubtitleText text={`${t("ClientText.1")}`} />
          </Box>
          <Box marginTop={3}>
            <HeaderText text={`${t("ClientHeader.1")}`} />
          </Box>
        </Box>
      </Box>
      <Box marginTop={7}>
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
              <img
                src={d.logo}
                alt={`Logo Client ${idx}`}
                className={classes.image}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={7}
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
