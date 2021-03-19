import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./card-title-text.style";
// import { Trans } from "react-i18next";

export const CardTitleText = ({ text, i18nKey, count = 1, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        {...props}
        className={classes.text}
        color="textSecondary"
        variant="body1"
      >
        {text}
        {/* <Trans i18nKey={i18nKey} count={count}>
        </Trans> */}
      </Typography>
    </>
  );
};
